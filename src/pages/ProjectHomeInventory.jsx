import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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
        </div>
      </section>

      <section className="border border-border bg-secondary/30 p-4 md:p-8">
        <div className="w-full aspect-[16/9] bg-card border border-border shadow-2xl overflow-hidden flex flex-col">
          <div className="h-10 border-b border-border bg-secondary flex items-center px-4 justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-border"></div>
              <div className="w-3 h-3 rounded-full bg-border"></div>
              <div className="w-3 h-3 rounded-full bg-border"></div>
            </div>
          </div>
          <div className="flex-1 flex">
            <div className="w-48 border-r border-border bg-secondary/20 hidden md:block p-4 space-y-4">
              <div className="h-6 w-3/4 bg-border/50 rounded-sm mb-8"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-primary/20 rounded-sm"></div>
                <div className="h-4 w-5/6 bg-border/30 rounded-sm"></div>
                <div className="h-4 w-4/6 bg-border/30 rounded-sm"></div>
              </div>
            </div>
            <div className="flex-1 p-6 space-y-6">
              <div className="flex justify-between items-end">
                <div className="space-y-2">
                  <div className="h-6 w-48 bg-foreground/20 rounded-sm"></div>
                  <div className="h-4 w-32 bg-border/50 rounded-sm"></div>
                </div>
                <div className="h-8 w-24 bg-primary/20 border border-primary/30 rounded-sm"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1,2,3].map(i => (
                  <div key={i} className="h-24 bg-secondary/40 border border-border rounded-sm p-4 flex flex-col justify-between">
                    <div className="h-3 w-16 bg-border/50 rounded-sm"></div>
                    <div className="h-8 w-20 bg-foreground/30 rounded-sm"></div>
                  </div>
                ))}
              </div>
              <div className="flex-1 min-h-[200px] border border-border bg-secondary/10 rounded-sm p-4">
                <div className="h-8 border-b border-border/50 mb-4 flex gap-4">
                  <div className="h-4 w-1/4 bg-border/30 rounded-sm"></div>
                  <div className="h-4 w-1/4 bg-border/30 rounded-sm"></div>
                  <div className="h-4 w-1/4 bg-border/30 rounded-sm"></div>
                </div>
                {[1,2,3,4].map(i => (
                  <div key={i} className="h-6 border-b border-border/30 mb-2 flex gap-4 items-center">
                    <div className="h-2 w-1/4 bg-border/20 rounded-sm"></div>
                    <div className="h-2 w-1/4 bg-border/20 rounded-sm"></div>
                    <div className="h-2 w-1/4 bg-foreground/10 rounded-sm"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
