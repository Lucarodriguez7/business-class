import React from 'react';
import { Briefcase, Presentation, Mic2, Star } from 'lucide-react';
import { Service } from '../types';
import { Reveal } from './ui/Reveal';

const services: Service[] = [
  {
    id: 1,
    title: "Eventos Empresariales",
    description: "Cenas de gala, fiestas de fin de año y aniversarios corporativos con un estándar de lujo superior.",
    icon: Briefcase
  },
  {
    id: 2,
    title: "Lanzamientos de Marca",
    description: "Creamos el escenario perfecto para que su producto brille y capte la atención de los medios.",
    icon: Star
  },
  {
    id: 3,
    title: "Congresos & Conferencias",
    description: "Logística integral, gestión de invitados y tecnología audiovisual de vanguardia.",
    icon: Presentation
  },
  {
    id: 4,
    title: "Producción Audiovisual",
    description: "Escenarios impactantes, iluminación profesional y sonido de alta fidelidad para su evento.",
    icon: Mic2
  }
];

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-4">
              Nuestros Servicios
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Soluciones integrales diseñadas para satisfacer las demandas más exigentes del mundo corporativo.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.1}>
              <div className="group p-8 bg-white border border-gray-100 hover:border-gold/30 rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-default">
                <div className="w-14 h-14 mb-6 rounded-full bg-gold-light flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                  <service.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-slate-800 mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};