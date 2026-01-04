import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MindsetSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const principles = [
    { left: "Simplicity", right: "Flash", symbol: ">" },
    { left: "Systems", right: "Motivation", symbol: ">" },
    { left: "Output", right: "Talking", symbol: ">" },
  ];

  const statements = [
    "I build before I explain",
    "I think in flows, not pages",
    "I ship, then iterate",
  ];

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* Section header */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Builder <span className="font-serif italic text-gradient">Mindset</span>
            </h2>
          </div>

          {/* Principles */}
          <div className="space-y-4 mb-12">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-lg md:text-xl"
              >
                <span className="font-semibold text-foreground text-right">{principle.left}</span>
                <span className="text-primary font-bold text-2xl text-center">{principle.symbol}</span>
                <span className="text-muted-foreground text-left">{principle.right}</span>
              </motion.div>
            ))}
          </div>

          {/* Divider - aligned with > symbols */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>

          {/* Statements */}
          <div className="grid md:grid-cols-3 gap-6">
            {statements.map((statement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border text-center hover:border-primary/50 transition-colors"
              >
                <p className="text-foreground font-medium">{statement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MindsetSection;