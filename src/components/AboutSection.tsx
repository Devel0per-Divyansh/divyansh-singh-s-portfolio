import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Video, Brain } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: <Code className="w-5 h-5" />,
      text: "Understanding systems deeply, using Vanilla JavaScript before frameworks",
    },
    {
      icon: <Palette className="w-5 h-5" />,
      text: "Visual design, UI/UX, and graphic design",
    },
    {
      icon: <Video className="w-5 h-5" />,
      text: "Video editing and creative content production",
    },
    {
      icon: <Brain className="w-5 h-5" />,
      text: "Blending technical thinking with storytelling",
    },
  ];

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="font-serif italic text-gradient">Me</span>
            </h2>
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-5 gap-8">
            {/* Left - Description */}
            <div className="md:col-span-3 space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a CSE undergraduate at <span className="text-foreground">NIT Jalandhar</span> who likes turning ideas into usable products.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I focus on clarity, logic, and execution — not just writing code, but building things that make sense.
                I prefer understanding systems deeply, often using Vanilla JavaScript before reaching for frameworks.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Alongside development, I actively work with visual design, video editing, and creative writing, 
                blending technical thinking with storytelling and presentation.
              </p>
            </div>

            {/* Right - Highlights */}
            <div className="md:col-span-2 space-y-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex-shrink-0 p-2 rounded-md bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;