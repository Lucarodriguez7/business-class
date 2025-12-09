import React from 'react';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-light opacity-30 -skew-x-12 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border border-gold/10 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <Reveal>
          <div className="mb-4 inline-block">
            <span className="py-1 px-3 border-b border-gold text-gold text-xs font-bold uppercase tracking-[0.2em]">
              Excelencia & Exclusividad
            </span>
          </div>
        </Reveal>
        
        <Reveal delay={0.2}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-slate-900 leading-tight mb-6">
            Organización de Eventos <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-deep">
              Corporativos & Premium
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Diseñamos experiencias inolvidables que elevan la percepción de tu marca. 
            Detalles curados, logística impecable y un servicio de clase mundial.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth'})}>
              Solicitar Cotización
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('experiencia')?.scrollIntoView({ behavior: 'smooth'})}>
              Conocer Más
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};