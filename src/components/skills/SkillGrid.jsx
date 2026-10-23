import SkillTile from './SkillTile.jsx';

export default function SkillGrid({ skills }) {
  return (
    <ul className="flex flex-wrap justify-center gap-3 py-4 sm:gap-4 lg:gap-5">
      {skills.map((skill, i) => (
        <li
          key={skill.name}
          className="pop-in flex w-[calc(50%-0.375rem)] sm:w-40 lg:w-44"
          style={{ animationDelay: `${Math.min(i * 50, 500)}ms` }}
        >
          <SkillTile skill={skill} />
        </li>
      ))}
    </ul>
  );
}
