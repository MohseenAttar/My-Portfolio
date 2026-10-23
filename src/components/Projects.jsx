import { projects } from '../data/projects.js';
import ProjectExplorer from './projects/ProjectExplorer.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="max-w-content mx-auto px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <SectionHeading
          title="Projects"
          subtitle="Hands-on builds that put full-stack skills to work on real-world use cases."
        />

        <div className="mt-14">
          <ProjectExplorer projects={projects} />
        </div>
      </div>
    </section>
  );
}
