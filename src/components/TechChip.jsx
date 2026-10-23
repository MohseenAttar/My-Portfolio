export default function TechChip({ children }) {
  return (
    <span className="rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs text-ink-secondary">
      {children}
    </span>
  );
}
