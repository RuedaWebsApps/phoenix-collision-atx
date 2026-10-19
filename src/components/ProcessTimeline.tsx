import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ClipboardCheck, Wrench, KeyRound, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ProcessProps {
  lang: 'en' | 'es';
}

const STEPS = [
  {
    num: '01',
    titleEn: 'INTAKE',
    titleEs: 'INGRESO 24/7',
    descEn: 'A quick, safe 24/7 flatbed towing to our Austin facility or walk-in drop-off.',
    descEs: 'Traslado rápido y seguro en grúa 24/7 a nuestra sede en Austin o recepción directa.',
    icon: Truck
  },
  {
    num: '02',
    titleEn: 'INSPECTION',
    titleEs: 'INSPECCIÓN',
    descEn: 'A digital estimate, blueprint scan, and complete insurance coordination.',
    descEs: 'Estimación digital, escaneo estructural y coordinación total con tu aseguradora.',
    icon: ClipboardCheck
  },
  {
    num: '03',
    titleEn: 'REBUILD',
    titleEs: 'RECONSTRUCCIÓN',
    descEn: 'Precision structural frame, body, mechanical, and PPG® paint restoration.',
    descEs: 'Restauración milimétrica de chasis, carrocería, mecánica y pintura horneada.',
    icon: Wrench
  },
  {
    num: '04',
    titleEn: 'DELIVERY',
    titleEs: 'ENTREGA',
    descEn: 'A handoff back to you in factory-new condition, backed by a lifetime warranty.',
    descEs: 'Entrega de tu vehículo impecable como recién salido de agencia con garantía de por vida.',
    icon: KeyRound
  }
];

export const ProcessTimeline: React.FC<ProcessProps> = ({ lang }) => {
  return (
    <>
      {/* SECTION: THE PROCESS (4 Architectural Columns matching approved client design) */}
      <section id="process" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
        <div className="mb-14">
          <span className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#E05A2B] font-bold block mb-2">
            {lang === 'en' ? 'STEP-BY-STEP WORKFLOW' : 'FLUJO DE TRABAJO'}
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase">
            {lang === 'en' ? 'THE PROCESS.' : 'EL PROCESO.'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group relative pt-6 border-t border-white/15 hover:border-[#E05A2B] transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-[#E05A2B] group-hover:border-[#E05A2B]/40 transition-all mb-6">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-base sm:text-lg font-bold tracking-wide text-white mb-2.5 font-mono">
                  <span className="text-[#E05A2B]">{step.num}</span> / {lang === 'en' ? step.titleEn : step.titleEs}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  {lang === 'en' ? step.descEn : step.descEs}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION: THE ART OF REBUILDING (With Real Workshop Video from presentaciones/phenix-collision) */}
      <section id="craftsmanship" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Editorial Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#E05A2B] font-bold block">
              {lang === 'en' ? "AUSTIN'S FINEST CRAFTSMEN" : 'MAESTRÍA AUTOMOTRIZ EN AUSTIN'}
            </span>

            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.03] uppercase">
              {lang === 'en' ? (
                <>
                  THE ART OF <br /> REBUILDING.
                </>
              ) : (
                <>
                  EL ARTE DE <br /> RECONSTRUIR.
                </>
              )}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-sm text-neutral-400 leading-relaxed">
              <div className="space-y-4">
                <p>
                  {lang === 'en'
                    ? 'Over a decade of restoring vehicles to factory-fresh standards with unparalleled precision.'
                    : 'Más de una década restaurando vehículos a estándares originales de fábrica con precisión inigualable.'}
                </p>
                <p>
                  {lang === 'en'
                    ? 'Based in Austin, Texas, our bilingual team handles the insurance stress so you don’t have to.'
                    : 'Ubicados en Austin, Texas, nuestro equipo bilingüe se encarga de todo el trámite del seguro por ti.'}
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  {lang === 'en'
                    ? 'Certified technicians using state-of-the-art diagnostic, frame, and repair machinery.'
                    : 'Técnicos certificados utilizando maquinaria de diagnóstico, enderezado y pintura de última generación.'}
                </p>
                <p>
                  {lang === 'en'
                    ? 'Frame alignment, computerized paint color matching, and meticulous quality control.'
                    : 'Alineación estructural, igualación computarizada de color y control de calidad exhaustivo.'}
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-white font-medium">
                <ShieldCheck className="w-4 h-4 text-[#E05A2B]" />
                <span>{lang === 'en' ? 'All Insurance Companies Accepted' : 'Aceptamos Todos los Seguros'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'en' ? 'Bilingual Attention (EN / ES)' : 'Atención Bilingüe (EN / ES)'}</span>
              </div>
            </div>
          </div>

          {/* Right Media Column: Real Video Showcase from Taller */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-black shadow-[0_30px_80px_rgba(0,0,0,0.9)] aspect-[16/10]">
              <video
                src="/repari-car.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs font-mono text-neutral-300">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E05A2B] animate-ping" />
                  PHOENIX COLLISION ATX • 905 KRAMER LN
                </span>
                <span className="text-white/80">OEM CERTIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
