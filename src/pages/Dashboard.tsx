import { motion } from "framer-motion";
import {
  Shield, Activity, AlertTriangle, Leaf, Globe, Cpu,
  TrendingUp, Users, CheckCircle2, Clock, BarChart3, Zap,
} from "lucide-react";
import AnimatedGridBackground from "@/components/AnimatedGridBackground";
import Navbar from "@/components/Navbar";
import StatWidget from "@/components/StatWidget";
import GlassCard from "@/components/GlassCard";

const alerts = [
  { level: "critical", msg: "Gas leak detected — Facility B3", time: "2m ago", color: "text-destructive" },
  { level: "warning", msg: "Equipment maintenance overdue — Crane #12", time: "15m ago", color: "text-neon-orange" },
  { level: "info", msg: "Cybersecurity scan completed — All clear", time: "1h ago", color: "text-neon-blue" },
  { level: "warning", msg: "Emissions threshold approaching — Plant A", time: "2h ago", color: "text-neon-orange" },
  { level: "info", msg: "Safety training completed — Batch 47", time: "3h ago", color: "text-neon-green" },
];

const levelBg: Record<string, string> = {
  critical: "bg-destructive/10",
  warning: "bg-neon-orange/10",
  info: "bg-neon-blue/10",
};

const safetyModules = [
  { icon: Cpu, label: "Process", score: 94, color: "text-neon-blue", bg: "bg-neon-blue" },
  { icon: Shield, label: "Physical", score: 87, color: "text-neon-green", bg: "bg-neon-green" },
  { icon: Globe, label: "Network", score: 98, color: "text-neon-violet", bg: "bg-neon-violet" },
  { icon: Leaf, label: "Environment", score: 91, color: "text-neon-orange", bg: "bg-neon-orange" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedGridBackground />
      <Navbar />

      <div className="relative z-10 pt-24 pb-12 px-4">
        <div className="container max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-end justify-between"
          >
            <div>
              <h1 className="font-display text-2xl font-bold">
                Command <span className="text-gradient-blue">Dashboard</span>
              </h1>
              <p className="text-xs font-mono text-muted-foreground tracking-wider mt-1">
                SAFETY OPERATIONS CENTER • LIVE
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse-glow" />
              <span className="text-xs font-mono text-neon-green">SYSTEMS ONLINE</span>
            </div>
          </motion.div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatWidget icon={Shield} label="Global Safety Score" value="92.4" trend="2.1%" trendUp glowColor="blue" delay={0} />
            <StatWidget icon={AlertTriangle} label="Active Alerts" value="7" trend="3" trendUp={false} glowColor="orange" delay={0.1} />
            <StatWidget icon={Users} label="Active Personnel" value="2,847" trend="12%" trendUp glowColor="green" delay={0.2} />
            <StatWidget icon={CheckCircle2} label="Compliance Rate" value="96.8%" trend="1.4%" trendUp glowColor="violet" delay={0.3} />
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            {/* Module Health */}
            <GlassCard glowColor="blue" delay={0.2} className="p-6 lg:col-span-1">
              <h3 className="font-display text-sm font-bold mb-5 flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary" />
                Module Health
              </h3>
              <div className="space-y-4">
                {safetyModules.map((m) => (
                  <div key={m.label} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg ${m.bg}/10 flex items-center justify-center`}>
                      <m.icon className={`w-4 h-4 ${m.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-mono text-muted-foreground">{m.label}</span>
                        <span className={`text-xs font-mono font-bold ${m.color}`}>{m.score}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${m.score}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className={`h-full rounded-full ${m.bg}/60`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Alerts Feed */}
            <GlassCard glowColor="orange" delay={0.3} className="p-6 lg:col-span-2">
              <h3 className="font-display text-sm font-bold mb-5 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-neon-orange" />
                Live Alert Feed
              </h3>
              <div className="space-y-3">
                {alerts.map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className={`flex items-center gap-3 p-3 rounded-lg ${levelBg[a.level]} border border-border/30`}
                  >
                    <div className={`w-2 h-2 rounded-full ${a.color === "text-destructive" ? "bg-destructive" : a.color === "text-neon-orange" ? "bg-neon-orange" : "bg-neon-blue"} ${a.level === "critical" ? "animate-pulse-glow" : ""}`} />
                    <p className="text-sm text-foreground/90 flex-1">{a.msg}</p>
                    <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {a.time}
                    </span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Bottom row */}
          <div className="grid md:grid-cols-3 gap-5 mt-5">
            <GlassCard glowColor="green" delay={0.4} className="p-6">
              <h3 className="font-display text-sm font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-neon-green" />
                Safety Trend
              </h3>
              <div className="flex items-end gap-1 h-24">
                {[65, 72, 68, 80, 75, 88, 85, 90, 87, 92, 89, 94].map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${v}%` }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.05 }}
                    className="flex-1 rounded-sm bg-neon-green/30 border-t border-neon-green/60"
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[10px] font-mono text-muted-foreground">JAN</span>
                <span className="text-[10px] font-mono text-muted-foreground">DEC</span>
              </div>
            </GlassCard>

            <GlassCard glowColor="violet" delay={0.5} className="p-6">
              <h3 className="font-display text-sm font-bold mb-4 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-neon-violet" />
                Compliance Status
              </h3>
              <div className="space-y-3">
                {[
                  { label: "ISO 45001", val: 98 },
                  { label: "ISO 14001", val: 94 },
                  { label: "OSHA", val: 100 },
                  { label: "NIST CSF", val: 91 },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-3">
                    <span className="text-xs font-mono text-muted-foreground w-20">{c.label}</span>
                    <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                      <div className="h-full rounded-full bg-neon-violet/50" style={{ width: `${c.val}%` }} />
                    </div>
                    <span className="text-xs font-mono text-neon-violet">{c.val}%</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard glowColor="blue" delay={0.6} className="p-6">
              <h3 className="font-display text-sm font-bold mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Quick Actions
              </h3>
              <div className="space-y-2">
                {[
                  "Report Incident",
                  "Request Permit",
                  "Schedule Inspection",
                  "Run Security Scan",
                ].map((action) => (
                  <button
                    key={action}
                    className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-mono text-muted-foreground bg-muted/30 border border-border/30 hover:border-primary/30 hover:text-primary transition-all duration-300"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
