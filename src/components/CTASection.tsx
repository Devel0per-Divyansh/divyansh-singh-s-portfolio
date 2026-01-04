import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("divyanshsinghnitj24@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-narrow flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-primary/60 via-primary/20 to-accent/60 hover:from-primary hover:via-primary/40 hover:to-accent transition-all duration-500 w-full max-w-xl"
        >
          {/* Outer glow */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-accent/30 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Inner card */}
          <div className="relative p-8 md:p-10 rounded-2xl bg-card text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
              Do you want to start a <span className="font-serif italic text-gradient">project</span> together?
            </h3>
            <Button
              variant="outline"
              size="lg"
              onClick={handleCopyEmail}
              className="border-border/50 bg-secondary/50 hover:bg-secondary hover:border-primary/50 transition-all duration-300"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy my email address
                </>
              )}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
