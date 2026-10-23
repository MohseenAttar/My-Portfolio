import { useEffect, useRef, useState } from 'react';
import { PROFILE } from '../../data/profile.js';
import { displayUrl } from '../../utils/format.js';
import {
  CheckCircleIcon,
  CopyIcon,
  GitHubIcon,
  LinkedInMonoIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from '../icons.jsx';

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
    } catch {
      return;
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy email address"
        className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-ink-secondary transition-colors hover:border-gold/50 hover:text-gold"
      >
        {copied ? <CheckCircleIcon className="h-3.5 w-3.5 text-gold" /> : <CopyIcon />}
        {copied ? 'Copied' : 'Copy'}
      </button>
      <span className="sr-only" role="status">
        {copied ? 'Email address copied' : ''}
      </span>
    </>
  );
}

function ContactRow({ Icon, label, value, href, external, action }) {
  const valueClasses = 'mt-0.5 block truncate text-[0.95rem] text-ink';

  return (
    <div className="flex items-center gap-3.5 px-6 py-4 sm:px-7">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
        <Icon />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-ink-muted">{label}</p>
        {href ? (
          <a
            href={href}
            {...(external && { target: '_blank', rel: 'noreferrer' })}
            className={`${valueClasses} transition-colors hover:text-gold`}
          >
            {value}
          </a>
        ) : (
          <p className={valueClasses}>{value}</p>
        )}
      </div>
      {action}
    </div>
  );
}

export default function ContactInfo() {
  return (
    <div className="glass divide-y divide-white/10 overflow-hidden rounded-2xl">
      <ContactRow
        Icon={MailIcon}
        label="Email"
        value={PROFILE.email}
        href={`mailto:${PROFILE.email}`}
        action={<CopyEmailButton />}
      />
      <ContactRow Icon={PhoneIcon} label="Phone" value={PROFILE.phone} />
      <ContactRow
        Icon={LinkedInMonoIcon}
        label="LinkedIn"
        value={displayUrl(PROFILE.linkedin)}
        href={PROFILE.linkedin}
        external
      />
      <ContactRow
        Icon={GitHubIcon}
        label="GitHub"
        value={displayUrl(PROFILE.github)}
        href={PROFILE.github}
        external
      />
      <ContactRow Icon={MapPinIcon} label="Location" value={PROFILE.location} />
    </div>
  );
}
