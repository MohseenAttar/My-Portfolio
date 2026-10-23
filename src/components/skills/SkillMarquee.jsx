import SkillTile from './SkillTile.jsx';

function SkillRow({ skills, hidden }) {
  return (
    <ul className="flex shrink-0" aria-hidden={hidden || undefined} aria-label={hidden ? undefined : 'All skills'}>
      {skills.map((skill) => (
        <li key={skill.name} className="mr-6 min-w-[88px] shrink-0 sm:mr-8">
          <SkillTile skill={skill} />
        </li>
      ))}
    </ul>
  );
}

// The row is rendered twice (the copy is hidden from assistive tech). Spacing
// uses margin rather than gap so the -50% loop lands exactly on the repeat.
export default function SkillMarquee({ skills }) {
  return (
    <div className="marquee-mask overflow-hidden py-4 sm:py-6">
      <div className="marquee flex w-max hover:[animation-play-state:paused]">
        <SkillRow skills={skills} />
        <SkillRow skills={skills} hidden />
      </div>
    </div>
  );
}
