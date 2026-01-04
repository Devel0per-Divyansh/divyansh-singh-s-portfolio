import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: string[];
  liveUrl?: string;
  index: number;
}

const ProjectCard = ({
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
      className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-primary/50 via-primary/20 to-accent/50 hover:from-primary/70 hover:via-primary/30 hover:to-accent/70 transition-all duration-500 hover-lift"
    >
      {/* Inner card */}
      <div className="relative p-6 md:p-8 rounded-2xl bg-card">
        {/* Glow effect */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{title}</h3>
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

        {/* Action Buttons */}
        <div className="mt-6 pt-6 border-t border-border flex gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="flex-1 border-border hover:bg-secondary transition-all"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Read More
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-xl md:text-2xl font-bold">
                  {title}
                </DialogTitle>
                <p className="text-sm text-muted-foreground">{subtitle}</p>
              </DialogHeader>
              
              <div className="mt-4 space-y-6">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">{description}</p>

                {/* Features */}
                <div>
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
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-secondary/50 text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Live Demo Button in Dialog */}
                {liveUrl && (
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </DialogContent>
          </Dialog>

          {liveUrl && (
            <Button
              variant="outline"
              className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;