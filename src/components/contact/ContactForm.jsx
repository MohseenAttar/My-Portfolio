import { useRef, useState } from 'react';
import { PROFILE } from '../../data/profile.js';
import { sendContactMessage } from '../../utils/emailjs.js';
import { LIMITS, validateContact } from '../../utils/validation.js';
import { AlertCircleIcon, CheckCircleIcon, SendIcon } from '../icons.jsx';

const INITIAL_VALUES = { name: '', email: '', message: '', website: '' };
const COOLDOWN_MS = 30000;
const SUCCESS_MESSAGE = "Thanks for reaching out! Your message has been sent and I'll reply to your email.";

const inputClasses = (hasError) =>
  `w-full rounded-[10px] border bg-white/[0.04] px-4 py-3 text-ink placeholder:text-ink-muted transition-colors focus:border-gold ${
    hasError ? 'border-red-400/60' : 'border-white/10'
  }`;

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-1.5 text-sm text-red-400">
          <AlertCircleIcon className="shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');
  const formRef = useRef(null);
  const lastSentAt = useRef(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const finishSuccess = () => {
    setStatus('success');
    setFeedback(SUCCESS_MESSAGE);
    setValues(INITIAL_VALUES);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    const validationErrors = validateContact(values);
    setErrors(validationErrors);
    const firstInvalid = Object.keys(validationErrors)[0];
    if (firstInvalid) {
      formRef.current.elements[firstInvalid]?.focus();
      return;
    }

    // Honeypot: only bots fill the hidden field. Fake a success so they don't retry.
    if (values.website) {
      finishSuccess();
      return;
    }

    // Client-side throttle between sends (EmailJS also rate-limits on its side).
    if (Date.now() - lastSentAt.current < COOLDOWN_MS) {
      setStatus('error');
      setFeedback('Please wait a few seconds before sending another message.');
      return;
    }

    setStatus('sending');
    setFeedback('');
    try {
      await sendContactMessage(values);
      lastSentAt.current = Date.now();
      finishSuccess();
    } catch (error) {
      setStatus('error');
      setFeedback(
        error.code === 'NOT_CONFIGURED'
          ? `The contact form isn't set up yet. Please email me directly at ${PROFILE.email}.`
          : `Something went wrong while sending. Please try again, or email me at ${PROFILE.email}.`
      );
    }
  };

  const isSending = status === 'sending';

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="glass relative rounded-2xl p-6 sm:p-8">
      <h3 className="text-xl font-semibold text-ink">Send me a message</h3>
      <p className="mt-1 text-sm text-ink-secondary">I'll reply to the email address you provide.</p>

      <div className="mt-6 space-y-5">
        <Field id="contact-name" label="Name" error={errors.name}>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={LIMITS.name}
            value={values.name}
            onChange={handleChange}
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            className={inputClasses(errors.name)}
          />
        </Field>

        <Field id="contact-email" label="Email" error={errors.email}>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={LIMITS.email}
            value={values.email}
            onChange={handleChange}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            className={inputClasses(errors.email)}
          />
        </Field>

        <Field id="contact-message" label="Message" error={errors.message}>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            maxLength={LIMITS.messageMax}
            value={values.message}
            onChange={handleChange}
            placeholder="Tell me about the role or project"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            className={`${inputClasses(errors.message)} resize-y`}
          />
          <p className="mt-1.5 text-right text-xs text-ink-muted">
            {values.message.length} / {LIMITS.messageMax}
          </p>
        </Field>

        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          <label>
            Website
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={values.website}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isSending}
          className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-gold-bright px-6 py-3 text-sm font-semibold text-bg shadow-[0_0_20px_2px_rgba(245,197,66,0.35)] transition-all hover:shadow-[0_0_28px_4px_rgba(245,197,66,0.55)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSending ? 'Sending…' : 'Send message'}
          {!isSending && <SendIcon />}
        </button>

        <div role="status" aria-live="polite" className="text-sm">
          {status === 'success' && (
            <p className="flex items-start gap-2 text-gold-soft">
              <CheckCircleIcon className="mt-0.5 shrink-0 text-gold" />
              {feedback}
            </p>
          )}
          {status === 'error' && (
            <p className="flex items-start gap-2 text-red-400">
              <AlertCircleIcon className="mt-0.5 shrink-0" />
              {feedback}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
