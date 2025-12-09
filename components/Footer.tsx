import React from 'react';
import { Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gold-deep/90 text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-heading font-bold tracking-widest uppercase mb-6">
              Business <span className="text-gold-light">Class</span>
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Elevando los estándares de la industria de eventos corporativos a través de la excelencia, el diseño y la innovación.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gold-light">Navegación</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="#hero" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#galeria" className="hover:text-white transition-colors">Galería</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gold-light">Servicios</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>Eventos Empresariales</li>
              <li>Lanzamientos</li>
              <li>Congresos</li>
              <li>Producción Técnica</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gold-light">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-white hover:text-gold-deep transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-white hover:text-gold-deep transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-white hover:text-gold-deep transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/60">
          <p>&copy; {new Date().getFullYear()} Business Class Events. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Política de Privacidad</a>
            <a href="#" className="hover:text-white">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};