import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Calendar, MapPin, ExternalLink } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      role: "Academic Content Intern",
      company: "Leadlly",
      period: "Oct 2024 – Aug 2025",
      location: "Jalandhar, India (Hybrid)",
      points: [
        "Created JEE/NEET exam-relevant questions and structured academic content",
        "Supported content planning, review workflows, and quality coordination",
      ],
      link: "",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      role: "Campus Ambassador",
      company: "Physics Wallah",
      period: "2025",
      location: "NIT Jalandhar",
      points: [
        "Led peer engagement initiatives and increased student participation",
        "Recognized for strong communication, leadership, and consistent execution",
      ],
      link: "https://drive.google.com/file/d/1QrZq5D0cW00zk6oeaScqjMttS6s1_4z5/view",
    },
  ];

  const CardContent = ({ exp, showExternalLink = false }: { exp: typeof experiences[0]; showExternalLink?: boolean }) => (
    <div className="flex flex-col md:flex-row md:items-start gap-4">
      {/* Icon */}
      <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 text-primary w-fit">
        {exp.icon}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
            <p className="text-primary font-medium">{exp.company}</p>
          </div>
          <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {exp.period}
              {showExternalLink && <ExternalLink className="w-3 h-3 ml-1" />}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {exp.location}
            </span>
          </div>
        </div>

        <ul className="space-y-2">
          {exp.points.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section id="experience" className="section-padding" ref={ref}>
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
              Achievements & <span className="font-serif italic text-gradient">Experience</span>
            </h2>
          </div>
        </motion.div>

        {/* Experience cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {exp.link ? (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <CardContent exp={exp} showExternalLink />
                </a>
              ) : (
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                  <CardContent exp={exp} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
