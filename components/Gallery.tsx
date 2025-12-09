import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { GalleryItem } from '../types';
import { Reveal } from './ui/Reveal';

const galleryItems: GalleryItem[] = [
  { id: 1, imageUrl: 'https://cdn0.casamientos.com.ar/vendor/6781/3_2/960/jpg/mar-05_7_116781.jpeg', title: 'Gala Anual Tech', category: 'Cena' },
  { id: 2, imageUrl: 'https://catering.grupoelescondite.com/wp-content/uploads/2019/02/como-organizar-evento-corporativo.jpg', title: 'Evento Corporativo', category: 'Corp' },
  { id: 3, imageUrl: 'https://vestidos15.com/wp-content/uploads/2023/11/catalogodeprecios-07-scaled.jpg', title: 'Fiesta de 15', category: 'XV' },
  { id: 4, imageUrl: 'https://cdn0.casamientos.com.ar/article-real-wedding/301/original/1280/jpg/461697.jpeg', title: 'Casamiento', category: 'Casamiento' },
  { id: 5, imageUrl: 'https://expocannabis.com.ar/wp-content/uploads/2025/08/b2b_foto_principal_2308x1298.jpg', title: 'Expo de lanzamiento', category: 'Corp' },
  { id: 6, imageUrl: 'https://img.freepik.com/foto-gratis/personas-que-participan-evento-alto-protocolo_23-2150951243.jpg?semt=ais_hybrid&w=740&q=80', title: 'Conferencia Ejecutiva', category: 'Corp' },
];

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-4">
              Galería Exclusiva
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <div 
                className="group relative overflow-hidden cursor-pointer aspect-[4/5] md:aspect-square"
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-gold text-xs uppercase tracking-widest mb-2 font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-heading font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {item.title}
                  </h3>
                  <div className="mt-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                    <ZoomIn className="text-white w-8 h-8 opacity-80" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={48} strokeWidth={1} />
          </button>
          
          <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.imageUrl} 
              alt={selectedImage.title} 
              className="max-w-full max-h-[80vh] object-contain shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-2xl font-heading font-light">{selectedImage.title}</h3>
              <p className="text-gold text-sm uppercase tracking-widest mt-1">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};