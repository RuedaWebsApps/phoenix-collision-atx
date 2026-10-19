import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Navbar, Footer } from './components/NavbarFooter';
import { InteractiveComparison } from './components/InteractiveComparison';
import { ServicesGrid } from './components/ServicesGrid';
import { ProcessTimeline } from './components/ProcessTimeline';
import { EstimateSection } from './components/EstimateSection';
import { ReviewsAndFaq } from './components/ReviewsAndFaq';
import { ArrowRight, ShieldCheck, Truck, Sparkles } from 'lucide-react';

export function App() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const heroRef = useRef<HTMLDivElement>(null);

  // Smooth Apple-style Scroll Motion for the Hero BMW i8
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const carScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.08]);
  const carY = useTransform(scrollYProgress, [0, 0.6], [0, 35]);

  return (
    <div className="min-h-screen bg-[#050507] text-[#F8FAFC] overflow-x-hidden">
      {/* Top Header with Official Phoenix Logo & EN/ES Switcher */}
      <Navbar lang={lang} setLang={setLang} />

      {/* =========================================================================
          HERO SECTION — Apple Automotive Studio Keynote Style
         ========================================================================= */}
      <section
        ref={heroRef}
        className="relative pt-36 pb-16 sm:pt-44 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden"
      >
        {/* Subtle Studio Spotlight Behind the BMW i8 */}
        <div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-4xl h-[340px] bg-[radial-gradient(ellipse_at_center,rgba(224,90,43,0.18)_0%,rgba(200,29,37,0.08)_45%,rgba(5,5,7,0)_75%)] blur-3xl pointer-events-none" />

        {/* Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.06]">
            {lang === 'en' ? (
              <>
                While others see damage, <br />
                <span className="text-apple-gradient">we restore perfection.</span>
              </>
            ) : (
              <>
                Donde otros ven daño, <br />
                <span className="text-apple-gradient">restauramos la perfección.</span>
              </>
            )}
          </h1>

          <p className="mt-5 text-base sm:text-xl text-neutral-400 font-normal tracking-tight">
            {lang === 'en'
              ? "Austin's premier collision, hail, and auto rebuild center."
              : 'El centro líder de Austin en colisión, daño por granizo (PDR) y reconstrucción automotriz.'}
          </p>

          {/* Minimalist Apple-Style Dual Action Links + Primary Pill */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm font-medium">
            <a
              href="tel:5126967475"
              className="text-neutral-200 hover:text-[#E05A2B] transition-colors flex items-center gap-1.5 group"
            >
              <span>{lang === 'en' ? 'Request 24/7 towing' : 'Solicitar grúa 24/7'}</span>
              <ArrowRight className="w-4 h-4 text-[#E05A2B] group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#estimate"
              className="text-neutral-200 hover:text-[#E05A2B] transition-colors flex items-center gap-1.5 group"
            >
              <span>{lang === 'en' ? 'Start free estimate' : 'Cotización digital gratis'}</span>
              <ArrowRight className="w-4 h-4 text-[#E05A2B] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Clean Unobstructed Studio BMW i8 Showcase with Scroll Motion */}
        <motion.div
          style={{ scale: carScale, y: carY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative z-10 mt-8 sm:mt-10 max-w-5xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="/despues-arreglado.jpg"
              alt="Phoenix Collision ATX Restored BMW i8"
              className="w-full h-auto max-h-[540px] object-contain mx-auto select-none"
            />
            {/* Seamless vignette blend into the obsidian background */}
            <div className="absolute inset-0 shadow-[inset_0_0_80px_30px_#050507] pointer-events-none" />
          </div>
        </motion.div>

        {/* Subtle Executive Trust Bar */}
        <div className="relative z-10 mt-10 pt-8 border-t border-white/[0.07] max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-400">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#E05A2B]" />
            <span>{lang === 'en' ? 'Written Lifetime Paint Warranty' : 'Garantía de Pintura de por Vida'}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Truck className="w-4 h-4 text-[#E05A2B]" />
            <span>{lang === 'en' ? '24/7 Flatbed Towing in Austin' : 'Grúa Cama Plana 24/7 en Austin'}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#E05A2B]" />
            <span>{lang === 'en' ? 'We Work With All Insurances' : 'Trabajamos con Todas las Aseguradoras'}</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: THE RESTORATION (Real Before & After Slider from Downloads)
         ========================================================================= */}
      <InteractiveComparison lang={lang} />

      {/* =========================================================================
          SECTION 03 & 04: THE PROCESS + THE ART OF REBUILDING
         ========================================================================= */}
      <ProcessTimeline lang={lang} />

      {/* =========================================================================
          SECTION 05: ARCHITECTURAL BENTO SERVICES GRID
         ========================================================================= */}
      <ServicesGrid lang={lang} />

      {/* =========================================================================
          SECTION 06: FAQ + REVIEWS + AUSTIN HEADQUARTERS MAP
         ========================================================================= */}
      <ReviewsAndFaq lang={lang} />

      {/* =========================================================================
          SECTION 07: DIGITAL ESTIMATE DROPZONE & FORM
         ========================================================================= */}
      <EstimateSection lang={lang} />

      {/* =========================================================================
          FOOTER WITH OFFICIAL PHOENIX BRANDING
         ========================================================================= */}
      <Footer lang={lang} />
    </div>
  );
}

export default App;
