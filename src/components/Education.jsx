import { MapPinIcon, CalendarIcon, AwardIcon, GraduationCapIcon, CheckCircleIcon } from './icons.jsx';
import { education } from '../data/education.js';
import SectionHeading from './SectionHeading.jsx';

function EducationCard({ item }) {
  return (
    <div className="glass w-full rounded-[14px] p-6 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-gold to-gold-bright px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-bg shadow-[0_0_14px_rgba(212,175,55,0.35)]">
          {item.level}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold-soft">
          <CheckCircleIcon className="text-gold" />
          Completed
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-ink">{item.degree}</h3>
      {item.field && <p className="mt-1 text-sm text-ink-secondary">{item.field}</p>}

      <div className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm text-ink-secondary">
        <div className="flex items-start gap-2">
          <MapPinIcon className="mt-0.5 shrink-0 text-gold" />
          <span>{item.institution}</span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarIcon className="shrink-0 text-gold" />
          <span>{item.duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <AwardIcon className="shrink-0 text-gold" />
          <span className="font-medium text-ink">{item.score}</span>
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="relative">
      <div className="max-w-content mx-auto px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <SectionHeading title="Education" subtitle="Academic background, most recent first." />

        <div className="relative mt-16">
          <div
            className="absolute left-[14px] top-0 h-full w-px bg-gradient-to-b from-gold/60 via-gold/25 to-gold/5 lg:left-1/2 lg:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-10 lg:space-y-14">
            {education.map((item, i) => {
              const cardOnRight = i % 2 === 0;
              return (
                <div
                  key={item.level}
                  className="relative grid grid-cols-1 gap-6 pl-12 lg:grid-cols-2 lg:gap-16 lg:pl-0"
                >
                  <span
                    className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-gold bg-bg text-gold shadow-[0_0_14px_2px_rgba(212,175,55,0.45)] lg:left-1/2 lg:h-11 lg:w-11 lg:-translate-x-1/2"
                    aria-hidden="true"
                  >
                    <GraduationCapIcon className="h-3.5 w-3.5 lg:h-5 lg:w-5" />
                  </span>

                  {cardOnRight ? (
                    <>
                      <div className="hidden lg:block" />
                      <EducationCard item={item} />
                    </>
                  ) : (
                    <>
                      <div className="lg:flex lg:justify-end">
                        <EducationCard item={item} />
                      </div>
                      <div className="hidden lg:block" />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
