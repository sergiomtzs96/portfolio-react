import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from 'recharts';

const mockChartData = [
  { name: 'RM', goals: 85, possession: 60 },
  { name: 'FCB', goals: 78, possession: 65 },
  { name: 'ATM', goals: 62, possession: 55 },
  { name: 'SEV', goals: 55, possession: 48 },
  { name: 'VIL', goals: 48, possession: 52 },
];

export default function ProjectFootballStats() {
  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">
        <ArrowLeft size={16} /> Volver
      </Link>

      <section className="space-y-6">
        <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
          <span>Case Study 02</span>
          <span className="w-8 h-px bg-border"></span>
          <span>Data Platform</span>
        </div>
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            FootballStats Analytics
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Plataforma intensiva en datos. Integración de APIs deportivas complejas, normalización de payloads, sistema de caché y visualización interactiva de analíticas mediante Recharts.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-4">
          <a
            href="https://github.com/sergiomtzs96"
            className="flex items-center gap-2 bg-foreground text-background px-5 py-2 font-medium text-sm hover:bg-foreground/90 transition-colors"
          >
            Ver Repositorio
          </a>
        </div>
      </section>

      <section className="border border-border bg-secondary/30 p-4 md:p-8">
        <div className="w-full aspect-[16/9] bg-card border border-border shadow-2xl overflow-hidden flex flex-col">
          <div className="h-12 border-b border-border bg-secondary flex items-center px-6 justify-between">
            <div className="flex items-center gap-4">
              <div className="text-xs font-mono font-bold text-foreground">FOOTBALL_STATS</div>
              <div className="h-4 w-px bg-border"></div>
              <div className="flex gap-4 text-[10px] font-mono text-muted-foreground">
                <span className="text-foreground">Overview</span>
                <span>Teams</span>
                <span>Players</span>
              </div>
            </div>
          </div>

          <div className="flex-1 p-6 flex flex-col gap-6">
            <div className="flex justify-between items-end">
              <div>
                <div className="text-xs font-mono text-muted-foreground mb-1">Season 23/24</div>
                <div className="text-xl font-semibold text-foreground">League Overview</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 h-24">
              {[1,2,3].map(i => (
                <div key={i} className="border border-border bg-secondary/20 p-4 flex flex-col justify-between">
                  <div className="h-2 w-16 bg-border/50 rounded-sm"></div>
                  <div className="flex items-end justify-between">
                    <div className="h-6 w-12 bg-foreground/30 rounded-sm"></div>
                    <div className="h-3 w-8 bg-emerald-500/20 rounded-sm"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex-1 min-h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="name" stroke="var(--color-muted-foreground)" fontSize={10} />
                  <YAxis stroke="var(--color-muted-foreground)" fontSize={10} />
                  <Bar dataKey="goals" fill="var(--color-ring)" radius={[2,2,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Frontend", desc: "React, Recharts, TailwindCSS, Context API" },
          { label: "API Layer", desc: "REST APIs, data normalization, caching" },
          { label: "Data Viz", desc: "Recharts, responsive charts, custom tooltips" },
          { label: "Patrones", desc: "Renderizado condicional, lazy loading" }
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
                El proyecto requería consumir APIs deportivas externas con estructuras de datos complejas y volúmenes de información considerables.
              </p>
              <p>
                Implementé una capa de <strong>normalización en el cliente</strong> que transforma los payloads de las APIs en un formato uniforme para los componentes de visualización, aislando la lógica de transformación del resto de la aplicación.
              </p>
              <p>
                Para el <strong>rendimiento</strong>, implementé un sistema de caché en memoria que almacena las respuestas de la API con tiempo de expiración, reduciendo las llamadas redundantes y mejorando la experiencia de navegación.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Retos Técnicos</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-border pl-4">
                <h4 className="font-mono text-sm text-foreground mb-2">1. Normalización de Datos</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Las APIs deportivas devuelven datos con estructuras anidadas y nombres de campos inconsistentes. Desarrollé un sistema de mapeo que unifica los datos en un modelo consistente para los componentes de UI.
                </p>
              </div>
              <div className="border-l-2 border-border pl-4">
                <h4 className="font-mono text-sm text-foreground mb-2">2. Visualización Interactiva</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Utilicé Recharts para crear gráficos de rendimiento interactivos con tooltips personalizados, permitiendo a los usuarios explorar estadísticas detalladas de equipos y jugadores.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <div className="border border-border bg-card p-5 space-y-4 sticky top-24">
            <h3 className="font-mono text-sm text-foreground border-b border-border pb-2">API Data Flow</h3>
            <pre className="text-[10px] font-mono text-muted-foreground leading-relaxed bg-secondary/50 p-3 border border-border overflow-x-auto">
{`// Data normalization layer
const normalizeMatch = (raw) => ({
  id: raw.match_id,
  home: raw.team_home.name,
  away: raw.team_away.name,
  score: {
    home: raw.score.fulltime.home,
    away: raw.score.fulltime.away
  },
  stats: {
    possession: raw.stats.possession,
    shots: raw.stats.total_shots
  }
});`}
              </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
