import { contributions, projectTech, role, techStack, workProjects } from '../data/experience.js';
import { BriefcaseIcon, CalendarIcon, CheckCircleIcon, MapPinIcon } from './icons.jsx';
import SectionHeading from './SectionHeading.jsx';
import TechChip from './TechChip.jsx';

function ProjectCard({ project }) {
  const { name, role: projectRole, Icon, description, contribution } = project;
  return (
    <div className="glass flex h-full flex-col overflow-hidden rounded-2xl">
      <div className="flex items-center gap-3.5 border-b border-gold/20 bg-gradient-to-r from-gold/20 to-gold/5 p-5">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/40 bg-bg/60 text-gold">
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <h4 className="text-xl font-semibold text-ink">{name}</h4>
          <p className="text-sm text-gold-soft">{projectRole}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-ink-secondary">{description}</p>

        <p className="mt-4 flex items-start gap-2 text-sm text-ink">
          <CheckCircleIcon className="mt-0.5 shrink-0 text-gold" />
          {contribution}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {projectTech.map((tech) => (
            <TechChip key={tech}>{tech}</TechChip>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="max-w-content mx-auto px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <SectionHeading
          title="Experience"
          subtitle="Real-world industry experience building production-grade SaaS applications."
        />

        <div className="glass mt-14 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 text-gold shadow-[0_0_16px_rgba(212,175,55,0.25)]">
                <BriefcaseIcon className="h-7 w-7" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-ink sm:text-2xl">{role.title}</h3>
                <p className="mt-1 text-lg text-gold">{role.company}</p>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 self-start whitespace-nowrap rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold-soft">
              <CalendarIcon className="text-gold" />
              {role.duration}
            </span>
          </div>

          <p className="mt-5 flex items-center gap-2 text-sm text-ink-secondary">
            <MapPinIcon className="h-4 w-4 text-gold" />
            {role.location}
          </p>

          <div className="mt-7">
            <p className="text-sm font-semibold text-ink">Production tech stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <TechChip key={tech}>{tech}</TechChip>
              ))}
            </div>
          </div>

          <div className="mt-7 border-t border-white/10 pt-6">
            <p className="text-sm font-semibold text-ink">Key contributions</p>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {contributions.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-secondary">
                  <CheckCircleIcon className="mt-0.5 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-ink sm:text-3xl">
            Live projects I've contributed to
          </h3>
          <p className="mt-2 text-sm text-ink-secondary">
            Applications used by real organizations.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {workProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
