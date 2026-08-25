'use client';

import { useEffect, useRef } from 'react';

type Point = { x: number; y: number };

const TAU = Math.PI * 2;
const labels = ['SUPPORT', 'JAVA', 'DATA', 'PYTHON', 'FRONT', 'GEN AI'];

export default function ScrollArtifact() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    let progress = window.scrollY;
    let target = window.scrollY;
    let pointerX = 0;
    let pointerY = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const point = (cx: number, cy: number, radius: number, angle: number): Point => ({
      x: cx + Math.cos(angle) * radius,
      y: cy + Math.sin(angle) * radius,
    });

    const polygon = (cx: number, cy: number, radius: number, sides: number, rotation: number) => {
      const points = Array.from({ length: sides }, (_, i) =>
        point(cx, cy, radius, rotation + (i / sides) * TAU),
      );
      ctx.beginPath();
      points.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
      ctx.closePath();
      ctx.stroke();
      return points;
    };

    const draw = () => {
      progress += (target - progress) * 0.075;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const size = Math.min(width, height);
      const cx = width / 2 + pointerX * 12;
      const cy = height / 2 + pointerY * 10;
      const scrollRotation = progress * 0.0017;

      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.strokeStyle = '#111111';
      ctx.fillStyle = '#111111';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.16;

      const grid = size / 10;
      for (let i = -4; i <= 4; i += 1) {
        ctx.beginPath();
        ctx.moveTo(cx - size * 0.46, cy + i * grid);
        ctx.lineTo(cx + size * 0.46, cy + i * grid);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(cx + i * grid, cy - size * 0.46);
        ctx.lineTo(cx + i * grid, cy + size * 0.46);
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      ctx.lineWidth = 1.2;
      const outer = polygon(cx, cy, size * 0.35, 6, -Math.PI / 2 + scrollRotation);
      ctx.globalAlpha = 0.45;
      const middle = polygon(cx, cy, size * 0.25, 4, Math.PI / 4 - scrollRotation * 1.35);
      ctx.globalAlpha = 0.22;
      polygon(cx, cy, size * 0.17, 8, scrollRotation * 1.8);

      ctx.globalAlpha = 0.8;
      outer.forEach((p, i) => {
        const q = middle[i % middle.length];
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.stroke();
      });

      ctx.globalAlpha = 1;
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#111111';
      [...outer, ...middle].forEach((p, i) => {
        const radius = i < outer.length ? 5 : 3.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, TAU);
        ctx.fill();
        ctx.stroke();
      });

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(scrollRotation * 0.8);
      ctx.fillStyle = '#111111';
      ctx.fillRect(-size * 0.065, -size * 0.065, size * 0.13, size * 0.13);
      ctx.strokeStyle = '#ffffff';
      ctx.globalAlpha = 0.65;
      ctx.beginPath();
      ctx.moveTo(-size * 0.032, 0);
      ctx.lineTo(size * 0.032, 0);
      ctx.moveTo(0, -size * 0.032);
      ctx.lineTo(0, size * 0.032);
      ctx.stroke();
      ctx.restore();

      ctx.globalAlpha = 1;
      ctx.fillStyle = '#111111';
      ctx.font = '600 9px Arial, sans-serif';
      ctx.textAlign = 'center';
      outer.forEach((_, i) => {
        const offset = point(cx, cy, size * 0.425, -Math.PI / 2 + scrollRotation + (i / 6) * TAU);
        ctx.fillText(labels[i], offset.x, offset.y + 3);
      });

      ctx.font = '500 8px monospace';
      ctx.textAlign = 'left';
      ctx.fillText(String(Math.round(progress)).padStart(4, '0'), 12, height - 12);
      ctx.textAlign = 'right';
      ctx.fillText('LIVE TOPOLOGY', width - 12, 18);
      ctx.restore();
      frame = requestAnimationFrame(draw);
    };

    const onScroll = () => { target = window.scrollY; };
    const onPointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const resetPointer = () => { pointerX = 0; pointerY = 0; };

    resize();
    draw();
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll, { passive: true });
    canvas.addEventListener('pointermove', onPointer);
    canvas.addEventListener('pointerleave', resetPointer);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      canvas.removeEventListener('pointermove', onPointer);
      canvas.removeEventListener('pointerleave', resetPointer);
    };
  }, []);

  return (
    <div className="artifact" aria-label="Mapa técnico interactivo que conecta soporte, desarrollo, datos e inteligencia artificial">
      <canvas ref={canvasRef} aria-hidden="true" />
    </div>
  );
}
