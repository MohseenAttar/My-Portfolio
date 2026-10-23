const baseClasses =
  'inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 hover:scale-105 active:scale-95 sm:px-5 sm:py-2.5 sm:text-sm';
const activeClasses =
  'bg-gradient-to-r from-gold to-gold-bright text-bg shadow-[0_0_18px_rgba(212,175,55,0.45)]';
const inactiveClasses =
  'border border-gold/30 bg-white/[0.04] text-ink-secondary hover:border-gold/60 hover:text-gold';

export default function SkillFilters({ categories, activeId, onChange }) {
  const filters = [{ id: 'all', title: 'All skills' }, ...categories];

  return (
    <div role="group" aria-label="Filter skills by category" className="flex flex-wrap justify-center gap-2 sm:gap-3">
      {filters.map(({ id, title, Icon }) => (
        <button
          key={id}
          type="button"
          aria-pressed={activeId === id}
          onClick={() => onChange(id)}
          className={`${baseClasses} ${activeId === id ? activeClasses : inactiveClasses}`}
        >
          {Icon && <Icon className="h-4 w-4" />}
          {title}
        </button>
      ))}
    </div>
  );
}
