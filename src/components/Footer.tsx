import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Logo/Name */}
          <div className="text-lg font-semibold">
            <span className="text-foreground">Divyansh</span>
            <span className="font-serif italic text-gradient"> Singh</span>
          </div>

          {/* Built with love */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {currentYear} Divyansh Singh
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;