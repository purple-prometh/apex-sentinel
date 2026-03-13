import { motion } from "framer-motion";

interface SafeManLogoProps {
  size?: "sm" | "md" | "lg";
}

const SafeManLogo = ({ size = "md" }: SafeManLogoProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-5xl",
  };

  return (
    <motion.div
      className="flex items-center gap-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={`font-display font-bold tracking-wider ${sizeClasses[size]}`}>
        <span className="text-primary glow-text-blue">SAFE</span>
        <span className="text-neon-orange mx-0.5">-</span>
        <span className="text-foreground">MAN</span>
      </div>
      {size !== "sm" && (
        <div className="ml-2 h-6 w-px bg-border" />
      )}
      {size !== "sm" && (
        <span className="text-muted-foreground text-xs font-mono tracking-widest uppercase ml-2">
          Safety Management
        </span>
      )}
    </motion.div>
  );
};

export default SafeManLogo;
