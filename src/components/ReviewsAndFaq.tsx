import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Star, MapPin, Phone, ExternalLink } from 'lucide-react';

interface ReviewsFaqProps {
  lang: 'en' | 'es';
}

const FAQS = [
  {
    qEn: 'Do you work with my insurance?',
    qEs: '¿Trabajan con mi compañía de seguros?',
    aEn: 'Yes. We work directly with all major insurance carriers in Texas (State Farm, GEICO, Progressive, Allstate, USAA, Nationwide, AAA, etc.). We handle supplements, paperwork, and approvals directly so you have zero headaches.',
    aEs: 'Sí. Trabajamos directamente con todas las aseguradoras en Texas (State Farm, GEICO, Progressive, Allstate, USAA, Nationwide, AAA, etc.). Nos encargamos de todo el papeleo, suplementos y aprobaciones por ti.'
  },
  {
    qEn: 'How long does a typical collision or hail repair take?',
    qEs: '¿Cuánto tiempo toma una reparación de colisión o granizo?',
    aEn: 'Paintless Dent Repair (PDR) for hail damage typically takes 2 to 4 days. Minor-to-moderate collision repairs take 3 to 7 business days, while major structural rebuilds depend on OEM part availability.',
    aEs: 'Las reparaciones de granizo (PDR) suelen estar listas en 2 a 4 días. Colisiones menores o medias toman de 3 a 7 días hábiles, manteniendo comunicación constante sobre cada avance.'
  },
  {
    qEn: 'Can you arrange 24/7 towing and a rental car?',
    qEs: '¿Pueden coordinar grúa 24/7 y auto de alquiler?',
    aEn: 'Absolutely. Our flatbed towing dispatch operates 24/7 across Austin. Call (512) 696-7475 anytime and we will safely transport your vehicle to 905 Kramer Ln and assist with rental coordination.',
    aEs: 'Totalmente. Nuestro servicio de grúa cama plana opera 24/7 en todo Austin. Llámanos al (512) 696-7475 a cualquier hora para trasladar tu auto de forma segura a 905 Kramer Ln.'
  },
  {
    qEn: 'Do you offer warranties on your paint and structural work?',
    qEs: '¿Ofrecen garantía en sus trabajos de pintura y carrocería?',
    aEn: 'Yes. Every collision rebuild and PPG® paint refinish at Phoenix Collision ATX comes backed by our Written Lifetime Warranty for as long as you own the vehicle.',
    aEs: 'Sí. Cada reconstrucción estructural y trabajo de pintura PPG® en Phoenix Collision ATX cuenta con Garantía Escrita de por Vida mientras seas propietario del vehículo.'
  }
];

const REVIEWS = [
  {
    name: 'Jorge T.',
    vehicle: '2025 Chevrolet Equinox / BMW Owner',
    textEn:
      'I had severe hood and front-end misalignment after a collision. Phoenix Collision ATX aligned everything to factory spec, matched the paint seamlessly, and even calibrated the safety sensors as a courtesy.',
    textEs:
      'Mi vehículo tenía problemas en el capó y frente tras una colisión. Lo alinearon perfectamente al estándar de fábrica, igualaron la pintura de forma impecable y revisaron todo el sistema de seguridad.'
  },
  {
    name: 'Diana C.',
    vehicle: '2024 Hyundai Palisade',
    textEn:
      'After an accident left my driver door dented and paint damaged, the finish they achieved was flawless—as if nothing ever happened. Honest pricing, fast turnaround, 100% recommended in Austin.',
    textEs:
      'Después de un choque con abolladuras en la puerta y pintura dañada, el acabado que lograron fue impecable, como si nunca hubiera pasado nada. Atención increíble y presupuesto justo. Recomiendo 100%.'
  }
];

export const ReviewsAndFaq: React.FC<ReviewsFaqProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
      {/* FAQ SECTION (Clean Horizontal Dividers matching client layout) */}
      <div className="mb-28">
        <div className="mb-10">
          <span className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#E05A2B] font-bold block mb-2">
            {lang === 'en' ? 'COMMON QUESTIONS' : 'PREGUNTAS FRECUENTES'}
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase">
            FAQ.
          </h2>
        </div>

        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 text-base sm:text-lg font-medium text-neutral-200 hover:text-white transition-colors cursor-pointer"
                >
                  <span>{lang === 'en' ? item.qEn : item.qEs}</span>
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4 text-[#E05A2B]" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 pr-10 text-sm text-neutral-400 leading-relaxed">
                        {lang === 'en' ? item.aEn : item.aEs}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* REVIEWS + INTERACTIVE DARK MAP (905 KRAMER LN, AUSTIN TX) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Stacked Reviews */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-5">
          {REVIEWS.map((rev, i) => (
            <div key={i} className="bento-card rounded-3xl p-7 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                  “{lang === 'en' ? rev.textEn : rev.textEs}”
                </p>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span className="text-sm font-bold text-white">{rev.name}</span>
                <span className="text-xs font-mono text-neutral-500">{rev.vehicle}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Austin Facility Map Card */}
        <div className="lg:col-span-6 bento-card rounded-3xl overflow-hidden flex flex-col justify-between min-h-[340px] relative">
          <div className="relative flex-1 min-h-[240px] w-full bg-[#090A0F]">
            <iframe
              title="Phoenix Collision ATX 905 Kramer Ln Austin Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.3418389894885!2d-97.6928033!3d30.3808757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644c9bffab7f6b5%3A0x2983166b2ffdd49e!2s905%20Kramer%20Ln%2C%20Austin%2C%20TX%2078758!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="w-full h-full border-0 filter invert-[92%] hue-rotate-[180deg] contrast-125 opacity-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="p-5 bg-[#0C0D12] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#E05A2B]/15 border border-[#E05A2B]/30 flex items-center justify-center text-[#E05A2B]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">905 Kramer Ln, Austin, TX 78758</p>
                <p className="text-xs text-neutral-400">Phoenix Collision ATX • North Austin / Domain Area</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="tel:5126967475"
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-white flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#E05A2B]" />
                <span>(512) 696-7475</span>
              </a>
              <a
                href="https://www.google.com/maps/place/Phoenix+Collision/@30.3808757,-97.6912528,19.5z"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-[#E05A2B] hover:bg-[#C81D25] text-xs font-semibold text-white flex items-center gap-1.5 transition-colors"
              >
                <span>Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
