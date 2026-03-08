import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Download } from "lucide-react";

const contacts = [
  { icon: <Mail size={16} />, label: "sreelakshmi.ai2021@gmail.com", href: "mailto:sreelakshmi.ai2021@gmail.com" },
  { icon: <Phone size={16} />, label: "+91 8129933694", href: "tel:+918129933694" },
  { icon: <Linkedin size={16} />, label: "LinkedIn", href: "https://linkedin.com/in/msreelakshmi" },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-10 md:py-14" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4"
        >
          Let's build something <span className="text-gradient-teal">real.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto"
        >
          Open to full-time AI/ML roles, freelance AI projects, and training collaborations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full glass text-foreground hover:text-primary hover:glow-teal transition-all duration-300 text-sm"
            >
              {c.icon} {c.label}
            </a>
          ))}
        </motion.div>

        <a
          href="/Sreelakshmi_M_Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium text-lg hover:opacity-90 transition-opacity glow-teal-strong"
        >
          <Download size={20} /> Download Resume
        </a>
      </div>
    </section>
  );
};

export default Contact;
