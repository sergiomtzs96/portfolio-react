import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        
        {/* Info Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-['Inter:Bold',sans-serif] text-white mb-8">
              Empecemos a trabajar juntos
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-md">
              ¿Tienes un proyecto en mente o simplemente quieres saludar? 
              Estoy siempre abierto a nuevas oportunidades y colaboraciones.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="p-4 rounded-full border border-white/10 bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <span className="block text-sm text-gray-400 mb-1">Escríbeme</span>
                  <p className="text-white text-xl font-medium">sergiomtzs96@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="p-4 rounded-full border border-white/10 bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <span className="block text-sm text-gray-400 mb-1">Llámame</span>
                  <p className="text-white text-xl font-medium">+34 656 644 312</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="p-4 rounded-full border border-white/10 bg-white/5 group-hover:bg-white/10 transition-colors">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <div>
                  <span className="block text-sm text-gray-400 mb-1">Ubicación</span>
                  <p className="text-white text-xl font-medium">Madrid, España</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
             <p className="text-gray-500 text-sm">© 2026 Sergio Martínez. Todos los derechos reservados.</p>
          </div>
        </motion.div>

        {/* Form Side */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/[0.02] p-8 md:p-10 rounded-3xl border border-white/5"
        >
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Nombre</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Tu nombre"
                  className="bg-transparent border-b border-white/20 px-4 py-3 text-white placeholder:text-gray-600 focus:border-blue-300 focus:outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="tu@email.com"
                  className="bg-transparent border-b border-white/20 px-4 py-3 text-white placeholder:text-gray-600 focus:border-blue-300 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="subject" className="text-sm font-medium text-gray-400 ml-1">Asunto</label>
              <select 
                 id="subject"
                 className="bg-transparent border-b border-white/20 px-4 py-3 text-white focus:border-blue-300 focus:outline-none transition-colors [&>option]:bg-[#020040]"
              >
                <option value="">Selecciona un asunto</option>
                <option value="project">Nuevo Proyecto</option>
                <option value="collab">Colaboración</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Mensaje</label>
              <textarea 
                id="message"
                rows={5}
                placeholder="Cuéntame sobre tu proyecto..."
                className="bg-transparent border-b border-white/20 px-4 py-3 text-white placeholder:text-gray-600 focus:border-blue-300 focus:outline-none transition-colors resize-none"
              />
            </div>

            <button 
              type="submit" 
              className="mt-8 group flex items-center justify-center gap-3 bg-white text-[#020040] py-4 px-8 rounded-[6px] font-semibold hover:bg-blue-50 transition-all active:scale-[0.98]"
            >
              Enviar Mensaje
              <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}