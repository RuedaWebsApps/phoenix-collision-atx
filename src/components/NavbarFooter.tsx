import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface NavProps {
  lang: 'en' | 'es';
  setLang: (lang: 'en' | 'es') => void;
}

export const Navbar: React.FC<NavProps> = ({ lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050507]/85 backdrop-blur-2xl border-b border-white/[0.08] py-3.5 shadow-[0_10px_40px_rgba(0,0,0,0.85)]'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Official Phoenix Brand Identity */}
        <a href="#" className="flex items-center gap-3.5 group">
          <img
            src="/icono-phoenix-web.png"
            alt="Phoenix Collision ATX Emblem"
            className="w-11 h-11 sm:w-12 sm:h-12 object-contain drop-shadow-[0_0_15px_rgba(224,90,43,0.45)] group-hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-white font-extrabold tracking-tight text-base sm:text-lg leading-none">
                PHOENIX COLLISION
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-gradient-to-r from-[#E05A2B] to-[#C81D25] text-white shadow-sm">
                ATX
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-400 mt-1 font-medium">
              Austin Auto Rebuild & Hail Center
            </span>
          </div>
        </a>

        {/* Apple Keynote Style Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-neutral-300">
          <a href="#restoration" className="hover:text-white transition-colors">
            {lang === 'en' ? 'Before & After' : 'Antes y Después'}
          </a>
          <a href="#process" className="hover:text-white transition-colors">
            {lang === 'en' ? 'The Process' : 'El Proceso'}
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            {lang === 'en' ? 'Services' : 'Servicios'}
          </a>
          <a href="#craftsmanship" className="hover:text-white transition-colors">
            {lang === 'en' ? 'Craftsmanship' : 'El Taller'}
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
          <a href="#estimate" className="hover:text-white transition-colors">
            {lang === 'en' ? 'Estimate' : 'Cotizar'}
          </a>
        </nav>

        {/* Right Actions: Language Switcher + Phone + CTA */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Bilingual Switcher EN | ES */}
          <div className="flex items-center text-xs font-mono border border-white/10 rounded-full p-0.5 bg-white/[0.03]">
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                lang === 'en' ? 'bg-white/15 text-white font-bold' : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('es')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                lang === 'es' ? 'bg-white/15 text-white font-bold' : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              ES
            </button>
          </div>

          <a
            href="tel:5126967475"
            className="text-xs font-medium text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#E05A2B]" />
            <span>Call (512) 696-7475</span>
          </a>

          <a
            href="#estimate"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#B91C1C] via-[#C81D25] to-[#E05A2B] hover:brightness-110 text-white font-semibold text-xs tracking-wide shadow-[0_8px_25px_-4px_rgba(200,29,37,0.55)] transition-all flex items-center gap-1.5"
          >
            <span>{lang === 'en' ? 'Get Estimate' : 'Cotización Gratis'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 rounded-lg bg-white/5 border border-white/10"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090A0F]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-xs font-mono uppercase text-neutral-400">Idioma / Language</span>
            <div className="flex gap-2">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded text-xs font-bold ${
                  lang === 'en' ? 'bg-[#E05A2B] text-white' : 'bg-white/5 text-neutral-400'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang('es')}
                className={`px-3 py-1 rounded text-xs font-bold ${
                  lang === 'es' ? 'bg-[#E05A2B] text-white' : 'bg-white/5 text-neutral-400'
                }`}
              >
                Español
              </button>
            </div>
          </div>

          <a href="#restoration" onClick={() => setMobileMenuOpen(false)} className="block text-base text-neutral-200 py-1.5">
            {lang === 'en' ? 'Before & After Restoration' : 'Restauración Antes y Después'}
          </a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)} className="block text-base text-neutral-200 py-1.5">
            {lang === 'en' ? 'The Process' : 'El Proceso'}
          </a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-base text-neutral-200 py-1.5">
            {lang === 'en' ? 'Services' : 'Servicios'}
          </a>
          <a href="#craftsmanship" onClick={() => setMobileMenuOpen(false)} className="block text-base text-neutral-200 py-1.5">
            {lang === 'en' ? 'The Art of Rebuilding' : 'El Arte de Reconstruir'}
          </a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-base text-neutral-200 py-1.5">
            FAQ
          </a>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="tel:5126967475"
              className="py-3 text-center rounded-xl bg-white/10 text-white text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#E05A2B]" />
              Call (512) 696-7475
            </a>
            <a
              href="#estimate"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 text-center rounded-xl bg-gradient-to-r from-[#C81D25] to-[#E05A2B] text-white text-sm font-semibold"
            >
              {lang === 'en' ? 'Start Free Estimate' : 'Solicitar Presupuesto'}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC<{ lang: 'en' | 'es' }> = ({ lang }) => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#040406] pt-16 pb-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/[0.06]">
          {/* Brand Column with Full Official Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <img
                src="/logo-phoenix-web.png"
                alt="Phoenix Collision ATX Official Logo"
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              {lang === 'en'
                ? 'Austin’s premier collision, hail damage (PDR), and structural auto rebuild center. Restoring factory perfection with lifetime warranty craftsmanship.'
                : 'El centro líder de Austin en colisión, granizo (PDR) y reconstrucción estructural automotriz. Devolviendo la perfección de fábrica con garantía de por vida.'}
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>
                {lang === 'en'
                  ? 'Lifetime Paint & Structural Workmanship Warranty'
                  : 'Garantía Escrita de por Vida en Pintura y Estructura'}
              </span>
            </div>
          </div>

          {/* Core Divisions */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase">
              {lang === 'en' ? 'Core Divisions' : 'Divisiones Especializadas'}
            </h4>
            <ul className="space-y-2.5 text-neutral-400 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  01 / Collision & Structural Frame Rebuild
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  02 / Texas Hail Damage & Paintless Dent Repair (PDR)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  03 / Complete Mechanical, Suspension, A/C & ADAS
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  04 / Custom Paint, OEM Parts & Performance Upgrades
                </a>
              </li>
              <li>
                <a href="tel:5126967475" className="text-[#E05A2B] hover:underline font-medium">
                  24/7 Emergency Flatbed Towing in Austin
                </a>
              </li>
            </ul>
          </div>

          {/* Austin Facility Info */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase">
              Austin Headquarters
            </h4>
            <div className="flex items-start gap-2.5 text-neutral-300">
              <MapPin className="w-4 h-4 text-[#E05A2B] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">905 Kramer Ln</p>
                <p className="text-neutral-400">Austin, TX 78758</p>
              </div>
            </div>
            <p className="text-white font-mono text-sm font-semibold pt-1">
              Call (512) 696-7475
            </p>
            <p className="text-neutral-500 text-xs">
              Mon – Fri: 8:00 AM – 6:00 PM <br />
              24/7 Dispatch & Towing Active
            </p>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500">
          <div className="flex items-center gap-3">
            <img src="/icono-phoenix-web.png" alt="Phoenix Icon" className="w-6 h-6 object-contain" />
            <span>© {new Date().getFullYear()} PHOENIX COLLISION ATX. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <span>905 Kramer Ln, Austin, TX 78758</span>
            <a href="tel:5126967475" className="text-neutral-300 hover:text-white">
              (512) 696-7475
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
