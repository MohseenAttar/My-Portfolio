import { useEffect, useRef } from 'react';

const IDLE_DELAY = 2200;
const DRIFT_RADIUS = 140;
const DRIFT_SPEED = 0.0007;

// Brightens the grid around the cursor, and drifts on its own when idle.
// Writes CSS variables directly so mouse moves never trigger a React render.
export default function CursorSpotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let lastMove = Date.now();

    const handleMove = (e) => {
      lastMove = Date.now();
      ref.current?.style.setProperty('--x', `${e.clientX}px`);
      ref.current?.style.setProperty('--y', `${e.clientY}px`);
    };
    const handleLeave = () => {
      ref.current?.style.setProperty('--x', '-300px');
      ref.current?.style.setProperty('--y', '-300px');
    };

    window.addEventListener('mousemove', handleMove);
    document.documentElement.addEventListener('mouseleave', handleLeave);

    let rafId;
    if (!prefersReducedMotion) {
      const tick = (t) => {
        if (Date.now() - lastMove > IDLE_DELAY) {
          const cx = window.innerWidth / 2;
          const cy = window.innerHeight / 2;
          const angle = t * DRIFT_SPEED;
          const x = cx + Math.cos(angle) * DRIFT_RADIUS * 1.6;
          const y = cy + Math.sin(angle * 1.3) * DRIFT_RADIUS;
          ref.current?.style.setProperty('--x', `${x}px`);
          ref.current?.style.setProperty('--y', `${y}px`);
        }
        rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    }

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 -z-10 opacity-[0.16]"
      style={{
        backgroundImage:
          'linear-gradient(#F5F5F5 1px, transparent 1px), linear-gradient(90deg, #F5F5F5 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        WebkitMaskImage:
          'radial-gradient(220px circle at var(--x, -300px) var(--y, -300px), black, transparent 70%)',
        maskImage:
          'radial-gradient(220px circle at var(--x, -300px) var(--y, -300px), black, transparent 70%)',
      }}
      aria-hidden="true"
    />
  );
}
