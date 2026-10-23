export default function BackgroundGrid() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 opacity-[0.04]"
      style={{
        backgroundImage:
          'linear-gradient(#F5F5F5 1px, transparent 1px), linear-gradient(90deg, #F5F5F5 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }}
      aria-hidden="true"
    />
  );
}
