import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Experion Technologies",
    period: "Jan 2026 – Present",
    role: "Data & AI Intern",
    location: "Technopark, Thiruvananthapuram",
    bullets: [
      "Built MoMatic — an AI meeting assistant using FastAPI + GPT-4o that achieves 92% MoM generation accuracy",
      "Engineered a two-stage audio pipeline: auto-compresses files under 25MB; larger files get auto-chunked — zero upload failures",
      "Integrated Deepgram STT with 80–86% accuracy on bilingual Japanese/English audio with multi-speaker diarization",
      "Built async FastAPI backend with Redis queuing + ARQ workers for non-blocking processing; user edits trigger live GPT-4o MoM regeneration",
    ],
    tags: ["Python", "FastAPI", "Deepgram", "GPT-4o", "Redis", "SQLite", "ARQ"],
  },
  {
    company: "Freelance AI & DS Trainer",
    period: "2025 – 2026",
    role: "Remote Trainer",
    location: "Origin I & SpydX",
    bullets: [
      "Origin (1 week, 20 students): Intensive DS training; students built a temperature prediction model from scratch",
      "SpydX (6 months, 20 students): Designed full Data Engineering & Analytics curriculum; issued signed completion certificates",
      "Guided SpydX cohort to build ProductPulse — an analytics dashboard with automated restock recommendations, sentiment analysis, and profit breakdowns",
    ],
    tags: ["Python", "Scikit-learn", "Pandas", "Power BI", "Data Pipelines"],
  },
  {
    company: "BMW Plant, Mahindra City",
    period: "Jun – Oct 2024",
    role: "Functional Analyst Intern",
    location: "Chennai",
    bullets: [
      "Built Power BI dashboards, transforming quality data into decision-ready insights for global teams",
      "Automated MS Access + VBA processes, improving data accuracy and reducing manual effort across QMS",
    ],
    tags: ["MS Access", "VBA", "Power BI", "Excel", "SQL"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-10 md:py-14" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center"
        >
          Experience <span className="text-gradient-gold">&</span> Journey
        </motion.h2>

        <div className="relative max-w-4xl mx-auto pl-8 md:pl-10">
          {/* Vertical glowing teal line */}
          <div className="absolute left-3 md:left-4 top-0 bottom-0 w-0.5 bg-primary/30 shadow-[0_0_8px_hsl(166_100%_48%/0.3)]" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
              className="relative mb-6 last:mb-0"
            >
              {/* Dot marker */}
              <div className="absolute -left-5 md:-left-6 top-5 w-3 h-3 rounded-full bg-primary glow-teal z-10 border-2 border-background" />

              <div className="glass rounded-lg p-5 hover:glow-teal transition-all duration-300">
                {/* Header row: date badge + company/role */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 mb-3">
                  <span className="shrink-0 px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono font-medium whitespace-nowrap">
                    {exp.period}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-display font-bold text-foreground leading-tight">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-secondary">{exp.role} · {exp.location}</p>
                  </div>
                </div>

                {/* Bullets in 2-col grid on wider screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5 mb-3">
                  {exp.bullets.map((b, j) => (
                    <p key={j} className="text-sm text-muted-foreground leading-relaxed">
                      <span className="text-primary mr-1.5">▸</span>{b}
                    </p>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
