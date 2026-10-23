import { useState } from 'react';
import { activities } from '../../data/activities.js';
import { CalendarIcon, CheckCircleIcon, EyeIcon } from '../icons.jsx';
import CertificateModal from './CertificateModal.jsx';

export default function Activities() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="mt-20">
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-ink sm:text-3xl">Achievements &amp; activities</h3>
        <p className="mt-2 text-sm text-ink-secondary">
          Competitions, hackathons and technical events beyond the classroom.
        </p>
      </div>

      <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-6">
        {activities.map((activity) => {
          const { id, kind, title, organizer, date, description, outcome, Icon } = activity;
          return (
            <article
              key={id}
              className="glass flex w-full flex-col items-center rounded-2xl p-7 text-center transition-transform duration-300 hover:-translate-y-1 sm:w-[calc(50%-0.75rem)] sm:p-8 lg:w-[calc(33.333%-1rem)]"
            >
              <span className="rounded-full border border-gold/20 p-1.5">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-gold/10 text-gold shadow-[0_0_24px_rgba(212,175,55,0.3)]">
                  <Icon className="h-7 w-7" />
                </span>
              </span>

              <span className="mt-5 text-xs font-semibold text-gold">{kind}</span>
              <h4 className="mt-2 text-lg font-semibold text-ink">{title}</h4>
              <p className="mt-1 text-sm text-ink-muted">{organizer}</p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-gold-soft">
                <CalendarIcon className="h-3.5 w-3.5 text-gold" />
                {date}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-secondary">{description}</p>

              {outcome && (
                <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold-soft">
                  <CheckCircleIcon className="text-gold" />
                  {outcome}
                </span>
              )}

              <button
                type="button"
                onClick={() => setSelected(activity)}
                className="mt-5 inline-flex items-center gap-2 rounded-[10px] border border-gold/60 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold-bright hover:text-bg"
              >
                <EyeIcon />
                View certificate
              </button>
            </article>
          );
        })}
      </div>

      {selected && <CertificateModal activity={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
