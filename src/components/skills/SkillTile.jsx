export default function SkillTile({ skill }) {
  const { name, Icon, color } = skill;

  return (
    <div className="group flex w-full flex-col items-center gap-2 rounded-xl border border-gold/20 bg-white/[0.04] p-3 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-gold/50 sm:p-4">
      <span
        style={{ color }}
        className="transition-transform duration-[600ms] group-hover:rotate-[360deg]"
      >
        <Icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
      </span>
      <span className="text-center text-[11px] font-medium text-ink-secondary sm:text-xs">{name}</span>
    </div>
  );
}
