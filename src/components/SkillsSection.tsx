import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code, 
  Globe, 
  Film, 
  Database, 
  Brain, 
  Users,
  Palette,
  Video,
  Edit3,
  Bot
} from "lucide-react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Programming & Development",
      skills: ["JavaScript", "Python", "C", "C++", "SQL", "HTML5", "CSS3"],
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Front-End & Web",
      skills: ["Responsive UI", "CSS Grid & Flexbox", "SPA Logic", "Dark/Light Mode", "Git & GitHub", "Basic Backend & APIs"],
    },
    {
      icon: <Film className="w-5 h-5" />,
      title: "Editing & Design",
      skills: ["DaVinci Resolve", "CapCut", "Photoshop", "Canva"],
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Data & Libraries",
      skills: ["NumPy", "SheetJS", "SVG Visualizations"],
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Core Strengths",
      skills: ["Analytical Thinking", "Problem Solving", "Logical Reasoning"],
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Professional Skills",
      skills: ["Team Collaboration", "Communication", "Content Structuring", "Documentation"],
    },
  ];

  const whatIDo = [
    // Row 1
    { icon: <Globe className="w-5 h-5" />, title: "Web Development", desc: "Clean frontends (HTML, CSS, JS)" },
    { icon: <Code className="w-5 h-5" />, title: "Programming", desc: "DSA (C++), C, Python" },
    { icon: <Bot className="w-5 h-5" />, title: "AI-assisted workflows", desc: "Faster execution" },
    // Row 2
    { icon: <Palette className="w-5 h-5" />, title: "UI / Graphic Design", desc: "Thumbnails, layouts, visual systems" },
    { icon: <Video className="w-5 h-5" />, title: "Video Editing", desc: "Reels, Shorts, YouTube" },
    { icon: <Edit3 className="w-5 h-5" />, title: "Creative Writing", desc: "Scripts, hooks, narrative content" },
  ];

  return (
    <section id="skills" className="section-padding bg-card/30" ref={ref}>
      <div className="container-narrow">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl">🛠</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Skills & <span className="font-serif italic text-gradient">Expertise</span>
            </h2>
          </div>
        </motion.div>

        {/* Skills grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-foreground text-sm">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground hover:bg-primary/20 hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* What I Actually Do */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-2xl">🧩</span>
            <h3 className="text-2xl md:text-3xl font-bold">
              What I <span className="font-serif italic text-gradient">Actually Do</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {whatIDo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-card-hover transition-all duration-300 text-center"
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-3 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;