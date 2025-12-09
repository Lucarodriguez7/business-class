import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavigationLink } from '../types';

const links: NavigationLink[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Experiencias', href: '#experiencia' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contacto', href: '#contacto' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="z-50">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <h1 className={`text-2xl font-heading font-bold tracking-widest uppercase transition-colors duration-300 ${isScrolled ? 'text-slate-800' : 'text-slate-800 md:text-slate-800'}`}>
              Business <span className="text-gold">Class</span>
            </h1>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium uppercase tracking-wider hover:text-gold transition-colors duration-300 ${
                isScrolled ? 'text-slate-600' : 'text-slate-600'
              }`}
            >
              {link.label}
            </button>
          ))}
          <a href="#contacto" className={`px-6 py-2 border text-xs uppercase tracking-widest font-semibold transition-all hover:bg-gold hover:text-white hover:border-gold ${isScrolled ? 'border-slate-800 text-slate-800' : 'border-slate-800 text-slate-800'}`}>
            Reservar
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-800 hover:text-gold transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {links.map((link) => (
          <button
            key={link.label}
            onClick={() => handleNavClick(link.href)}
            className="text-2xl font-heading font-light text-slate-800 hover:text-gold transition-colors"
          >
            {link.label}
          </button>
        ))}
      </div>
    </header>
  );
};