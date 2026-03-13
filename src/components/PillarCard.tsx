import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import GlassCard from "./GlassCard";

interface PillarCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  glowColor: "blue" | "green" | "violet" | "orange";
  delay: number;
}

const colorMap = {
  blue: "text-neon-blue",
  green: "text-neon-green",
  violet: "text-neon-violet",
  orange: "text-neon-orange",
};

const bgMap = {
  blue: "bg-neon-blue/10",
  green: "bg-neon-green/10",
  violet: "bg-neon-violet/10",
  orange: "bg-neon-orange/10",
};

const PillarCard = ({ icon: Icon, title, subtitle, description, features, glowColor, delay }: PillarCardProps) => {
  return (
    <GlassCard glowColor={glowColor} delay={delay} className="p-6 flex flex-col h-full">
      <div className={`w-12 h-12 rounded-lg ${bgMap[glowColor]} flex items-center justify-center mb-4`}>
        <Icon className={`w-6 h-6 ${colorMap[glowColor]}`} />
      </div>
      <h3 className={`font-display text-lg font-bold mb-1 ${colorMap[glowColor]}`}>
        {title}
      </h3>
      <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-3">
        {subtitle}
      </p>
      <p className="text-sm text-secondary-foreground/80 mb-4 leading-relaxed">
        {description}
      </p>
      <div className="mt-auto space-y-2">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.1 * i }}
            className="flex items-center gap-2 text-xs font-mono text-muted-foreground"
          >
            <div className={`w-1.5 h-1.5 rounded-full ${bgMap[glowColor]} ${colorMap[glowColor]}`} />
            {f}
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
};

export default PillarCard;
