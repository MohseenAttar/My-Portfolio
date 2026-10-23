import { useState } from 'react';
import { allSkills, skillCategories } from '../data/skills.js';
import SectionHeading from './SectionHeading.jsx';
import Activities from './skills/Activities.jsx';
import SkillFilters from './skills/SkillFilters.jsx';
import SkillGrid from './skills/SkillGrid.jsx';
import SkillMarquee from './skills/SkillMarquee.jsx';

export default function Skills() {
  const [activeId, setActiveId] = useState('all');
  const activeCategory = skillCategories.find((category) => category.id === activeId);

  return (
    <section id="skills" className="relative">
      <div className="max-w-content mx-auto px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <SectionHeading
          title="Skills"
          subtitle="The languages, frameworks and tools I use to build and ship web applications."
        />

        <div className="mt-12">
          <SkillFilters categories={skillCategories} activeId={activeId} onChange={setActiveId} />
        </div>

        <div className="mt-10">
          {activeCategory ? (
            <SkillGrid key={activeCategory.id} skills={activeCategory.skills} />
          ) : (
            <SkillMarquee skills={allSkills} />
          )}
        </div>

        <Activities />
      </div>
    </section>
  );
}
