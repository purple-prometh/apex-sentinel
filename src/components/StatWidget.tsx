import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatWidgetProps {
  icon: LucideIcon;
  label: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  glowColor?: "blue" | "green" | "violet" | "orange";
  delay?: number;
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

const StatWidget = ({ icon: Icon, label, value, trend, trendUp, glowColor = "blue", delay = 0 }: StatWidgetProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay }}
    className="glass-panel p-5 flex flex-col gap-3"
  >
    <div className="flex items-center justify-between">
      <div className={`w-10 h-10 rounded-lg ${bgMap[glowColor]} flex items-center justify-center`}>
        <Icon className={`w-5 h-5 ${colorMap[glowColor]}`} />
      </div>
      {trend && (
        <span className={`text-xs font-mono ${trendUp ? "text-neon-green" : "text-destructive"}`}>
          {trendUp ? "▲" : "▼"} {trend}
        </span>
      )}
    </div>
    <div>
      <p className="font-display text-2xl font-bold text-foreground">{value}</p>
      <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mt-1">{label}</p>
    </div>
  </motion.div>
);

export default StatWidget;
