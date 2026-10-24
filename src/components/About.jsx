import { BriefcaseIcon, GraduationCapIcon, LayersIcon, ClipboardCheckIcon } from './icons.jsx';
import SectionHeading from './SectionHeading.jsx';

const vitals = [
  {
    label: 'Education',
    value: 'B.Tech, Computer Science Engineering — D. Y. Patil Agriculture & Technical University (2022–2026), CGPA 8.99',
    Icon: GraduationCapIcon,
  },
  {
    label: 'Experience',
    value: '11 months as a Junior Software Developer Intern at Starsoftech Pvt. Ltd., Hubballi',
    Icon: BriefcaseIcon,
  },
  {
    label: 'Focus',
    value: 'Full-stack development — React, TypeScript, Java, Spring Boot',
    Icon: LayersIcon,
  },
  {
    label: 'Practices',
    value: 'Scrum, unit testing (Vitest, JUnit), object-oriented design',
    Icon: ClipboardCheckIcon,
  },
];

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="max-w-content mx-auto px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <SectionHeading
          title="About"
          subtitle="Building full-stack software that holds up in the real world."
        />

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-7">
            <div className="space-y-4 text-lg leading-relaxed text-ink-secondary">
              <p>
                I'm a software developer who builds complete products — from the interface someone
                actually uses down to the APIs and databases running behind it. My toolkit spans
                React and TypeScript on the frontend to Java and Spring Boot on the backend, so I can
                take a feature from idea to something shipped and working.
              </p>
              <p>
                Over eleven months at Starsoftech, I put that into practice on real SaaS
                platforms — SalanaPay and an HRM dashboard — contributing across the stack,
                optimizing performance, and working the way real engineering teams do: through code
                reviews, testing, and iteration.
              </p>
            </div>

            <blockquote className="mt-8 border-l-2 border-gold py-1 pl-5 text-xl italic leading-snug text-ink">
              I enjoy working close to the metal of a product — understanding the problem, building
              the solution, and refining it until it's reliable enough to trust in production.
            </blockquote>
          </div>

          <div className="min-w-0 lg:col-span-5">
            <div className="glass overflow-hidden rounded-[14px]">
              <div className="divide-y divide-white/10">
                {vitals.map(({ label, value, Icon }) => (
                  <div key={label} className="flex items-start gap-3.5 px-6 py-5 sm:px-7">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                      <Icon />
                    </span>
                    <div>
                      <dt className="text-xs text-ink-muted">{label}</dt>
                      <dd className="mt-1 text-[0.95rem] leading-relaxed text-ink">{value}</dd>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}