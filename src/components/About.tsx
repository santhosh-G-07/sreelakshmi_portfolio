import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  { name: "Programming", skills: ["Python", "SQL"] },
  { name: "AI/ML", skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"] },
  { name: "NLP & LLMs", skills: ["BERT", "BART", "T5", "SpaCy", "GPT-4o"] },
  { name: "Backend", skills: ["FastAPI", "Redis", "ARQ", "REST APIs"] },
  { name: "Computer Vision", skills: ["OpenCV", "YOLOv8", "CNNs"] },
  { name: "Data & Viz", skills: ["Pandas", "NumPy", "Power BI", "Tableau", "Matplotlib"] },
  { name: "Cloud & DB", skills: ["Azure", "SQLite", "PostgreSQL", "Git"] },
];

const stats = [
  { value: "40+", label: "Students Trained" },
  { value: "2+", label: "Years Hands-on AI Experience" },
  { value: "6 Months", label: "Longest Training Program" },
  { value: "4.5★", label: "Avg Rating" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-10 md:py-14 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center"
        >
          About <span className="text-gradient-teal">Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a B.Tech AI &amp; Data Science grad who went from classrooms to production systems pretty fast.
              At Experion Technologies, I'm building MoMatic — an AI meeting assistant that takes raw audio
              (even bilingual Japanese/English meetings) and turns it into clean, structured Minutes of Meeting.
              Before that, I spent a year training 40+ students in data engineering and analytics.
              I like building things that are actually useful — and I like making complex stuff feel simple.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-2.5"
          >
            {skillCategories.map((cat) => (
              <div key={cat.name}>
                <p className="text-sm text-secondary font-medium mb-1.5">{cat.name}</p>
                <div className="flex flex-wrap gap-[8px]">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full glass text-sm text-foreground hover:text-primary hover:border-primary/30 hover:glow-teal transition-all duration-300 cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-xl p-5 text-center glow-teal">
              <p className="text-3xl md:text-4xl font-display font-bold text-primary">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
