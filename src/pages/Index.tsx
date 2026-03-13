import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Cpu, Globe, Leaf, Zap, Lock, BarChart3 } from "lucide-react";
import AnimatedGridBackground from "@/components/AnimatedGridBackground";
import Navbar from "@/components/Navbar";
import SafeManLogo from "@/components/SafeManLogo";
import PillarCard from "@/components/PillarCard";
import SystemVisualization from "@/components/SystemVisualization";
import GlassCard from "@/components/GlassCard";

const pillars = [
  {
    icon: Cpu,
    title: "Process Safety",
    subtitle: "Industrial Operations",
    description: "Intelligent workflow automation for permits, risk assessments, and incident reporting across all industrial operations.",
    features: ["Permit-to-work systems", "Risk assessments", "Incident reporting", "Audit trails"],
    glowColor: "blue" as const,
  },
  {
    icon: Shield,
    title: "Physical Safety",
    subtitle: "Workplace Protection",
    description: "Comprehensive HSE management covering equipment inspections, maintenance monitoring, and safety training.",
    features: ["Equipment inspections", "Maintenance tracking", "Safety training", "Investigations"],
    glowColor: "green" as const,
  },
  {
    icon: Globe,
    title: "Network Safety",
    subtitle: "Cyber Defense",
    description: "Enterprise-grade cybersecurity with real-time threat monitoring, data isolation, and security event intelligence.",
    features: ["Threat monitoring", "Data isolation", "Security events", "Infrastructure audit"],
    glowColor: "violet" as const,
  },
  {
    icon: Leaf,
    title: "Environmental Safety",
    subtitle: "Sustainability Intelligence",
    description: "Climate-aware monitoring for emissions, waste management, and environmental compliance reporting.",
    features: ["Emissions tracking", "Carbon metrics", "Waste management", "Compliance reports"],
    glowColor: "orange" as const,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedGridBackground />
      <Navbar />

      {/* Hero */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="container max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <SafeManLogo size="lg" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              The Future of{" "}
              <span className="text-gradient-blue">Safety</span>{" "}
              Management
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed">
              Safe-Man unifies industrial safety, cybersecurity, and environmental intelligence into a single command platform.
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-3 px-8 py-4 font-display text-sm font-bold tracking-widest uppercase bg-primary/10 border border-primary/40 rounded-lg text-primary hover:bg-primary/20 transition-all duration-500 glow-border-blue group"
            >
              Enter the Safety Command Center
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* System Visualization */}
      <section className="relative z-10 py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl font-bold mb-4">
                One Platform.{" "}
                <span className="text-gradient-green">Four Domains.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A central safety intelligence engine connected to four integrated safety modules, 
                replacing fragmented tools with unified command and control.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Zap, text: "Real-time Intelligence" },
                  { icon: Lock, text: "Enterprise Security" },
                  { icon: BarChart3, text: "Advanced Analytics" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 glass-panel px-4 py-2 text-xs font-mono text-muted-foreground">
                    <item.icon className="w-3.5 h-3.5 text-primary" />
                    {item.text}
                  </div>
                ))}
              </div>
            </motion.div>
            <SystemVisualization />
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="relative z-10 py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl font-bold mb-3">
              Core Safety <span className="text-gradient-blue">Pillars</span>
            </h2>
            <p className="text-muted-foreground font-mono text-sm tracking-wider">
              FOUR INTEGRATED DOMAINS • ONE UNIFIED PLATFORM
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <PillarCard key={p.title} {...p} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <GlassCard glowColor="blue" className="p-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Safety Operations?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Deploy Safe-Man across your organization and gain unified visibility into every safety dimension.
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-3 px-8 py-4 font-display text-sm font-bold tracking-widest uppercase bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 group"
            >
              Launch Command Center
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8 px-4">
        <div className="container flex items-center justify-between">
          <SafeManLogo size="sm" />
          <p className="text-xs font-mono text-muted-foreground">
            © 2026 SAFE-MAN • SAFETY MANAGEMENT PLATFORM
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
