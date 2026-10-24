import { useEffect, useState } from 'react';
import { PROFILE } from '../data/profile.js';
import { GitHubIcon, LinkedInIcon, ResumeIcon, BriefcaseIcon, MapPinIcon } from './icons.jsx';

const links = [
  { label: 'GitHub', href: PROFILE.github, Icon: GitHubIcon, mono: true },
  { label: 'LinkedIn', href: PROFILE.linkedin, Icon: LinkedInIcon, mono: false },
  { label: 'Resume', href: PROFILE.resumeUrl, Icon: ResumeIcon, mono: true },
];

export default function Hero() {
  const [typed, setTyped] = useState('');
  const [typingDone, setTypingDone] = useState(false);

  // Skips the typing animation if reduced motion is requested.
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setTyped(PROFILE.name);
      setTypingDone(true);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(PROFILE.name.slice(0, i));
      if (i >= PROFILE.name.length) {
        clearInterval(id);
        setTypingDone(true);
      }
    }, 75);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative w-full max-w-full overflow-hidden">
      <div className="max-w-content mx-auto px-5 pt-10 pb-16 sm:px-10 sm:pt-20 sm:pb-28 lg:px-16">
        <div className="grid grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="flex min-w-0 flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            <div
              className="rise-in inline-flex max-w-full items-center gap-2.5 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold sm:text-sm"
              style={{ animationDelay: '0ms' }}
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              {PROFILE.role}
            </div>

            <h1
              className="mt-6 break-words text-[clamp(2.25rem,10vw,3rem)] font-semibold leading-[1.1] text-ink sm:text-6xl sm:leading-[1.08] lg:text-[3.75rem]"
              aria-label={PROFILE.name}
            >
              <span aria-hidden="true">
                {typed}
                {!typingDone && (
                  <span className="cursor-blink ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] bg-gold align-middle" />
                )}
              </span>
            </h1>
            <span
              className={`mt-3 block h-[2px] w-24 origin-left rounded-full bg-gold shadow-[0_0_8px_1px_rgba(212,175,55,0.7),0_0_16px_3px_rgba(212,175,55,0.4)] transition-transform duration-700 ease-out ${
                typingDone ? 'scale-x-100' : 'scale-x-0'
              }`}
              aria-hidden="true"
            />

            <p
              className="rise-in mt-6 max-w-[38rem] text-base leading-relaxed text-ink-secondary sm:text-xl"
              style={{ animationDelay: '160ms' }}
            >
              {PROFILE.headline}
            </p>

            <div
              className="rise-in mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10 lg:justify-start"
              style={{ animationDelay: '240ms' }}
            >
              <a
                href="#projects"
                className="rounded-[10px] bg-gold-bright px-7 py-3.5 text-sm font-semibold text-bg shadow-[0_0_20px_2px_rgba(245,197,66,0.45),0_0_44px_8px_rgba(212,175,55,0.25)] transition-all hover:bg-gold-bright hover:shadow-[0_0_28px_4px_rgba(245,197,66,0.65),0_0_60px_12px_rgba(212,175,55,0.35)]"
              >
                View my work
              </a>
            </div>

            <div
              className="rise-in mt-10 flex flex-nowrap justify-center gap-x-4 sm:mt-12 sm:flex-wrap sm:gap-x-8 sm:gap-y-3 lg:justify-start"
              style={{ animationDelay: '320ms' }}
            >
              {links.map(({ label, href, Icon, mono }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 whitespace-nowrap text-sm text-ink-secondary transition-colors hover:text-gold sm:gap-2"
                >
                  <Icon className={mono ? 'text-ink-secondary transition-colors group-hover:text-gold' : ''} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex min-w-0 flex-col items-center gap-7 lg:col-span-5">
            <div className="rise-in relative max-w-full" style={{ animationDelay: '200ms' }}>
              <div className="photo-glow h-[200px] w-[200px] max-w-full overflow-hidden rounded-full border-2 border-gold/70 bg-bg-alt min-[400px]:h-[220px] min-[400px]:w-[220px] sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px]">
                <img
                  src="/profile.jpg"
                  alt={PROFILE.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            <div
              className="rise-in flex max-w-full flex-wrap items-center justify-center gap-3"
              style={{ animationDelay: '280ms' }}
            >
              <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs text-ink-secondary sm:text-sm">
                <BriefcaseIcon className="shrink-0 text-gold" />
                <span className="min-w-0">{PROFILE.availability}</span>
              </span>
              <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs text-ink-secondary sm:text-sm">
                <MapPinIcon className="shrink-0 text-gold" />
                <span className="min-w-0">{PROFILE.location}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}