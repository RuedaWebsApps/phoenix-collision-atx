import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MoveHorizontal, Sparkles, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface ComparisonProps {
  lang: 'en' | 'es';
}

export const InteractiveComparison: React.FC<ComparisonProps> = ({ lang }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(48);
  const [isDragging, setIsDragging] = useState(false);

  // Subtle Apple-style scroll entrance
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.85], [0.95, 1, 0.98]);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(Math.max(2, Math.min(98, percent)));
  }, []);

  useEffect(() => {
    const handleWindowMouseUp = () => setIsDragging(false);
    const handleWindowMouseMove = (e: MouseEvent) => {
      if (isDragging) updateSlider(e.clientX);
    };

    window.addEventListener('mouseup', handleWindowMouseUp);
    window.addEventListener('mousemove', handleWindowMouseMove);
    return () => {
      window.removeEventListener('mouseup', handleWindowMouseUp);
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, [isDragging, updateSlider]);

  return (
    <section id="restoration" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Editorial */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#E05A2B] font-bold block mb-3">
          {lang === 'en' ? 'THE RESTORATION' : 'LA RESTAURACIÓN'}
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          {lang === 'en'
            ? 'See the difference precision makes.'
            : 'Mira la diferencia que hace la precisión.'}
        </h2>
        <p className="text-neutral-400 text-base sm:text-lg mt-3">
          {lang === 'en'
            ? 'Drag the center slider to compare severe impact collision damage against our factory-certified restoration.'
            : 'Desliza el control central para comparar el impacto real de colisión frente a nuestra restauración certificada de fábrica.'}
        </p>
      </div>

      {/* Main Comparison Stage — Exact 16:9 Aspect Ratio so neither photo distorts or jumps */}
      <motion.div
        style={{ scale }}
        className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden border border-white/15 shadow-[0_35px_90px_-15px_rgba(0,0,0,0.95)] bg-black"
      >
        <div
          ref={containerRef}
          onMouseDown={(e) => {
            setIsDragging(true);
            updateSlider(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            updateSlider(e.touches[0].clientX);
          }}
          onTouchMove={(e) => {
            updateSlider(e.touches[0].clientX);
          }}
          onTouchEnd={() => setIsDragging(false)}
          className="relative w-full aspect-[16/9] select-none cursor-ew-resize overflow-hidden bg-black"
        >
          {/* BASE IMAGE (RIGHT SIDE REVEALED): AFTER / RESTORED PERFECTION */}
          <img
            src="/despues-arreglado.jpg"
            alt="BMW i8 Restored by Phoenix Collision ATX"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
          />

          {/* OVERLAY IMAGE (LEFT SIDE CLIPPED): BEFORE / DAMAGED COLLISION */}
          <img
            src="/antes-danado.jpg"
            alt="BMW i8 Damaged Before Repair"
            draggable={false}
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            }}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
          />

          {/* Top Left Pill: BEFORE / DAMAGED */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 pointer-events-none">
            <div className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-xl border border-red-500/40 text-[11px] font-mono uppercase tracking-wider text-red-300 flex items-center gap-2 shadow-lg">
              <ShieldAlert className="w-3.5 h-3.5 text-red-500" />
              <span>{lang === 'en' ? 'BEFORE • COLLISION DAMAGE' : 'ANTES • DAÑO DE COLISIÓN'}</span>
            </div>
          </div>

          {/* Top Right Pill: AFTER / RESTORED */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 pointer-events-none">
            <div className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-xl border border-emerald-500/40 text-[11px] font-mono uppercase tracking-wider text-emerald-300 flex items-center gap-2 shadow-lg">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'en' ? 'AFTER • PHOENIX RESTORED' : 'DESPUÉS • RESTAURADO OEM'}</span>
            </div>
          </div>

          {/* Vertical Divider Line & Center Handle */}
          <div
            style={{ left: `${sliderPosition}%` }}
            className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_20px_rgba(255,255,255,0.9)] z-30 pointer-events-none"
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-black shadow-[0_0_30px_rgba(224,90,43,0.9)] border-2 border-[#E05A2B] flex items-center justify-center transition-transform">
              <MoveHorizontal className="w-5 h-5 text-neutral-900" />
            </div>
          </div>
        </div>

        {/* Bottom Interactive Quick Presets & Telemetry Bar */}
        <div className="bg-[#0B0C10] border-t border-white/10 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <Sparkles className="w-4 h-4 text-[#E05A2B]" />
            <span>
              {lang === 'en'
                ? '100% Factory Panel Alignment • Computerized PPG® Color Match • ADAS Recalibrated'
                : 'Alineación de Paneles 100% OEM • Igualación Computarizada PPG® • Sensores ADAS Calibrados'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSliderPosition(85)}
              className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] font-mono text-neutral-300 transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'View Damage' : 'Ver Daño'}
            </button>
            <button
              onClick={() => setSliderPosition(50)}
              className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] font-mono text-neutral-300 transition-colors cursor-pointer"
            >
              50 / 50
            </button>
            <button
              onClick={() => setSliderPosition(12)}
              className="px-3 py-1 rounded-lg bg-[#E05A2B]/20 border border-[#E05A2B]/40 hover:bg-[#E05A2B]/30 text-[11px] font-mono text-white transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'View Restored' : 'Ver Restaurado'}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
