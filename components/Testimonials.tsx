import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../types';
import { Reveal } from './ui/Reveal';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Méndez",
    company: "CEO, TechGlobal",
    quote: "La atención al detalle fue exquisita. Transformaron nuestra conferencia anual en una experiencia de lujo que nuestros socios no dejan de elogiar.",
  },
  {
    id: 2,
    name: "Sofía Arango",
    company: "Dir. Marketing, LuxeBrands",
    quote: "Profesionalismo puro. Entendieron a la perfección la identidad de nuestra marca y la plasmaron en cada rincón del evento.",
  },
  {
    id: 3,
    name: "Fernando Ruiz",
    company: "Gerente, FinCorp",
    quote: "Business Class elevó nuestro estándar. La logística fue impecable y el diseño visual simplemente impresionante.",
  }
];

const logos = [
  "https://static.vecteezy.com/system/resources/thumbnails/050/544/573/small/the-logo-for-a-company-that-sells-financial-products-free-png.png",
  "https://images.vexels.com/media/users/3/142887/isolated/preview/fc58c5ffb8c2e33fc3e15a2453189825-logotipo-de-empresa-logistica-en-crecimiento.png",
  "https://w7.pngwing.com/pngs/898/916/png-transparent-oracle-corporation-logo-computer-software-business-company-logo-miscellaneous-angle-company-thumbnail.png",
  "https://1000marcas.net/wp-content/uploads/2019/12/meta-logo.png",
  "https://w7.pngwing.com/pngs/919/540/png-transparent-logo-brand-small-business-graphic-design-business-blue-web-design-text.png",
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="clientes" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Logos Section */}
        <div className="mb-20 opacity-60 hover:opacity-100 transition-opacity duration-500">
           <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
             {logos.map((logo, idx) => (
               <img key={idx} src={logo} alt={`Client logo ${idx}`} className="h-12 w-auto grayscale contrast-125 brightness-125" />
             ))}
           </div>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative bg-gold-light/30 p-8 md:p-16 rounded-sm border border-gold/10">
          <div className="absolute top-8 left-8 text-gold/20">
            <Quote size={80} />
          </div>
          
          <div className="relative z-10 text-center">
            <Reveal key={currentIndex}>
              <p className="text-xl md:text-2xl text-slate-700 font-light italic leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </p>
              <div>
                <h4 className="text-gold font-heading font-bold uppercase tracking-wide">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-slate-500 text-sm mt-1">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </Reveal>
          </div>

          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full p-2 text-slate-400 hover:text-gold transition-colors"
          >
            <ChevronLeft size={40} strokeWidth={1} />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full p-2 text-slate-400 hover:text-gold transition-colors"
          >
            <ChevronRight size={40} strokeWidth={1} />
          </button>
        </div>
      </div>
    </section>
  );
};