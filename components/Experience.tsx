import React from 'react';
import { Award, Clock, Users, ShieldCheck } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="py-24 bg-gold-light border-y border-gold/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-800 mb-6 leading-tight">
                La Experiencia <span className="text-gold">Business Class</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                No solo organizamos eventos; creamos atmósferas. Entendemos que en el mundo de los negocios, cada detalle comunica. Nuestra obsesión por la perfección es su garantía de éxito.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Clock, text: "Más de 10 años de trayectoria" },
                  { icon: Users, text: "Equipo de producción experto" },
                  { icon: Award, text: "Eventos 100% personalizados" },
                  { icon: ShieldCheck, text: "Garantía de excelencia" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <item.icon className="text-gold flex-shrink-0" size={24} />
                    <span className="text-slate-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:w-1/2 relative">
            <Reveal delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 border-2 border-gold translate-x-4 translate-y-4 z-0"></div>
                <img 
                  src="Diseño sin título (9).png" 
                  alt="Corporate Event Experience" 
                  className="relative z-10 w-full h-auto shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};