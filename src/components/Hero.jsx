import { motion } from "motion/react";
import { Github, ArrowRight, Code2, Server, Database, Users, Search, Plus, Activity, Lock, Terminal } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const mockData = [
  { time: '00:00', requests: 1200 },
  { time: '04:00', requests: 900 },
  { time: '08:00', requests: 3000 },
  { time: '12:00', requests: 5500 },
  { time: '16:00', requests: 4800 },
  { time: '20:00', requests: 3200 },
  { time: '24:00', requests: 1500 },
];

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-stretch gap-12 pt-8 justify-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 flex flex-col justify-center space-y-6"
      >
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-border bg-secondary/30 text-xs font-mono text-muted-foreground">
            <Terminal size={14} />
            <span>Software Engineer • Fullstack</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-foreground">
            Arquitectura web y<br />
            <span className="text-muted-foreground">producto real.</span>
          </h1>
          <div className="flex items-center gap-3 text-sm font-mono text-muted-foreground pt-1">
            <span className="flex items-center gap-1.5 text-foreground"><Code2 size={16}/> React</span>
            <span>/</span>
            <span className="flex items-center gap-1.5 text-foreground"><Server size={16}/> Node.js</span>
            <span>/</span>
            <span className="flex items-center gap-1.5 text-foreground"><Database size={16}/> MongoDB</span>
          </div>
        </div>

        <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
          Desarrollo aplicaciones full-stack complejas. Diseño arquitecturas escalables, APIs REST eficientes y cuadros de mando interactivos con React y Tailwind.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#proyectos"
            className="flex items-center gap-2 bg-foreground text-background px-5 py-2.5 font-medium text-sm hover:bg-foreground/90 transition-colors"
          >
            Ver case studies
            <ArrowRight size={16} />
          </a>
          <a
            href="https://github.com/sergiomtzs96"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-border bg-background px-5 py-2.5 font-medium text-sm hover:bg-secondary transition-colors"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full lg:w-1/2 grid grid-cols-2 gap-3"
      >
        <div className="col-span-2 border border-border bg-card flex flex-col h-auto">
          <div className="border-b border-border p-3 flex justify-between items-center bg-secondary/30">
            <div className="flex items-center gap-2 text-xs font-medium text-foreground">
              <Users size={14} className="text-muted-foreground" />
              Users Database
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Search size={14} />
              <Plus size={14} />
            </div>
          </div>
          <table className="w-full text-xs font-mono text-left border-collapse">
            <thead className="text-muted-foreground bg-secondary/10">
              <tr>
                <th className="font-normal px-4 py-2.5 border-b border-border">ID</th>
                <th className="font-normal px-4 py-2.5 border-b border-border">Role</th>
                <th className="font-normal px-4 py-2.5 border-b border-border">Status</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              <tr className="border-b border-border/50 last:border-b-0">
                <td className="px-4 py-2.5">usr_892nf8</td>
                <td className="px-4 py-2.5">Admin</td>
                <td className="px-4 py-2.5"><span className="text-emerald-400">Active</span></td>
              </tr>
              <tr>
                <td className="px-4 py-2.5">usr_94m2kd</td>
                <td className="px-4 py-2.5">Editor</td>
                <td className="px-4 py-2.5"><span className="text-amber-400">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-span-1 border border-border bg-card p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-muted-foreground">API Traffic</span>
            <Activity size={14} className="text-emerald-400" />
          </div>
          <div className="h-12 w-full min-w-0">
            <ResponsiveContainer width="100%" height={48}>
              <AreaChart data={mockData} margin={{ top: 2, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-ring)" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="var(--color-ring)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="requests" stroke="var(--color-ring)" fill="url(#colorRequests)" strokeWidth={1.5} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-1 border border-border bg-card p-4 overflow-hidden relative">
          <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border/50">
            <Lock size={14} className="text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">auth.jwt.ts</span>
          </div>
          <pre className="text-[10px] font-mono text-muted-foreground leading-[1.6] whitespace-pre">
<span className="text-blue-400">const</span> <span className="text-yellow-200">verify</span> = (req) =&gt; {'{\n'}{'  '}const t = req.<span className="text-blue-300">headers</span>.auth;{'\n'}{'  '}<span className="text-purple-400">if</span> (!t) <span className="text-purple-400">throw</span> 401;{'\n'}{'  '}req.user = jwt.<span className="text-yellow-200">verify</span>(t);{'\n'}{'  '}<span className="text-yellow-200">next</span>();{'\n'}{'}'};
          </pre>
        </div>
      </motion.div>
    </section>
  );
}
