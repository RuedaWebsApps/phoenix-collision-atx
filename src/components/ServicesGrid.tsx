import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowUpRight, ShieldCheck, Phone, Sparkles, Wrench, CloudRain, Cpu } from 'lucide-react';

interface ServicesProps {
  lang: 'en' | 'es';
}

interface DetailedDivision {
  id: string;
  number: string;
  titleEn: string;
  titleEs: string;
  taglineEn: string;
  taglineEs: string;
  badgeEn: string;
  badgeEs: string;
  specs: string[];
  specsEs: string[];
  focusEn: string;
  focusEs: string;
}

const DIVISIONS: DetailedDivision[] = [
  {
    id: 'collision',
    number: '01',
    titleEn: 'COLLISION & STRUCTURAL',
    titleEs: 'COLISIÓN & ESTRUCTURA',
    taglineEn: 'Factory-Standard Chassis Restoration & Direct Insurance Coordination',
    taglineEs: 'Restauración de Chasis a Estándar de Fábrica y Manejo Directo de Seguros',
    badgeEn: 'Lifetime Warranty',
    badgeEs: 'Garantía de por Vida',
    specs: [
      'Complete Structural & Frame Alignment',
      'Lifetime Warranty Computerized Paint Matching',
      'Certified OEM & High-Grade Replacement Parts',
      'Direct Insurance Claim Management & Deductible Assistance'
    ],
    specsEs: [
      'Alineación Estructural y Enderezado de Chasis Completo',
      'Pintura Computarizada con Garantía Escrita de por Vida',
      'Piezas Originales OEM y Alternativas Certificadas',
      'Negociación Directa con Todas las Aseguradoras en Texas'
    ],
    focusEn: 'We restore structural integrity to exact manufacturer tolerances and handle your entire insurance claim from tow to delivery.',
    focusEs: 'Devolvemos la integridad estructural exacta del fabricante y gestionamos todo tu reclamo con la aseguradora de principio a fin.'
  },
  {
    id: 'hail',
    number: '02',
    titleEn: 'TEXAS HAIL DAMAGE',
    titleEs: 'DAÑO POR GRANIZO (PDR)',
    taglineEn: 'Specialized Paintless Dent Repair (PDR) & Storm Recovery',
    taglineEs: 'Reparación Especializada de Granizo sin Dañar la Pintura Original',
    badgeEn: '100% Factory Paint Preserved',
    badgeEs: 'Conserva tu Pintura Original',
    specs: [
      'Precision Paintless Dent Repair (PDR)',
      'OEM Windshield, Roof & Storm Glass Replacement',
      'Post-Impact ADAS Camera & Sensor Calibration',
      'Zero Carfax Depreciation — Preserves Factory Finish'
    ],
    specsEs: [
      'Técnica PDR Avanzada sin Masilla ni Repintado',
      'Reemplazo de Parabrisas y Cristales Dañados por Tormenta',
      'Calibración de Cámaras y Radares ADAS Post-Impacto',
      'Conserva el 100% del Valor Comercial de Fábrica'
    ],
    focusEn: 'Austin hail storms are ruthless. Our master PDR technicians massage every dent out from the inside without touching your factory paint.',
    focusEs: 'Las tormentas en Austin son severas. Nuestros maestros en PDR eliminan cada abolladura sin alterar la pintura original de agencia.'
  },
  {
    id: 'mechanical',
    number: '03',
    titleEn: 'MECHANICS & DIAGNOSTICS',
    titleEs: 'MECÁNICA & DIAGNÓSTICO',
    taglineEn: 'Complete Under-Hood, Suspension, Brakes & A/C Repair',
    taglineEs: 'Taller Integral: Frenos, Suspensión, Dirección, A/C y Electrónica',
    badgeEn: 'All-In-One Facility',
    badgeEs: 'Todo Bajo un Mismo Techo',
    specs: [
      'Suspension, Steering, Struts & 4-Wheel Alignment',
      'Brakes, Rotors & ABS Safety Systems',
      'Air Conditioning (A/C) Recharge & Compressor Repair',
      'Computerized OEM Diagnostics & Preventive Maintenance'
    ],
    specsEs: [
      'Suspensión, Dirección, Amortiguadores y Alineación',
      'Frenos y Sistemas de Seguridad Activa (ABS)',
      'Reparación y Recarga de Aire Acondicionado (A/C)',
      'Diagnóstico Computarizado Multi-Marca y Mantenimiento'
    ],
    focusEn: 'No need to take your vehicle to two different shops after an accident. We fix both the aesthetics and the mechanical heart in-house.',
    focusEs: 'No necesitas llevar tu auto a dos talleres distintos tras un choque. Reparamos tanto la estética como toda la mecánica en el mismo lugar.'
  },
  {
    id: 'custom',
    number: '04',
    titleEn: 'CUSTOM PAINT & UPGRADES',
    titleEs: 'PERSONALIZACIÓN & UPGRADES',
    taglineEn: 'Bespoke Finishes, Body Kits, Rims, Lighting & Showroom Detailing',
    taglineEs: 'Modificaciones, Rines, Body Kits, Iluminación y Detailing de Salón',
    badgeEn: 'Enthusiast Grade',
    badgeEs: 'Acabado de Exhibición',
    specs: [
      'Custom Full-Body Paint, Tri-Coat & Matte Finishes',
      'Aerodynamic Body Kits, Spoilers & Diffusers',
      'Custom Wheels / Rims & Specialized Fog Lighting',
      'Showroom Paint Correction, Ceramic & Full Detailing'
    ],
    specsEs: [
      'Pintura Personalizada Completa, Tricapa y Acabados Mate',
      'Instalación de Body Kits Aerodinámicos, Spoilers y Difusores',
      'Rines Deportivos (Rims) e Iluminación Especializada',
      'Corrección de Pintura y Full Detailing de Salón'
    ],
    focusEn: 'For enthusiasts who want their vehicle to leave the shop looking sharper, bolder, and more refined than the day it was bought.',
    focusEs: 'Para entusiastas del motor que buscan que su vehículo salga del taller luciendo único, agresivo e impecable.'
  }
];

export const ServicesGrid: React.FC<ServicesProps> = ({ lang }) => {
  const [activeModal, setActiveModal] = useState<DetailedDivision | null>(null);

  return (
    <section id="services" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Section Header matching approved mockup */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#E05A2B] font-bold block mb-2">
            {lang === 'en' ? 'CAPABILITIES & DIVISIONS' : 'DIVISIONES ESPECIALIZADAS'}
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase">
            {lang === 'en' ? 'SERVICES.' : 'SERVICIOS.'}
          </h2>
        </div>
        <p className="text-neutral-400 text-sm sm:text-base max-w-md">
          {lang === 'en'
            ? 'Every repair is executed under strict OEM specifications, backed by a written lifetime paint warranty and full insurance coordination.'
            : 'Cada reparación se ejecuta bajo especificaciones OEM estrictas, respaldada por garantía de pintura de por vida y gestión directa con tu seguro.'}
        </p>
      </div>

      {/* ARCHITECTURAL ASYMMETRIC BENTO GRID (Faithful to approved client design, elevated to 10/10) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* LEFT COLUMN (6 cols): LARGE FEATURE CARD — COLLISION & STRUCTURAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={() => setActiveModal(DIVISIONS[0])}
          className="lg:col-span-6 bento-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between cursor-pointer group relative overflow-hidden min-h-[480px]"
        >
          <div>
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E05A2B] font-bold">
                01 / {lang === 'en' ? 'CORE DIVISION' : 'DIVISIÓN PRINCIPAL'}
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#E05A2B]/15 border border-[#E05A2B]/30 text-[#F59E0B]">
                {lang === 'en' ? 'Lifetime Warranty' : 'Garantía de por Vida'}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.05] uppercase mb-3 group-hover:text-[#F59E0B] transition-colors">
              {lang === 'en' ? (
                <>
                  COLLISION & <br /> STRUCTURAL
                </>
              ) : (
                <>
                  COLISIÓN & <br /> ESTRUCTURA
                </>
              )}
            </h3>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-md">
              {lang === 'en'
                ? 'Frame alignment, structural bodywork, computerizedPPG® color matching, and complete insurance claim negotiation.'
                : 'Alineación de chasis, carrocería estructural, igualación computarizada de pintura PPG® y manejo total de tu seguro.'}
            </p>
          </div>

          {/* Automotive Sculpted Bodywork Image Showcase inside the card */}
          <div className="relative mt-6 rounded-2xl overflow-hidden border border-white/10 h-56 sm:h-64 bg-black">
            <img
              src="/despues-arreglado.jpg"
              alt="Collision and Structural Perfection"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="text-xs font-mono text-white/90">
                {lang === 'en' ? 'Factory Spec Restoration • All Insurances Accepted' : 'Restauración OEM • Aceptamos Todos los Seguros'}
              </span>
              <span className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-[#E05A2B] group-hover:text-white transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </motion.div>

        {/* MIDDLE COLUMN (3 cols): TEXAS HAIL DAMAGE + CUSTOM PAINT & UPGRADES */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          {/* Card 2A: TEXAS HAIL DAMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            onClick={() => setActiveModal(DIVISIONS[1])}
            className="flex-1 bento-card rounded-3xl overflow-hidden cursor-pointer group relative min-h-[250px] flex flex-col justify-between"
          >
            {/* Background visual with dark gradient overlay */}
            <div className="absolute inset-0">
              <img
                src="/antes-danado.jpg"
                alt="Texas Hail & Storm Repair"
                className="w-full h-full object-cover object-left opacity-45 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-[#090A0F]/65 to-transparent" />
            </div>

            <div className="relative z-10 p-6 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-md bg-black/70 border border-white/15 text-[10px] font-mono uppercase tracking-wider text-amber-400">
                PDR Specialist
              </span>
              <CloudRain className="w-5 h-5 text-neutral-300 group-hover:text-[#E05A2B] transition-colors" />
            </div>

            <div className="relative z-10 p-6 pt-0">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase leading-tight mb-1.5">
                {lang === 'en' ? 'TEXAS HAIL DAMAGE' : 'GRANIZO TEXAS (PDR)'}
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {lang === 'en'
                  ? 'Paintless Dent Repair (PDR) & storm glass recovery with zero factory paint loss.'
                  : 'Desabollado sin pintar (PDR) y cristales conservando tu pintura original.'}
              </p>
            </div>
          </motion.div>

          {/* Card 2B: CUSTOM PAINT & UPGRADES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            onClick={() => setActiveModal(DIVISIONS[3])}
            className="flex-1 bento-card rounded-3xl p-6 flex flex-col justify-between cursor-pointer group relative overflow-hidden min-h-[210px]"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                04 / BESPOKE
              </span>
              <Sparkles className="w-5 h-5 text-[#E05A2B]" />
            </div>

            <div className="my-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-2 group-hover:text-[#F59E0B] transition-colors">
                {lang === 'en' ? 'Custom Paint & Upgrades' : 'Pintura Custom & Upgrades'}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {lang === 'en'
                  ? 'Rims, aerodynamic body kits, fog lights, custom wraps & showroom detailing.'
                  : 'Rines, body kits aerodinámicos, luces, pintura tricapa y detailing de salón.'}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-[#E05A2B] pt-2 border-t border-white/5">
              <span>{lang === 'en' ? 'Explore Upgrades' : 'Ver Personalización'}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN (3 cols): 3 STACKED SPECIALTY CARDS */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          {/* Card 3A: MECHANICS & DIAGNOSTICS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            onClick={() => setActiveModal(DIVISIONS[2])}
            className="flex-1 bento-card rounded-3xl p-6 flex flex-col justify-between cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E05A2B]">
                03 / INTEGRAL SHOP
              </span>
              <Wrench className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white uppercase leading-snug mb-1.5">
                {lang === 'en' ? 'MECHANICS & DIAGNOSTICS' : 'MECÁNICA & DIAGNÓSTICO'}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {lang === 'en'
                  ? 'Brakes, suspension, steering alignment, A/C repair & preventive maintenance.'
                  : 'Frenos, suspensión, dirección, aire acondicionado (A/C) y mantenimiento.'}
              </p>
            </div>
          </motion.div>

          {/* Card 3B: ELECTRICAL & ADAS SYSTEM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.22 }}
            onClick={() => setActiveModal(DIVISIONS[2])}
            className="flex-1 bento-card rounded-3xl p-6 flex flex-col justify-between cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                ADAS & SENSORS
              </span>
              <Cpu className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-1">
                {lang === 'en' ? 'Electrical & ADAS System' : 'Sistema Eléctrico & ADAS'}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {lang === 'en'
                  ? 'Radar calibration, airbag modules, wiring harnesses & optical sensors.'
                  : 'Calibración de radares, bolsas de aire, arneses eléctricos y cámaras.'}
              </p>
            </div>
          </motion.div>

          {/* Card 3C: ALTERNATIVE & OEM PARTS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.26 }}
            onClick={() => setActiveModal(DIVISIONS[0])}
            className="flex-1 bento-card rounded-3xl p-6 flex flex-col justify-between cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                CERTIFIED FIT
              </span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-1">
                {lang === 'en' ? 'Genuine OEM & Alternative Parts' : 'Piezas OEM & Certificadas'}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {lang === 'en'
                  ? 'Factory-direct components that fit your budget without compromising safety.'
                  : 'Repuestos originales o certificados CAPA sin comprometer tu seguridad.'}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Modal when clicking any card */}
      <AnimatePresence>
        {activeModal && (
          <div
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl rounded-3xl bg-[#0D0E12] border border-white/15 p-7 sm:p-9 shadow-2xl text-white"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-neutral-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>

              <span className="text-xs font-mono uppercase tracking-widest text-[#E05A2B] font-bold">
                DIVISION {activeModal.number} • {lang === 'en' ? activeModal.badgeEn : activeModal.badgeEs}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold mt-2 mb-2">
                {lang === 'en' ? activeModal.titleEn : activeModal.titleEs}
              </h3>

              <p className="text-sm text-neutral-300 mb-6">
                {lang === 'en' ? activeModal.focusEn : activeModal.focusEs}
              </p>

              <div className="space-y-3 mb-8 bg-black/40 p-5 rounded-2xl border border-white/5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  {lang === 'en' ? 'Included Technical Scope:' : 'Alcance Técnico Incluido:'}
                </h4>
                {(lang === 'en' ? activeModal.specs : activeModal.specsEs).map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-neutral-200">
                    <Check className="w-4 h-4 text-[#E05A2B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#estimate"
                  onClick={() => setActiveModal(null)}
                  className="flex-1 py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#C81D25] to-[#E05A2B] text-white font-semibold text-sm text-center shadow-lg shadow-red-600/25"
                >
                  {lang === 'en' ? 'Request Estimate for This Service' : 'Cotizar Este Servicio'}
                </a>
                <a
                  href="tel:5126967475"
                  className="py-3.5 px-5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#E05A2B]" />
                  <span>(512) 696-7475</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
