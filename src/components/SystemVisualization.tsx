import { motion } from "framer-motion";
import { Shield, Cpu, Globe, Leaf } from "lucide-react";

const pillars = [
  { icon: Cpu, label: "Process", color: "text-neon-blue", pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
  { icon: Shield, label: "Physical", color: "text-neon-green", pos: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2" },
  { icon: Globe, label: "Network", color: "text-neon-violet", pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
  { icon: Leaf, label: "Environment", color: "text-neon-orange", pos: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" },
];

const SystemVisualization = () => {
  return (
    <div className="relative w-72 h-72 mx-auto">
      {/* Rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 rounded-full border border-primary/20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-10 rounded-full border border-neon-green/15"
      />

      {/* Center core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-24 h-24 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center glow-border-blue"
        >
          <span className="font-display text-xs font-bold text-primary tracking-wider">CORE</span>
        </motion.div>
      </div>

      {/* Pillar nodes */}
      {pillars.map((p, i) => (
        <motion.div
          key={p.label}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 * i, duration: 0.4 }}
          className={`absolute ${p.pos} w-16 h-16 rounded-full glass-panel flex flex-col items-center justify-center gap-1`}
        >
          <p.icon className={`w-5 h-5 ${p.color}`} />
          <span className="text-[10px] font-mono text-muted-foreground">{p.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default SystemVisualization;
