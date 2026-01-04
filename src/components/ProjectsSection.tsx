import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Reach Together",
    subtitle: "Never Travel Alone",
    description:
      "A product-focused prototype solving real student safety & travel concerns. Connects people from the same organization traveling on identical routes.",
    features: [
      "Organization-only email verification",
      "Journey & PNR-based matching",
      "Match percentage calculation",
      "Women-only travel options",
      "Luggage help & cab sharing",
      "Built-in messaging flow",
      "Dark / Light mode",
      "Fully responsive UI",
    ],
    techStack: ["HTML5", "CSS3", "Vanilla JavaScript", "No frameworks"],
    liveUrl: "#",
  },
  {
    title: "NIT Jalandhar Research Dashboard",
    subtitle: "A data-driven institutional dashboard",
    description:
      "An interactive web platform showcasing research analytics, faculty expertise, and student achievements at NIT Jalandhar.",
    features: [
      "Research analytics & metrics",
      "Engineering domain explorer",
      "Faculty profiles",
      "Top student achievements",
      "Real-time search & filtering",
      "Responsive, accessible UI",
    ],
    techStack: ["HTML5", "CSS3", "Vanilla JavaScript", "SPA architecture"],
    liveUrl: "#",
  },
  {
    title: "Relative Grade Calculator",
    subtitle: "Late-night mini practice turned into a real academic tool",
    description:
      "A percentile-based grading system that replaces rigid cutoffs with fair distribution logic. Upload marksheets and get automatic grade distribution.",
    features: [
      "Upload Excel / CSV marksheets",
      "S grade to toppers (top percentile)",
      "Auto-splits remaining into A–E",
      "Below threshold → U grade",
      "Visual grade distribution (SVG)",
      "Excel export + Dark mode",
    ],
    techStack: ["HTML", "CSS", "Vanilla JavaScript", "SheetJS", "SVG"],
    liveUrl: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("divyanshsinghnitj24@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="projects" className="section-padding bg-card/30" ref={ref}>
      <div className="container-narrow">
        {/* CTA Card with glowing border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-primary/60 via-primary/20 to-accent/60 hover:from-primary hover:via-primary/40 hover:to-accent transition-all duration-500">
            {/* Outer glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-accent/30 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Inner card */}
            <div className="relative p-8 md:p-12 rounded-2xl bg-card">
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
          </div>
        </motion.div>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="mb-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured <span className="font-serif italic text-gradient">Projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Projects built with a focus on understanding fundamentals, clean code, and real-world problem solving.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;