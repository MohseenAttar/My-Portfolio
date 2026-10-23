import { padIndex } from '../../utils/format.js';
import { CheckCircleIcon } from '../icons.jsx';
import TechChip from '../TechChip.jsx';
import ProjectLinks from './ProjectLinks.jsx';

export default function ProjectDetail({ project, position, total }) {
  const { title, category, description, highlights, stack, liveUrl, githubUrl } = project;

  return (
    <div className="glass overflow-hidden rounded-2xl">
      <div className="flex justify-end border-b border-white/10 px-5 py-3">
        <span className="text-xs text-ink-muted">
          {padIndex(position)} / {padIndex(total)}
        </span>
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="inline-flex rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
              {category}
            </span>
            <h3 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">{title}</h3>
          </div>
          <ProjectLinks liveUrl={liveUrl} githubUrl={githubUrl} />
        </div>

        <p className="mt-4 max-w-2xl text-ink-secondary">{description}</p>

        <div className="mt-7 grid gap-8 border-t border-white/10 pt-7 md:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold text-ink">Highlights</h4>
            <ul className="mt-4 space-y-2.5">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-secondary">
                  <CheckCircleIcon className="mt-0.5 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink">Stack</h4>
            <dl className="mt-4 space-y-4">
              {stack.map((layer) => (
                <div key={layer.label}>
                  <dt className="text-xs font-semibold text-gold">{layer.label}</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <TechChip key={item}>{item}</TechChip>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
