import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "green" | "violet" | "orange";
  delay?: number;
}

const glowMap = {
  blue: "hover:shadow-[0_0_30px_hsl(199_89%_48%/0.15)]",
  green: "hover:shadow-[0_0_30px_hsl(142_71%_45%/0.15)]",
  violet: "hover:shadow-[0_0_30px_hsl(270_80%_60%/0.15)]",
  orange: "hover:shadow-[0_0_30px_hsl(25_95%_53%/0.15)]",
};

const borderGlow = {
  blue: "hover:border-neon-blue/30",
  green: "hover:border-neon-green/30",
  violet: "hover:border-neon-violet/30",
  orange: "hover:border-neon-orange/30",
};

const GlassCard = ({ children, className = "", glowColor = "blue", delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`glass-panel transition-all duration-500 ${glowMap[glowColor]} ${borderGlow[glowColor]} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
