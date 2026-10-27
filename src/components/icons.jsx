export function GitHubIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      />
    </svg>
  );
}

export function LinkedInIcon({ className, mono }) {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" className={className} aria-hidden="true">
      <path
        fill={mono ? 'currentColor' : '#0A66C2'}
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

export function ResumeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" className={className} aria-hidden="true">
      <path
        d="M7 3h7l5 5v12.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V3.5A.5.5 0 0 1 7 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.4" fill="none" />
    </svg>
  );
}

export function BriefcaseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" className={className} aria-hidden="true">
      <path
        d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
      <rect x="3.5" y="7" width="17" height="12" rx="1.8" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M3.5 12.5h17" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function MapPinIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" className={className} aria-hidden="true">
      <path
        d="M12 21.5s7-6.4 7-11.8A7 7 0 0 0 5 9.7c0 5.4 7 11.8 7 11.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
      <circle cx="12" cy="9.7" r="2.4" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </svg>
  );
}

export function GraduationCapIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" className={className} aria-hidden="true">
      <path
        d="M2.5 9.5 12 5l9.5 4.5-9.5 4.5-9.5-4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M6.5 11.7v4c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M21 9.5v5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function LayersIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" className={className} aria-hidden="true">
      <path
        d="M12 3.5 3 8l9 4.5L21 8l-9-4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M3 12l9 4.5 9-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path d="M3 16l9 4.5 9-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function CalendarIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" className={className} aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15.5" rx="1.8" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M3.5 9.5h17" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 3v3.5M16 3v3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function AwardIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" className={className} aria-hidden="true">
      <circle cx="12" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M9 13.5 7.5 21l4.5-2.4 4.5 2.4-1.5-7.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function ClipboardCheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" className={className} aria-hidden="true">
      <rect x="5" y="4.5" width="14" height="16" rx="1.8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M9 4.5V3.8A1.3 1.3 0 0 1 10.3 2.5h3.4A1.3 1.3 0 0 1 15 3.8v.7" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M8.5 13l2.2 2.2L15.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function BuildingIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" className={className} aria-hidden="true">
      <rect x="5" y="3.5" width="14" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M9 8h2M13 8h2M9 12h2M13 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 20.5v-4h4v4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function UsersIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" className={className} aria-hidden="true">
      <circle cx="9" cy="8.5" r="3.2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M3 19.5c0-3.2 2.7-5.5 6-5.5s6 2.3 6 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M15.5 5.6a3 3 0 0 1 0 5.8M17.5 14.4c2 .6 3.5 2.3 3.5 5.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function CheckCircleIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="m8 12.3 2.8 2.8L16 9.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" className={className} aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function CodeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" className={className} aria-hidden="true">
      <path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function TerminalIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" className={className} aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="m7.5 9.5 3 2.5-3 2.5M12.5 15h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function DatabaseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" className={className} aria-hidden="true">
      <ellipse cx="12" cy="6" rx="7.5" ry="3" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </svg>
  );
}

export function WrenchIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" className={className} aria-hidden="true">
      <path d="M14.5 6.5a4 4 0 0 0 5 5L11 20a2.1 2.1 0 0 1-3-3l8.5-8.5a4 4 0 0 0-2-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function ApiIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" className={className} aria-hidden="true">
      <circle cx="6" cy="12" r="2.3" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <circle cx="18" cy="6" r="2.3" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <circle cx="18" cy="18" r="2.3" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="m8 11 8-4M8 13l8 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function TrophyIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" className={className} aria-hidden="true">
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
      <path d="M8 6H5a1 1 0 0 0-1 1c0 2.2 1.6 3.8 4 4M16 6h3a1 1 0 0 1 1 1c0 2.2-1.6 3.8-4 4M12 13v4M8.5 20h7M10 17h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function MailIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="m3.5 7 8.5 6 8.5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export const LinkedInMonoIcon = (props) => <LinkedInIcon {...props} mono />;

export function EyeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" className={className} aria-hidden="true">
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" fill="none" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" fill="none" />
    </svg>
  );
}

export function CloseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function ZapIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" className={className} aria-hidden="true">
      <path d="M13 2.5 4.5 13.5H11l-1 8 8.5-11H12l1-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
    </svg>
  );
}