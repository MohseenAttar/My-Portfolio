import { useEffect, useState } from 'react';
import { navLinks } from '../data/navigation.js';
import { PROFILE } from '../data/profile.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Highlights the section at the viewport centre and mirrors it in the URL
  // hash (replaceState, so the back button isn't flooded with entries).
  useEffect(() => {
    const targets = navLinks.map((link) => document.querySelector(link.href)).filter(Boolean);
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const href = `#${visible.target.id}`;
          setActiveHref(href);
          if (window.location.hash !== href) {
            window.history.replaceState(null, '', href);
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full max-w-full border-b transition-all ${
        scrolled
          ? 'border-gold/25 bg-white/[0.06] shadow-[0_8px_30px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="h-[2px] w-full overflow-hidden bg-border/60" aria-hidden="true">
        <div className="sweep-line h-full w-1/3 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>

      <nav className="max-w-content mx-auto flex items-center justify-between gap-4 px-5 py-3 sm:px-10 lg:px-16">
        <a href="#home" aria-label={PROFILE.name} className="shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gold bg-gold/10 font-display text-sm font-bold text-gold">
            MA
          </span>
        </a>

        <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative whitespace-nowrap pb-1 text-[0.95rem] font-semibold transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full after:bg-gold after:transition-all after:duration-300 ${
                    isActive
                      ? 'text-gold after:w-full'
                      : 'text-ink-secondary after:w-0 hover:text-gold hover:after:w-full'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href={PROFILE.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden shrink-0 rounded-[10px] border border-gold/60 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold shadow-[0_0_14px_1px_rgba(212,175,55,0.3)] transition-all hover:bg-gold-bright hover:text-bg hover:shadow-[0_0_22px_4px_rgba(212,175,55,0.5)] lg:inline-block"
        >
          Resume
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border text-ink lg:hidden"
        >
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path
                d="M3 3l12 12M15 3L3 15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M2 4.5h14M2 9h14M2 13.5h14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-gold/25 bg-white/[0.06] px-5 py-6 backdrop-blur-xl sm:px-10 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2.5 text-base font-semibold transition-colors ${
                    activeHref === link.href ? 'text-gold' : 'text-ink-secondary hover:text-gold'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="inline-block rounded-[10px] border border-gold/60 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}