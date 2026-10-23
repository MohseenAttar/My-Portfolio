// EmailJS REST API, called directly (no SDK). Keys come from the VITE_* values in .env.
const ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';

export class ContactError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

export async function sendContactMessage({ name, email, message }) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new ContactError('NOT_CONFIGURED', 'EmailJS environment variables are missing.');
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name.trim(),
        from_email: email.trim(),
        reply_to: email.trim(),
        message: message.trim(),
      },
    }),
  });

  if (!response.ok) {
    throw new ContactError('SEND_FAILED', `EmailJS responded with status ${response.status}.`);
  }
}
