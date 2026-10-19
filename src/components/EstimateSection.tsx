import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Check, Send, Image as ImageIcon } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EstimateProps {
  lang: 'en' | 'es';
}

export const EstimateSection: React.FC<EstimateProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    vehicle: '',
    insurance: '',
  });
  const [filesCount, setFilesCount] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#E05A2B', '#C81D25', '#FFFFFF']
    });
  };

  return (
    <section id="estimate" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
      <div className="text-center mb-12">
        <span className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#E05A2B] font-bold block mb-2">
          {lang === 'en' ? 'FAST DIGITAL ASSESSMENT' : 'EVALUACIÓN DIGITAL RÁPIDA'}
        </span>
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase">
          {lang === 'en' ? 'ESTIMATE.' : 'COTIZACIÓN.'}
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base mt-2">
          {lang === 'en'
            ? 'Request a digital quote in two minutes.'
            : 'Solicita una cotización digital en dos minutos.'}
        </p>
      </div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bento-card rounded-3xl p-10 text-center max-w-xl mx-auto"
        >
          <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            {lang === 'en' ? 'Estimate Request Received!' : '¡Solicitud de Presupuesto Recibida!'}
          </h3>
          <p className="text-neutral-400 text-sm mb-6">
            {lang === 'en'
              ? 'Our Austin specialists at 905 Kramer Ln are reviewing your vehicle details and will contact you shortly.'
              : 'Nuestros especialistas en 905 Kramer Ln están revisando los datos de tu vehículo y te contactarán de inmediato.'}
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-mono uppercase tracking-wider text-white cursor-pointer"
          >
            {lang === 'en' ? 'Send Another Request' : 'Enviar Otra Solicitud'}
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Side: Photo Dropzone (Exactly matching client mockup) */}
          <label className="lg:col-span-6 rounded-3xl border border-dashed border-white/20 hover:border-[#E05A2B] bg-[#0B0C10]/90 p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all group min-h-[260px]">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-[#E05A2B] group-hover:scale-105 transition-all mb-4">
              {filesCount > 0 ? <ImageIcon className="w-6 h-6 text-emerald-400" /> : <Upload className="w-6 h-6" />}
            </div>

            <span className="text-sm sm:text-base font-medium text-neutral-200 group-hover:text-white">
              {filesCount > 0
                ? `${filesCount} ${lang === 'en' ? 'photo(s) attached for inspection' : 'foto(s) adjuntada(s) para revisión'}`
                : lang === 'en'
                ? 'Drop your vehicle damage photos here'
                : 'Arrastra o sube aquí las fotos del daño de tu auto'}
            </span>

            <span className="text-xs text-neutral-500 mt-1.5 font-mono">
              {lang === 'en' ? 'Click to browse • JPG, PNG, HEIC' : 'Haz clic para seleccionar • JPG, PNG, HEIC'}
            </span>

            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files) setFilesCount(e.target.files.length);
              }}
            />
          </label>

          {/* Right Side: Input Fields & Red Submit Button */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            <input
              type="text"
              required
              placeholder={lang === 'en' ? 'Full Name' : 'Nombre Completo'}
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-[#14151B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E05A2B] transition-colors placeholder:text-neutral-500"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="tel"
                required
                placeholder={lang === 'en' ? 'Phone' : 'Teléfono'}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-[#14151B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E05A2B] transition-colors placeholder:text-neutral-500"
              />
              <input
                type="text"
                required
                placeholder={lang === 'en' ? 'Vehicle (e.g. 2024 BMW i8)' : 'Vehículo (ej. BMW i8 2024)'}
                value={formData.vehicle}
                onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-[#14151B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E05A2B] transition-colors placeholder:text-neutral-500"
              />
            </div>

            <input
              type="text"
              placeholder={
                lang === 'en'
                  ? 'Insurance Company (State Farm, GEICO, Progressive, or Private)'
                  : 'Compañía de Seguro (State Farm, GEICO, Progressive o Particular)'
              }
              value={formData.insurance}
              onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-[#14151B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E05A2B] transition-colors placeholder:text-neutral-500"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#A81C24] via-[#C81D25] to-[#E05A2B] hover:brightness-110 text-white font-semibold text-sm tracking-wide shadow-[0_10px_30px_-5px_rgba(200,29,37,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{lang === 'en' ? 'Submit Request' : 'Enviar Solicitud de Presupuesto'}</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
    </section>
  );
};
