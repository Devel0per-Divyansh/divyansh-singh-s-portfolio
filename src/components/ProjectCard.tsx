import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: string[];
  liveUrl?: string;
  index: number;
}

const ProjectCard = ({
  emoji,
  title,
  subtitle,
  description,
  features,
  techStack,
  liveUrl,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover-lift"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{emoji}</span>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">{title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
          {liveUrl && (
            <Button
              variant="ghost"
              size="icon"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
          )}
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {features.map((feature, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="bg-secondary/50 text-muted-foreground hover:bg-primary/20 hover:text-foreground transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Live Demo Button */}
        {liveUrl && (
          <div className="mt-6 pt-6 border-t border-border">
            <Button
              variant="outline"
              className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;