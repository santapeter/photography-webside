import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#130f0b]">
      <div className="absolute inset-0">
        <img
          src="/images/photo-1605800232664-0b972bc644f2.jpg"
          alt="Misty mountain landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0b07]/80 via-[#120d09]/55 to-[#0c0a07]/85" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="inline-block mb-7 px-5 py-2 border border-[#7b6230] text-[#c8ab67] text-xs sm:text-sm tracking-[0.34em] uppercase font-cinzel">
          Est. 2014 · Field Photography
        </p>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-[#ece0c8] leading-none tracking-tight mb-6 font-cinzel">
          Where Light
          <br />
          <span className="text-[#d5ac4f]">Meets Legend</span>
        </h1>

        <p className="text-[#ddd1b7]/80 text-lg sm:text-2xl max-w-3xl mx-auto leading-relaxed mb-10 font-spectral italic">
          Adventure photography for the bold. From the misty ridges of Chiang Mai to ancient jungle temples — every frame is a dispatch from the field.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#portfolio" className="group flex items-center gap-2 bg-[#d5ac4f] text-[#1a1207] px-8 py-3.5 text-sm tracking-[0.25em] uppercase hover:bg-[#e1bc67] transition-all duration-300 font-cinzel">
            View Portfolio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          <a href="#contact" className="flex items-center gap-2 border border-[#b99755] text-[#e8d8b7] px-8 py-3.5 text-sm tracking-[0.25em] uppercase hover:border-[#d8b56a] hover:text-[#f2e4c4] transition-all duration-300 font-cinzel">
            Book a Session
          </a>
        </div>

        <div className="flex justify-center gap-12 mt-16 pt-10 border-t border-[#7c6231]/50">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#f0e3c9] font-cinzel">150+</div>
            <div className="text-sm text-[#cfbd96] tracking-wider uppercase mt-1 font-spectral">Expeditions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#f0e3c9] font-cinzel">25+</div>
            <div className="text-sm text-[#cfbd96] tracking-wider uppercase mt-1 font-spectral">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#f0e3c9] font-cinzel">10+</div>
            <div className="text-sm text-[#cfbd96] tracking-wider uppercase mt-1 font-spectral">Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
