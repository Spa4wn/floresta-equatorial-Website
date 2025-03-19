import React, { useEffect, useRef } from 'react';
import { ChevronDownIcon } from 'lucide-react';
export const HeroSection = () => {
  const parallaxLayers = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const {
        clientX,
        clientY
      } = e;
      const x = (window.innerWidth / 2 - clientX) / 25;
      const y = (window.innerHeight / 2 - clientY) / 25;
      parallaxLayers.current.forEach((layer, index) => {
        const speed = (index + 1) * 0.5;
        if (layer) {
          layer.style.transform = `translateX(${x * speed}px) translateY(${y * speed}px)`;
        }
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Background layers for parallax effect */}
      <div ref={el => el && (parallaxLayers.current[0] = el)} className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511497584788-876760111969')] bg-cover bg-center" aria-hidden="true" />
      <div ref={el => el && (parallaxLayers.current[1] = el)} className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d')] bg-cover bg-center opacity-40" aria-hidden="true" />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1c0f]/30 via-[#0b1c0f]/50 to-[#0b1c0f]"></div>
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="block text-green-300">Explorando a</span>
          <span className="block">Floresta Equatorial</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mb-12 text-gray-200">
          Mergulhe no ecossistema mais diverso e complexo do mundo, lar de mais
          de 50% das espécies de plantas e animais da Terra.
        </p>
        <a href="#camadas-da-floresta" className="px-8 py-4 bg-green-600 hover:bg-green-700 transition-colors rounded-full text-white font-medium flex items-center">
          Explorar a Floresta
        </a>
        {/* Scroll indicator */}
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDownIcon size={32} className="text-white opacity-70" />
        </div>
      </div>
    </section>;
};