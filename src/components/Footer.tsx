import { Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        Designed &amp; built with intention. © 2026 Sreelakshmi M
      </p>
      <div className="flex items-center gap-4">
        <div className="flex gap-3">
          {[
            { icon: <Linkedin size={14} />, href: "https://linkedin.com/in/msreelakshmi" },
            { icon: <Mail size={14} />, href: "mailto:sreelakshmi.ai2021@gmail.com" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
