import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  { name: "Oceanic Sentinel", icon: "🌊", featured: true, desc: "Live coastal risk monitoring for Tamil Nadu using NASA & NOAA APIs + ML", tags: ["Python", "NOAA", "NASA", "Power BI"] },
  { name: "AutoBrief", icon: "📰", featured: true, desc: "News summarization + political bias detection using BERT, BART, T5", tags: ["NLP", "SpaCy", "Transformers"] },
  { name: "ProductPulse", icon: "📊", featured: false, desc: "E-commerce analytics dashboard with sentiment analysis + restock engine", tags: ["Python", "Pandas", "Power BI"] },
  { name: "Leaf Disease Detector", icon: "🍃", featured: false, desc: "CNN classifier on Cassava dataset, 82% accuracy", tags: ["TensorFlow", "Keras", "OpenCV"] },
  { name: "Fraud Detection Pipeline", icon: "🔒", featured: false, desc: "Transaction fraud prediction with Random Forest", tags: ["Scikit-learn", "Pandas"] },
  { name: "ADAS", icon: "🚗", featured: true, desc: "Real-time pedestrian/vehicle detection for driver assistance", tags: ["YOLOv8", "OpenCV"] },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-10 md:py-14" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold text-foreground mb-16 text-center"
        >
          Featured <span className="text-gradient-teal">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`glass rounded-xl p-6 relative group cursor-default transition-all duration-500 ${
                hovered === i ? "glow-teal-strong scale-[1.02]" : "glow-teal"
              } ${i < 2 ? "lg:col-span-1 md:col-span-1" : ""}`}
              style={{
                transform: hovered === i ? `perspective(1000px) rotateY(${2}deg) rotateX(${-2}deg) scale(1.02)` : "none",
                transition: "all 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)",
              }}
            >
              {p.featured && (
                <span className="absolute top-3 right-3 text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded-full">
                  ⭐ Featured
                </span>
              )}
              <span className="text-3xl">{p.icon}</span>
              <h3 className="text-lg font-display font-bold text-foreground mt-3">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
