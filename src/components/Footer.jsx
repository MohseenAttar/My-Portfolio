import { useInView } from '../hooks/useInView.js';
import { PROFILE } from '../data/profile.js';
import { GitHubIcon, LinkedInMonoIcon, MailIcon } from './icons.jsx';

const socials = [
  {
    label: 'LinkedIn',
    href: PROFILE.linkedin,
    Icon: LinkedInMonoIcon,
    color: '#0A66C2',
    glow: 'rgba(10, 102, 194, 0.45)',
    tint: 'rgba(10, 102, 194, 0.12)',
    external: true,
  },
  {
    label: 'GitHub',
    href: PROFILE.github,
    Icon: GitHubIcon,
    color: '#FFFFFF',
    glow: 'rgba(255, 255, 255, 0.3)',
    tint: 'rgba(255, 255, 255, 0.1)',
    external: true,
  },
  {
    label: 'Email',
    href: `mailto:${PROFILE.email}`,
    Icon: MailIcon,
    color: '#D4AF37',
    glow: 'rgba(212, 175, 55, 0.45)',
    tint: 'rgba(212, 175, 55, 0.12)',
  },
];

// Brand colours reach the hover styles through CSS variables set on each link.
const reveal = (inView) =>
  `transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`;

export default function Footer() {
  const [ref, inView] = useInView();

  return (
    <footer className="relative overflow-hidden border-t border-gold/20 bg-bg-alt/90 px-4 py-10 backdrop-blur-sm sm:py-12 md:px-6">
      <div
        className="footer-glow pointer-events-none absolute inset-0 bg-gradient-to-t from-gold/10 via-gold/5 to-transparent"
        aria-hidden="true"
      />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl text-center">
        <div className={reveal(inView)}>
          <p className="text-shimmer bg-gradient-to-r from-gold via-gold-bright to-gold-soft bg-[length:200%_auto] bg-clip-text font-display text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
            {PROFILE.name}
          </p>
          <p className="mt-2 text-base font-medium text-ink-secondary sm:text-lg">{PROFILE.role}</p>
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-6">
          {socials.map(({ label, href, Icon, color, glow, tint, external }, i) => (
            <li
              key={label}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
              className={`transition-all duration-500 ${inView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
            >
              <a
                href={href}
                aria-label={label}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                style={{ '--brand': color, '--glow': glow, '--tint': tint }}
                className="group relative block transition-transform duration-300 hover:-translate-y-2 hover:scale-110 focus-visible:-translate-y-2"
              >
                <span
                  className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-lg transition-all duration-300 group-hover:scale-125 group-hover:opacity-100"
                  style={{ background: 'radial-gradient(circle, var(--glow) 0%, transparent 70%)' }}
                  aria-hidden="true"
                />
                <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-gold/30 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 group-hover:border-[color:var(--brand)] group-hover:bg-[color:var(--tint)] group-hover:shadow-[0_10px_40px_var(--glow)] md:h-14 md:w-14">
                  <span className="text-ink-secondary transition-all duration-500 group-hover:rotate-[360deg] group-hover:text-[color:var(--brand)]">
                    <Icon className="h-5 w-5 md:h-6 md:w-6" />
                  </span>
                </span>
                <span
                  className="pointer-events-none absolute -bottom-11 left-1/2 z-50 hidden -translate-x-1/2 whitespace-nowrap rounded-lg border-2 border-[color:var(--brand)] bg-bg/95 px-3 py-1.5 text-sm font-semibold text-[color:var(--brand)] opacity-0 shadow-xl backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:block"
                  aria-hidden="true"
                >
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div
          className={`mx-auto mt-10 h-px max-w-3xl bg-gradient-to-r from-transparent via-gold/40 to-transparent transition-opacity duration-700 delay-500 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />

        <p className={`mt-6 text-xs text-ink-secondary delay-500 sm:text-sm ${reveal(inView)}`}>
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
      </div>

      <div
        className="spin-slow pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-gold/10 to-gold-soft/10 blur-2xl sm:h-40 sm:w-40"
        aria-hidden="true"
      />
      <div
        className="spin-slow-reverse pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-gold-soft/10 to-gold/10 blur-2xl sm:h-40 sm:w-40"
        aria-hidden="true"
      />
    </footer>
  );
}
