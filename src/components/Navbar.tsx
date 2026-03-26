import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import safemanLogo from "@/assets/safeman-logo.png";

const navLinks = [
  { labelKey: "nav.platform", href: "/platform" },
  { labelKey: "nav.dashboard", href: "/dashboard" },
  { labelKey: "nav.training", href: "/training" },
  { labelKey: "nav.modules", href: "/modules" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { lang, toggleLang, t } = useLanguage();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-t-0 border-x-0 rounded-none"
    >
      <div className="container flex items-center justify-between h-16">
        <Link to="/">
          <img src={safemanLogo} alt="Safe-Man" className="h-8 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-mono tracking-wider uppercase transition-colors duration-300 ${
                location.pathname === link.href
                  ? "text-primary glow-text-blue"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(link.labelKey)}
            </Link>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-1.5 rounded border border-border/50 text-xs font-mono tracking-wider text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
          >
            <Languages className="w-3.5 h-3.5" />
            <span className={lang === "en" ? "text-primary" : ""}>EN</span>
            <span className="text-border">/</span>
            <span className={lang === "ka" ? "text-primary" : ""}>KA</span>
          </button>

          <Link
            to="/dashboard"
            className="px-5 py-2 text-sm font-display font-semibold tracking-wider uppercase bg-primary/10 border border-primary/30 rounded text-primary hover:bg-primary/20 transition-all duration-300 glow-border-blue"
          >
            {t("nav.commandCenter")}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-border bg-card/95 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-mono tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {t(link.labelKey)}
              </Link>
            ))}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 text-sm font-mono tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              <Languages className="w-4 h-4" />
              {lang === "en" ? "ქართული" : "English"}
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
