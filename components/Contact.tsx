import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Gracias por su interés. Nos pondremos en contacto con usted a la brevedad.");
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses = "w-full bg-transparent border-b border-gray-300 py-3 text-slate-800 placeholder-gray-400 focus:border-gold focus:outline-none transition-colors duration-300";

  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-800 mb-6">
                Comience su <br/> <span className="text-gold">Próximo Evento</span>
              </h2>
              <p className="text-slate-500 mb-12 max-w-md">
                Complete el formulario para recibir una propuesta personalizada. Nuestro equipo se pondrá en contacto dentro de las próximas 24 horas.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-gold mt-1" size={20} />
                  <div>
                    <p className="text-slate-800 font-semibold uppercase tracking-wide text-sm">Dirección</p>
                    <p className="text-slate-500">Mar del Plata<br/>Buenos Aires, Argentina</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-gold mt-1" size={20} />
                  <div>
                    <p className="text-slate-800 font-semibold uppercase tracking-wide text-sm">Teléfono</p>
                    <p className="text-slate-500">+54 9 2235 47-6051</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="text-gold mt-1" size={20} />
                  <div>
                    <p className="text-slate-800 font-semibold uppercase tracking-wide text-sm">Email</p>
                    <p className="text-slate-500">Businessclasseventos@gmail.com</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 shadow-2xl border-t-4 border-gold">
            <Reveal delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="sr-only">Nombre Completo</label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Nombre Completo" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="sr-only">Empresa</label>
                    <input 
                      type="text" 
                      name="company" 
                      placeholder="Empresa" 
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="sr-only">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email Corporativo" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="sr-only">Teléfono</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="Teléfono" 
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only">Mensaje</label>
                  <textarea 
                    name="message" 
                    rows={4} 
                    placeholder="Detalles del evento..." 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full md:w-auto">Enviar Consulta</Button>
                </div>
              </form>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};