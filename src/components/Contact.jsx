import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const contactInfo = [
  { icon: Mail, label: "Escríbeme", value: "sergiomtzs96@gmail.com", href: "mailto:sergiomtzs96@gmail.com" },
  { icon: Phone, label: "Llámame", value: "+34 656 644 312", href: "tel:+34656644312" },
  { icon: MapPin, label: "Ubicación", value: "Madrid, España" }
];

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const RECAPTCHA_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
const HAS_EMAILJS = PUBLIC_KEY && SERVICE_ID && TEMPLATE_ID;
if (!HAS_EMAILJS) console.warn("EmailJS env vars missing");
const HAS_RECAPTCHA = !!RECAPTCHA_KEY;

const subjects = [
  { value: "", label: "Selecciona un asunto" },
  { value: "project", label: "Nuevo Proyecto" },
  { value: "collab", label: "Colaboración" },
  { value: "other", label: "Otro" }
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);
  const recaptchaRef = useRef(null);

  const updateField = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const isValid = form.name.trim() && form.email.trim() && form.subject && form.message.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!HAS_EMAILJS) {
      setStatus("error");
      return;
    }

    if (HAS_RECAPTCHA) {
      const token = recaptchaRef.current?.getValue();
      if (!token) {
        setStatus("error-captcha");
        return;
      }
    }

    setSending(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: subjects.find((s) => s.value === form.subject)?.label || form.subject,
          message: form.message,
          "g-recaptcha-response": recaptchaRef.current?.getValue() || ""
        },
        PUBLIC_KEY
      );

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      recaptchaRef.current?.reset();
    } catch (err) {
      console.error("EmailJS error:", err?.text || err?.message || err);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <footer className="w-full border-t border-border">
      <section id="contact" className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 px-6 py-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-8">
                Empecemos a trabajar juntos
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-md">
                ¿Tienes un proyecto en mente o simplemente quieres saludar?
                Estoy siempre abierto a nuevas oportunidades y colaboraciones.
              </p>

              <div className="flex flex-col gap-8">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-5 group cursor-pointer">
                    <div className="p-4 rounded-full border border-border bg-secondary group-hover:bg-card transition-colors">
                      <item.icon className="text-foreground w-6 h-6" />
                    </div>
                    <div>
                      <span className="block text-sm text-muted-foreground mb-1">{item.label}</span>
                      <p className="text-foreground text-xl font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 lg:mt-0 space-y-4">
              <h3 className="text-sm font-semibold font-mono uppercase tracking-wider text-foreground">¿Disponibilidad?</h3>
              <p className="text-sm text-muted-foreground">Abierto a oportunidades como Junior Fullstack.</p>
              <div className="flex items-center gap-3 pt-2">
                <a href="mailto:sergiomtzs96@gmail.com" className="p-2 border border-border bg-card hover:bg-secondary transition-colors text-foreground flex items-center gap-2 text-xs font-mono">
                  <Mail size={14} /> Email
                </a>
                <a href="https://github.com/sergiomtzs96" target="_blank" rel="noreferrer" className="p-2 border border-border bg-card hover:bg-secondary transition-colors text-foreground flex items-center gap-2 text-xs font-mono">
                  <Github size={14} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/sergiomtzs96/" target="_blank" rel="noreferrer" className="p-2 border border-border bg-card hover:bg-secondary transition-colors text-foreground flex items-center gap-2 text-xs font-mono">
                  <Linkedin size={14} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card p-8 md:p-10 rounded-3xl border border-border"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted-foreground ml-1">Nombre</label>
                  <input
                    type="text" id="name" value={form.name} onChange={updateField("name")} required
                    placeholder="Tu nombre"
                    className="bg-transparent border-b border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/40 focus:border-ring focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground ml-1">Email</label>
                  <input
                    type="email" id="email" value={form.email} onChange={updateField("email")} required
                    placeholder="tu@email.com"
                    className="bg-transparent border-b border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/40 focus:border-ring focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="subject" className="text-sm font-medium text-muted-foreground ml-1">Asunto</label>
                <select
                  id="subject" value={form.subject} onChange={updateField("subject")} required
                  className="bg-transparent border-b border-border px-4 py-3 text-foreground focus:border-ring focus:outline-none transition-colors [&>option]:bg-background"
                >
                  {subjects.map((s) => (
                    <option key={s.value} value={s.value} disabled={!s.value}>{s.label}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground ml-1">Mensaje</label>
                <textarea
                  id="message" rows={5} value={form.message} onChange={updateField("message")} required
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="bg-transparent border-b border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/40 focus:border-ring focus:outline-none transition-colors resize-none"
                />
              </div>

              {HAS_RECAPTCHA && (
                <div className="flex justify-center mt-2">
                  <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_KEY} theme="dark" />
                </div>
              )}

              {status === "error-captcha" && (
                <div className="flex items-center gap-2 text-amber-400 text-sm">
                  <AlertCircle size={16} /> Verifica que no eres un robot antes de enviar.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle size={16} /> Error al enviar. Inténtalo de nuevo o escríbeme directamente a sergiomtzs96@gmail.com
                </div>
              )}
              {status === "success" && (
                <div className="flex items-center gap-2 text-emerald-400 text-sm">
                  <CheckCircle2 size={16} /> Mensaje enviado correctamente. Te responderé pronto.
                </div>
              )}

              <button
                type="submit"
                disabled={!isValid || sending}
                className="mt-4 group flex items-center justify-center gap-3 bg-foreground text-background py-4 px-8 rounded-[6px] font-semibold hover:bg-foreground/90 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <><Loader2 size={18} className="animate-spin" /> Enviando...</>
                ) : (
                  <><Send size={18} /> Enviar Mensaje</>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        <div className="border-t border-border py-8 text-center">
          <p className="text-muted-foreground text-sm">© 2026 Sergio Martínez. Todos los derechos reservados.</p>
        </div>
      </section>
    </footer>
  );
}
