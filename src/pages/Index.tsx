import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Cpu, Globe, Leaf, Zap, Lock, BarChart3 } from "lucide-react";
import AnimatedGridBackground from "@/components/AnimatedGridBackground";
import Navbar from "@/components/Navbar";
import PillarCard from "@/components/PillarCard";
import SystemVisualization from "@/components/SystemVisualization";
import GlassCard from "@/components/GlassCard";
import { useLanguage } from "@/i18n/LanguageContext";
import safemanLogo from "@/assets/safeman-logo.png";

const Index = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Cpu,
      title: t("pillar.process.title"),
      subtitle: t("pillar.process.subtitle"),
      description: t("pillar.process.desc"),
      features: [t("feat.permit"), t("feat.risk"), t("feat.incident"), t("feat.audit")],
      glowColor: "blue" as const,
    },
    {
      icon: Shield,
      title: t("pillar.physical.title"),
      subtitle: t("pillar.physical.subtitle"),
      description: t("pillar.physical.desc"),
      features: [t("feat.equipment"), t("feat.maintenance"), t("feat.training"), t("feat.investigations")],
      glowColor: "green" as const,
    },
    {
      icon: Globe,
      title: t("pillar.network.title"),
      subtitle: t("pillar.network.subtitle"),
      description: t("pillar.network.desc"),
      features: [t("feat.threat"), t("feat.isolation"), t("feat.securityEvents"), t("feat.infraAudit")],
      glowColor: "violet" as const,
    },
    {
      icon: Leaf,
      title: t("pillar.env.title"),
      subtitle: t("pillar.env.subtitle"),
      description: t("pillar.env.desc"),
      features: [t("feat.emissions"), t("feat.carbon"), t("feat.waste"), t("feat.compliance")],
      glowColor: "orange" as const,
    },
  ];

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
            <div className="mb-8 flex justify-center">
              <img src={safemanLogo} alt="Safe-Man" className="h-16 md:h-20 w-auto" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {t("hero.title1")}{" "}
              <span className="text-gradient-blue">{t("hero.titleHighlight")}</span>{" "}
              {t("hero.title2")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-3 px-8 py-4 font-display text-sm font-bold tracking-widest uppercase bg-primary/10 border border-primary/40 rounded-lg text-primary hover:bg-primary/20 transition-all duration-500 glow-border-blue group"
            >
              {t("hero.cta")}
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
                {t("system.title1")}{" "}
                <span className="text-gradient-green">{t("system.titleHighlight")}</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("system.desc")}
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Zap, text: t("system.realtime") },
                  { icon: Lock, text: t("system.security") },
                  { icon: BarChart3, text: t("system.analytics") },
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
              {t("pillars.title1")} <span className="text-gradient-blue">{t("pillars.titleHighlight")}</span>
            </h2>
            <p className="text-muted-foreground font-mono text-sm tracking-wider">
              {t("pillars.subtitle")}
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
              {t("cta.title")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              {t("cta.desc")}
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-3 px-8 py-4 font-display text-sm font-bold tracking-widest uppercase bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 group"
            >
              {t("cta.button")}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8 px-4">
        <div className="container flex items-center justify-between">
          <img src={safemanLogo} alt="Safe-Man" className="h-6 w-auto" />
          <p className="text-xs font-mono text-muted-foreground">
            {t("footer.copyright")}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
