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
    <section id="home" className="relative overflow-hidden">
      <div className="max-w-content mx-auto px-6 pt-16 pb-20 sm:px-10 sm:pt-20 sm:pb-28 lg:px-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div
              className="rise-in inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-gold"
              style={{ animationDelay: '0ms' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              {PROFILE.role}
            </div>

            <h1
              className="mt-6 text-5xl font-semibold leading-[1.08] text-ink sm:text-6xl lg:text-[3.75rem]"
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
              className="rise-in mt-6 max-w-[38rem] text-lg leading-relaxed text-ink-secondary sm:text-xl"
              style={{ animationDelay: '160ms' }}
            >
              {PROFILE.headline}
            </p>

            <div
              className="rise-in mt-10 flex flex-wrap items-center gap-4"
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
              className="rise-in mt-12 flex flex-wrap gap-x-8 gap-y-3"
              style={{ animationDelay: '320ms' }}
            >
              {links.map(({ label, href, Icon, mono }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-ink-secondary transition-colors hover:text-gold"
                >
                  <Icon className={mono ? 'text-ink-secondary transition-colors group-hover:text-gold' : ''} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-7 lg:col-span-5">
            <div className="rise-in relative" style={{ animationDelay: '200ms' }}>
              <div className="photo-glow h-[220px] w-[220px] overflow-hidden rounded-full border-2 border-gold/70 bg-bg-alt sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px]">
                <img
                  src="/profile.jpg"
                  alt={PROFILE.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            <div
              className="rise-in flex flex-wrap items-center justify-center gap-3"
              style={{ animationDelay: '280ms' }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-ink-secondary">
                <BriefcaseIcon className="text-gold" />
                {PROFILE.availability}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-ink-secondary">
                <MapPinIcon className="text-gold" />
                {PROFILE.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
