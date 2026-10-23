import { useEffect, useRef } from 'react';

const GOLD = '212, 175, 55';
const MAX_PARTICLES = 80;
const AREA_PER_PARTICLE = 15000;
const LINK_DISTANCE = 130;
const MOUSE_RADIUS = 170;
const SPEED = 0.5;
const DOT_ALPHA = 0.85;
const LINK_ALPHA = 0.22;
const OFFSCREEN = -9999;

// Canvas particles that drift, link to near neighbours and are pushed away
// from the cursor. Pauses when the tab is hidden; draws one still frame when
// the visitor prefers reduced motion.
export default function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mouse = { x: OFFSCREEN, y: OFFSCREEN };
    let particles = [];
    let width = 0;
    let height = 0;
    let rafId = 0;

    const createParticles = () => {
      const count = Math.min(MAX_PARTICLES, Math.floor((width * height) / AREA_PER_PARTICLE));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        radius: Math.random() * 1.4 + 0.9,
      }));
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    };

    const drawLink = (x1, y1, x2, y2, alpha) => {
      ctx.strokeStyle = `rgba(${GOLD}, ${alpha})`;
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    };

    const frame = (animate) => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];

        if (animate) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < MOUSE_RADIUS && dist > 0) {
            const push = (1 - dist / MOUSE_RADIUS) * 0.9;
            p.x += (dx / dist) * push;
            p.y += (dy / dist) * push;
          }
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;
        }

        ctx.fillStyle = `rgba(${GOLD}, ${DOT_ALPHA})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j += 1) {
          const q = particles[j];
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < LINK_DISTANCE) {
            drawLink(p.x, p.y, q.x, q.y, (1 - dist / LINK_DISTANCE) * LINK_ALPHA);
          }
        }

        const mouseDist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (mouseDist < MOUSE_RADIUS) {
          drawLink(p.x, p.y, mouse.x, mouse.y, (1 - mouseDist / MOUSE_RADIUS) * 0.3);
        }
      }
    };

    const loop = () => {
      frame(true);
      rafId = requestAnimationFrame(loop);
    };

    const start = () => {
      if (!rafId) rafId = requestAnimationFrame(loop);
    };

    const stop = () => {
      cancelAnimationFrame(rafId);
      rafId = 0;
    };

    const handleMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleLeave = () => {
      mouse.x = OFFSCREEN;
      mouse.y = OFFSCREEN;
    };
    const handleVisibility = () => (document.hidden ? stop() : start());
    const handleResize = () => {
      resize();
      if (prefersReducedMotion) frame(false);
    };

    resize();

    if (prefersReducedMotion) {
      frame(false);
    } else {
      start();
      window.addEventListener('mousemove', handleMove);
      document.documentElement.addEventListener('mouseleave', handleLeave);
      document.addEventListener('visibilitychange', handleVisibility);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      stop();
      window.removeEventListener('mousemove', handleMove);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      aria-hidden="true"
    />
  );
}
