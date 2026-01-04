import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Globe, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "divyanshsinghnitj24@gmail.com",
      href: "mailto:divyanshsinghnitj24@gmail.com",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/divyansh-singh-nitj",
      href: "https://linkedin.com/in/divyansh-singh-nitj",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Portfolio",
      value: "divyanshsingh.dev",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-card/30" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Section header */}
          <div className="mb-12">
            <span className="text-4xl mb-4 block">📫</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="font-serif italic text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Have a project in mind or just want to chat? I'm always open to discussing new opportunities.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {contact.icon}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{contact.label}</h3>
                <p className="text-sm text-muted-foreground break-all">{contact.value}</p>
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium glow-effect"
              asChild
            >
              <a href="mailto:divyanshsinghnitj24@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Send Me an Email
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;