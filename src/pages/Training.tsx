import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Clock,
  CheckCircle2,
  PlayCircle,
  FileText,
  TrendingUp,
  Calendar,
  Shield,
  Cpu,
  Globe,
  Leaf,
} from "lucide-react";
import AnimatedGridBackground from "@/components/AnimatedGridBackground";
import Navbar from "@/components/Navbar";
import GlassCard from "@/components/GlassCard";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/i18n/LanguageContext";

const Training = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, label: t("training.enrolled"), value: "2,847", trend: "+12%", glowColor: "blue" as const },
    { icon: Award, label: t("training.certified"), value: "1,934", trend: "+8%", glowColor: "green" as const },
    { icon: BookOpen, label: t("training.courses"), value: "156", trend: "+5", glowColor: "violet" as const },
    { icon: Clock, label: t("training.hours"), value: "18,420", trend: "+340h", glowColor: "orange" as const },
  ];

  const courses = [
    {
      title: t("training.course.hazmat"),
      category: t("training.cat.process"),
      icon: Cpu,
      progress: 78,
      enrolled: 342,
      duration: "4h 30m",
      glowColor: "blue" as const,
      status: "active",
    },
    {
      title: t("training.course.ppe"),
      category: t("training.cat.physical"),
      icon: Shield,
      progress: 92,
      enrolled: 518,
      duration: "2h 15m",
      glowColor: "green" as const,
      status: "active",
    },
    {
      title: t("training.course.cyber"),
      category: t("training.cat.network"),
      icon: Globe,
      progress: 45,
      enrolled: 189,
      duration: "6h 00m",
      glowColor: "violet" as const,
      status: "active",
    },
    {
      title: t("training.course.emissions"),
      category: t("training.cat.environment"),
      icon: Leaf,
      progress: 61,
      enrolled: 274,
      duration: "3h 45m",
      glowColor: "orange" as const,
      status: "active",
    },
    {
      title: t("training.course.emergency"),
      category: t("training.cat.physical"),
      icon: Shield,
      progress: 100,
      enrolled: 612,
      duration: "1h 30m",
      glowColor: "green" as const,
      status: "completed",
    },
    {
      title: t("training.course.lockout"),
      category: t("training.cat.process"),
      icon: Cpu,
      progress: 33,
      enrolled: 156,
      duration: "5h 00m",
      glowColor: "blue" as const,
      status: "active",
    },
  ];

  const upcomingSessions = [
    { title: t("training.session.fireDrill"), date: "2026-04-02", attendees: 85, type: "live" },
    { title: t("training.session.isoAudit"), date: "2026-04-05", attendees: 32, type: "virtual" },
    { title: t("training.session.firstAid"), date: "2026-04-08", attendees: 48, type: "live" },
    { title: t("training.session.dataPrivacy"), date: "2026-04-10", attendees: 120, type: "virtual" },
  ];

  const certifications = [
    { name: t("training.cert.osha"), holders: 1245, expiringSoon: 23, glowColor: "blue" as const },
    { name: t("training.cert.iso45001"), holders: 876, expiringSoon: 12, glowColor: "green" as const },
    { name: t("training.cert.nist"), holders: 432, expiringSoon: 8, glowColor: "violet" as const },
    { name: t("training.cert.iso14001"), holders: 654, expiringSoon: 15, glowColor: "orange" as const },
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedGridBackground />
      <Navbar />

      <main className="relative z-10 container pt-24 pb-20 space-y-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            {t("training.title1")}{" "}
            <span className="text-primary glow-text-blue">{t("training.titleHighlight")}</span>
          </h1>
          <p className="text-sm font-mono tracking-[0.3em] uppercase text-muted-foreground">
            {t("training.subtitle")}
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <GlassCard key={i} glowColor={stat.glowColor} delay={i * 0.1}>
              <div className="p-5 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <stat.icon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-xs font-mono text-neon-green">{stat.trend}</span>
                </div>
                <p className="text-2xl font-display font-bold">{stat.value}</p>
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Course Catalog — 2 cols */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-muted-foreground">
                {t("training.activeCourses")}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {courses.map((course, i) => (
                <GlassCard key={i} glowColor={course.glowColor} delay={i * 0.08}>
                  <div className="p-5 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <course.icon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                          {course.category}
                        </span>
                      </div>
                      {course.status === "completed" ? (
                        <CheckCircle2 className="w-4 h-4 text-neon-green" />
                      ) : (
                        <PlayCircle className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <h3 className="text-sm font-display font-semibold leading-tight">
                      {course.title}
                    </h3>
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono text-muted-foreground">
                          {t("training.progress")}
                        </span>
                        <span className="text-[10px] font-mono text-primary">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-1.5 bg-muted" />
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                      <span>
                        <Users className="w-3 h-3 inline mr-1" />
                        {course.enrolled}
                      </span>
                      <span>
                        <Clock className="w-3 h-3 inline mr-1" />
                        {course.duration}
                      </span>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Sessions */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-muted-foreground">
                  {t("training.upcoming")}
                </h2>
              </div>
              <GlassCard glowColor="blue">
                <div className="p-4 space-y-3">
                  {upcomingSessions.map((session, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2 border-b border-border/30 last:border-0"
                    >
                      <div className="space-y-1">
                        <p className="text-xs font-display font-semibold">{session.title}</p>
                        <p className="text-[10px] font-mono text-muted-foreground">{session.date}</p>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="text-[10px] font-mono text-muted-foreground">
                          <Users className="w-3 h-3 inline mr-0.5" />
                          {session.attendees}
                        </p>
                        <span
                          className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded ${
                            session.type === "live"
                              ? "bg-neon-green/10 text-neon-green border border-neon-green/20"
                              : "bg-primary/10 text-primary border border-primary/20"
                          }`}
                        >
                          {session.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-neon-green" />
                <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-muted-foreground">
                  {t("training.certifications")}
                </h2>
              </div>
              <GlassCard glowColor="green">
                <div className="p-4 space-y-3">
                  {certifications.map((cert, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2 border-b border-border/30 last:border-0"
                    >
                      <div>
                        <p className="text-xs font-display font-semibold">{cert.name}</p>
                        <p className="text-[10px] font-mono text-muted-foreground">
                          {cert.holders} {t("training.holders")}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono text-neon-orange">
                          {cert.expiringSoon} {t("training.expiring")}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Quick Actions */}
            <GlassCard glowColor="violet">
              <div className="p-4 space-y-3">
                <h3 className="text-sm font-mono tracking-[0.2em] uppercase text-muted-foreground">
                  {t("training.quickActions")}
                </h3>
                {[
                  { icon: FileText, label: t("training.action.assign") },
                  { icon: TrendingUp, label: t("training.action.report") },
                  { icon: GraduationCap, label: t("training.action.create") },
                ].map((action, i) => (
                  <button
                    key={i}
                    className="w-full flex items-center gap-3 px-3 py-2.5 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground border border-border/30 rounded hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    <action.icon className="w-4 h-4" />
                    {action.label}
                  </button>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/30 py-8">
        <p className="text-center text-xs font-mono tracking-[0.3em] text-muted-foreground">
          {t("footer.copyright")}
        </p>
      </footer>
    </div>
  );
};

export default Training;
