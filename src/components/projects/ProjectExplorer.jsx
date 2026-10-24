import { useRef, useState } from 'react';
import { padIndex } from '../../utils/format.js';
import ProjectDetail from './ProjectDetail.jsx';

export default function ProjectExplorer({ projects }) {
  const [activeId, setActiveId] = useState(projects[0].id);
  const tabRefs = useRef({});

  const activeIndex = projects.findIndex((project) => project.id === activeId);
  const activeProject = projects[activeIndex];

  // Tab-list keyboard support: arrows move (wrapping), Home/End jump to the ends.
  const handleKeyDown = (e, index) => {
    const last = projects.length - 1;
    const next = index === last ? 0 : index + 1;
    const previous = index === 0 ? last : index - 1;
    const targets = {
      ArrowDown: next,
      ArrowRight: next,
      ArrowUp: previous,
      ArrowLeft: previous,
      Home: 0,
      End: last,
    };
    const target = targets[e.key];
    if (target === undefined) return;

    e.preventDefault();
    const { id } = projects[target];
    setActiveId(id);
    tabRefs.current[id]?.focus();
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
      <div className="min-w-0 lg:col-span-4">
        <div
          role="tablist"
          aria-label="Projects"
          className="glass flex gap-2 overflow-x-auto rounded-2xl p-2 lg:max-h-[30rem] lg:flex-col lg:overflow-x-visible lg:overflow-y-auto"
        >
          {projects.map((project, index) => {
            const isActive = project.id === activeId;
            return (
              <button
                key={project.id}
                ref={(el) => {
                  tabRefs.current[project.id] = el;
                }}
                type="button"
                role="tab"
                id={`project-tab-${project.id}`}
                aria-selected={isActive}
                aria-controls={`project-panel-${project.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(project.id)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`flex shrink-0 items-center gap-3.5 rounded-xl border px-4 py-3 text-left transition-colors lg:w-full ${
                  isActive
                    ? 'border-gold/40 bg-gold/10'
                    : 'border-transparent hover:bg-white/5'
                }`}
              >
                <span
                  className={`font-display text-sm font-semibold ${
                    isActive ? 'text-gold' : 'text-ink-muted'
                  }`}
                >
                  {padIndex(index + 1)}
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-semibold text-ink">{project.title}</span>
                  <span className="hidden truncate text-xs text-ink-secondary lg:block">
                    {project.category}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        key={activeProject.id}
        role="tabpanel"
        id={`project-panel-${activeProject.id}`}
        aria-labelledby={`project-tab-${activeProject.id}`}
        className="fade-in min-w-0 lg:col-span-8"
      >
        <ProjectDetail project={activeProject} position={activeIndex + 1} total={projects.length} />
      </div>
    </div>
  );
}