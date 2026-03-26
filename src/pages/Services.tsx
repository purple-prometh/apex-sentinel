import { motion } from "framer-motion";
import {
  Wrench,
  HeadphonesIcon,
  Rocket,
  ShieldCheck,
  Settings,
  BarChart3,
  CloudCog,
  Users,
  FileSearch,
  Cpu,
  Globe,
  Leaf,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import AnimatedGridBackground from "@/components/AnimatedGridBackground";
import Navbar from "@/components/Navbar";
import GlassCard from "@/components/GlassCard";
import { useLanguage } from "@/i18n/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const coreServices = [
    {
      icon: Rocket,
      title: t("services.deploy.title"),
      desc: t("services.deploy.desc"),
      features: [t("services.deploy.f1"), t("services.deploy.f2"), t("services.deploy.f3")],
      glowColor: "blue" as const,
    },
    {
      icon: Settings,
      title: t("services.integration.title"),
      desc: t("services.integration.desc"),
      features: [t("services.integration.f1"), t("services.integration.f2"), t("services.integration.f3")],
      glowColor: "green" as const,
    },
    {
      icon: HeadphonesIcon,
      title: t("services.support.title"),
      desc: t("services.support.desc"),
      features: [t("services.support.f1"), t("services.support.f2"), t("services.support.f3")],
      glowColor: "violet" as const,
    },
    {
      icon: BarChart3,
      title: t("services.analytics.title"),
      desc: t("services.analytics.desc"),
      features: [t("services.analytics.f1"), t("services.analytics.f2"), t("services.analytics.f3")],
      glowColor: "orange" as const,
    },
  ];

  const specializedServices = [
    {
      icon: ShieldCheck,
      title: t("services.audit.title"),
      desc: t("services.audit.desc"),
      glowColor: "blue" as const,
    },
    {
      icon: CloudCog,
      title: t("services.cloud.title"),
      desc: t("services.cloud.desc"),
      glowColor: "green" as const,
    },
    {
      icon: Users,
      title: t("services.consulting.title"),
      desc: t("services.consulting.desc"),
      glowColor: "violet" as const,
    },
    {
      icon: FileSearch,
      title: t("services.compliance.title"),
      desc: t("services.compliance.desc"),
      glowColor: "orange" as const,
    },
    {
      icon: Wrench,
      title: t("services.custom.title"),
      desc: t("services.custom.desc"),
      glowColor: "blue" as const,
    },
    {
      icon: Cpu,
      title: t("services.ai.title"),
      desc: t("services.ai.desc"),
      glowColor: "violet" as const,
    },
  ];

  const industryDomains = [
    { icon: Cpu, label: t("services.ind.oil"), glowColor: "blue" as const },
    { icon: Globe, label: t("services.ind.manufacturing"), glowColor: "green" as const },
    { icon: Leaf, label: t("services.ind.energy"), glowColor: "orange" as const },
    { icon: ShieldCheck, label: t("services.ind.construction"), glowColor: "violet" as const },
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedGridBackground />
      <Navbar />

      <main className="relative z-10 container pt-24 pb-20 space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            {t("services.title1")}{" "}
            <span className="text-primary glow-text-blue">{t("services.titleHighlight")}</span>
          </h1>
          <p className="text-sm font-mono tracking-[0.3em] uppercase text-muted-foreground">
            {t("services.subtitle")}
          </p>
          <p className="max-w-2xl mx-auto text-sm text-muted-foreground leading-relaxed">
            {t("services.intro")}
          </p>
        </motion.div>

        {/* Core Services */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Rocket className="w-4 h-4 text-primary" />
            <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-muted-foreground">
              {t("services.coreServices")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {coreServices.map((service, i) => (
              <GlassCard key={i} glowColor={service.glowColor} delay={i * 0.1}>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded border border-border/50 bg-muted/30">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-display font-bold">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neon-green flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Specialized Services */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Wrench className="w-4 h-4 text-neon-green" />
            <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-muted-foreground">
              {t("services.specialized")}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specializedServices.map((service, i) => (
              <GlassCard key={i} glowColor={service.glowColor} delay={i * 0.08}>
                <div className="p-5 space-y-3">
                  <service.icon className="w-5 h-5 text-muted-foreground" />
                  <h3 className="text-sm font-display font-semibold">{service.title}</h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-neon-violet" />
            <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-muted-foreground">
              {t("services.industries")}
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {industryDomains.map((ind, i) => (
              <GlassCard key={i} glowColor={ind.glowColor} delay={i * 0.1}>
                <div className="p-5 flex flex-col items-center gap-3 text-center">
                  <ind.icon className="w-6 h-6 text-muted-foreground" />
                  <p className="text-xs font-mono uppercase tracking-wider">{ind.label}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* CTA */}
        <GlassCard glowColor="blue">
          <div className="p-8 md:p-12 text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-display font-bold">
              {t("services.cta.title")}
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              {t("services.cta.desc")}
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 text-sm font-display font-semibold tracking-wider uppercase bg-primary/10 border border-primary/30 rounded text-primary hover:bg-primary/20 transition-all duration-300 glow-border-blue">
              {t("services.cta.button")}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </GlassCard>
      </main>

      <footer className="relative z-10 border-t border-border/30 py-8">
        <p className="text-center text-xs font-mono tracking-[0.3em] text-muted-foreground">
          {t("footer.copyright")}
        </p>
      </footer>
    </div>
  );
};

export default Services;
