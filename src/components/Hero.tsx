import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, Phone } from "lucide-react";
import avatar3d from "@/assets/avatar-3d.png";

const titles = [
  "I build AI systems that work in production.",
  "NLP · Audio AI · Real-time Dashboards",
  "I train the next gen of data engineers.",
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const text = titles[titleIndex];
    if (typing) {
      if (displayed.length < text.length) {
        const t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), 35);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 20);
        return () => clearTimeout(t);
      } else {
        setTitleIndex((i) => (i + 1) % titles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, titleIndex]);

  const socials = [
    { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/msreelakshmi", label: "LinkedIn" },
    { icon: <Mail size={18} />, href: "mailto:sreelakshmi.ai2021@gmail.com", label: "Email" },
    { icon: <Phone size={18} />, href: "https://wa.me/918129933694", label: "WhatsApp" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-gradient-shift opacity-30"
          style={{
            background: "radial-gradient(ellipse at 20% 50%, hsl(166 100% 48% / 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, hsl(42 100% 70% / 0.05) 0%, transparent 50%), radial-gradient(ellipse at 60% 80%, hsl(166 80% 60% / 0.06) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-medium mb-4">
              AI Engineer · NLP · Data Science
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground leading-tight mb-4">
              Hi, I'm{" "}
              <span className="text-gradient-teal">Sreelakshmi M.</span>
            </h1>
            <div className="h-14 sm:h-10 mb-6">
              <p className="text-lg sm:text-xl text-muted-foreground font-body">
                {displayed}
                <span className="cursor-blink text-primary">|</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                View My Work <ArrowDown size={16} />
              </a>
              <a
                href="/Sreelakshmi_M_Resume.pdf"
                download
                className="px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-colors flex items-center gap-2"
              >
                Download Resume <ArrowDown size={16} />
              </a>
            </div>

            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-teal transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* 3D Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/12 blur-3xl scale-90" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-primary/20 blur-2xl rounded-full" />
              <img
                src={avatar3d}
                alt="Sreelakshmi M — AI Engineer"
                className="relative w-[280px] sm:w-[340px] lg:w-[400px] object-contain animate-float drop-shadow-[0_15px_30px_hsl(166_100%_48%/0.15)]"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <ArrowDown size={20} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
