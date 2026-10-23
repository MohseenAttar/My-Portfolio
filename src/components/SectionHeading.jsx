export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-semibold text-gold drop-shadow-[0_0_18px_rgba(212,175,55,0.35)] sm:text-5xl">
        {title}
      </h2>
      <span
        className="mx-auto mt-3 block h-[2px] w-16 rounded-full bg-gold shadow-[0_0_8px_1px_rgba(212,175,55,0.7),0_0_16px_3px_rgba(212,175,55,0.4)]"
        aria-hidden="true"
      />
      {subtitle && (
        <p className="mx-auto mt-6 max-w-xl text-lg text-ink-secondary sm:text-xl">{subtitle}</p>
      )}
    </div>
  );
}
