import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Instagram, Send } from "lucide-react";
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
      icon: <Github className="w-6 h-6" />,
      label: "Github",
      value: "github.com/Devel0per-Divyansh",
      href: "https://github.com/Devel0per-Divyansh",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      value: "instagram.com/divyanshsinghrajpoot.in",
      href: "https://www.instagram.com/divyanshsinghrajpoot.in",
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to take <span className="font-serif italic text-gradient">your</span> digital<br />
              presence to the next level?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Reach out to me today and let's discuss how I can help you achieve your goals.
            </p>
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-medium rounded-full"
              asChild
            >
              <a href="mailto:divyanshsinghnitj24@gmail.com">
                Let's get in touch
                <Send className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
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
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {contact.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{contact.label}</h3>
                <p className="text-sm text-muted-foreground break-all">{contact.value}</p>
              </motion.a>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;