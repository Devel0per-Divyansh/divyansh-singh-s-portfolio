import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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
    liveUrl: "https://reach-together.vercel.app/",
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
    liveUrl: "https://nitj-research-dashboard.vercel.app/",
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
    liveUrl: "https://relative-grade.vercel.app/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="projects" className="section-padding bg-card/30" ref={ref}>
      <div className="container-narrow">
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