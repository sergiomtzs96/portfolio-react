import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Carousel from "../components/Carousel";
import HI1 from "../img/proyectos/projectsIMG/HomeInventory1.png";
import HI2 from "../img/proyectos/projectsIMG/HomeInventory2.png";
import HI3 from "../img/proyectos/projectsIMG/HomeInventory3.png";
import HI4 from "../img/proyectos/projectsIMG/HomeInventory4.png";
import HI5 from "../img/proyectos/projectsIMG/HomeInventory5.png";
import HI6 from "../img/proyectos/projectsIMG/HomeInventory6.png";

const images = [HI1, HI2, HI3, HI4, HI5, HI6];

export default function ProjectHomeInventory() {
  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">
        <ArrowLeft size={16} /> Volver
      </Link>

      <section className="space-y-6">
        <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
          <span>Case Study 01</span>
          <span className="w-8 h-px bg-border"></span>
          <span>SaaS / Fullstack</span>
        </div>
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Home Inventory
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Plataforma full-stack para la gestión de inventario doméstico. Diseñada con arquitectura MVC en el backend y una interfaz reactiva centrada en la eficiencia operativa.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-4">
          <a
            href="https://github.com/sergiomtzs96/home-inventory"
            className="flex items-center gap-2 bg-foreground text-background px-5 py-2 font-medium text-sm hover:bg-foreground/90 transition-colors"
          >
            Ver Repositorio
          </a>
          <a
            href="https://homeinventoryes.vercel.app/auth"
            className="flex items-center gap-2 bg-foreground text-background px-5 py-2 font-medium text-sm hover:bg-foreground/90 transition-colors"
          >
            Ir a la web
          </a>
        </div>
      </section>

      <section className="border border-border bg-secondary/30 p-2 md:p-3">
        <div className="border border-border overflow-hidden bg-card">
          <div className="h-10 border-b border-border bg-secondary flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/60"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/60"></div>
            <span className="ml-4 text-[11px] font-mono text-muted-foreground">Home Inventory — Screenshots</span>
          </div>
          <Carousel images={images} />
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Frontend", icon: "Terminal", desc: "React, Context API, TailwindCSS, React Router" },
          { label: "Backend", icon: "Server", desc: "Node.js, Express, Middleware patterns" },
          { label: "Database", icon: "Database", desc: "MongoDB, Mongoose ORM, Data aggregation" },
          { label: "Seguridad", icon: "Lock", desc: "JWT Auth, bcrypt, Protected Routes" }
        ].map((tech) => (
          <div key={tech.label} className="p-5 border border-border bg-card">
            <h3 className="font-mono text-sm mb-1 text-foreground">{tech.label}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{tech.desc}</p>
          </div>
        ))}
      </section>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Arquitectura de la Solución</h2>
            <div className="text-muted-foreground leading-relaxed text-sm space-y-4">
              <p>
                El objetivo era construir un sistema de inventario capaz de manejar múltiples usuarios bajo una misma cuenta familiar, garantizando aislamiento de datos y respuestas rápidas de la API.
              </p>
              <p>
                Opté por una arquitectura <strong>MVC en el backend</strong> separando las rutas, los controladores y los modelos de Mongoose. Esto me permitió abstraer la lógica de negocio lejos de la capa de red.
              </p>
              <p>
                En el <strong>frontend</strong>, implementé un patrón de Provider global para mantener el estado de autenticación de forma síncrona en toda la aplicación, reduciendo las llamadas redundantes al endpoint de validación de tokens.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Retos Técnicos & CRUD</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-border pl-4">
                <h4 className="font-mono text-sm text-foreground mb-2">1. Autenticación Stateful con JWT</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Implementé un flujo de autenticación que emite un Access Token firmado con un secreto de servidor. El reto fue manejar correctamente la interceptación de peticiones Axios en el cliente para adjuntar el Bearer Token automáticamente y redirigir al login en caso de 401.
                </p>
              </div>
              <div className="border-l-2 border-border pl-4">
                <h4 className="font-mono text-sm text-foreground mb-2">2. Diseño Relacional en MongoDB</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Aunque MongoDB es NoSQL, el inventario requería relaciones entre Users, Locations y Items. Utilicé ref population en Mongoose para recuperar el árbol completo de datos en una sola query optimizada.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <div className="border border-border bg-card p-5 space-y-4 sticky top-24">
            <h3 className="font-mono text-sm text-foreground border-b border-border pb-2">API Endpoints</h3>
            <div className="space-y-3">
              {[
                { method: "GET", path: "/api/v1/inventory/stats", color: "text-emerald-400" },
                { method: "POST", path: "/api/v1/items/create", color: "text-blue-400" },
                { method: "PUT", path: "/api/v1/items/:id/stock", color: "text-amber-400" }
              ].map((endpoint) => (
                <div key={endpoint.path} className="flex items-start gap-2">
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 border ${endpoint.color}/20 ${endpoint.color}`}>{endpoint.method}</span>
                  <span className="text-xs font-mono text-muted-foreground mt-0.5">{endpoint.path}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <h3 className="font-mono text-sm text-foreground mb-3">Schema Model</h3>
              <pre className="text-[10px] font-mono text-muted-foreground leading-relaxed bg-secondary/50 p-3 border border-border overflow-x-auto">
{`const ItemSchema = new Schema({
  name: { type: String, required: true },
  qty: { type: Number, min: 0 },
  locationId: {
    type: ObjectId,
    ref: 'Location'
  },
  userId: {
    type: ObjectId,
    ref: 'User'
  }
}, { timestamps: true });`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
