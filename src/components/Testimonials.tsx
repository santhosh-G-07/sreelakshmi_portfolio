import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Monika Murlidhar Bhelkar",
    title: "HR Operations, Payroll & Compliance",
    rating: 5,
    context: "Resume Writing · Feb 2025",
    text: "Sreelakshmi showed a lot of patience and worked exactly on the requirement. She is dedicated to her work. It was easy to work with Sreelakshmi.",
  },
  {
    name: "Manickavel Ganesan",
    title: "Java Fullstack Developer",
    rating: 5,
    context: "Training · Feb 2026",
    text: "Sreelakshmi is a fantastic collaborator. She took the time to understand the project's vision and delivered results that exceeded expectations. I especially appreciated her creative problem-solving and willingness to go the extra mile.",
  },
  {
    name: "Harini Tamilarasan",
    title: "Student, Dhanalakshmi Srinivasan College",
    rating: 5,
    context: "Training · Mar 2026",
    text: "This is my first online internship as a Data Engineer. I really liked the experience working as an intern at SpydX. They give time for each module — from training to project phase — without hurrying. With the help of training I completed my project.",
  },
  {
    name: "Jeya Suriya",
    title: "Trainee",
    rating: 4.3,
    context: "Training · Feb 2026",
    text: "She is very interactive and did most of the work in the project. Sree did a great job connecting everyone. She was very clear on the goal and did it efficiently. It was a great time to work with her.",
  },
  {
    name: "Jasmine Muneer",
    title: "Exploring Programming & Development",
    rating: 4.5,
    context: "Training · Feb 2026",
    text: "We built an E-commerce Inventory and Sentiment Tracker, integrating customer reviews with inventory details. Sreelakshmi's guidance and encouragement was truly valuable for a first-time serious project.",
  },
];

const Stars = ({ rating }: { rating: number }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.3;
  return (
    <span className="text-secondary text-sm">
      {"★".repeat(full)}
      {half && "½"}
      {" "}
      <span className="text-muted-foreground">({rating})</span>
    </span>
  );
};

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Double for infinite scroll
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-10 md:py-14 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold text-foreground text-center"
        >
          What People <span className="text-gradient-gold">Say</span>
        </motion.h2>
      </div>

      <div className="group">
        <div className="flex gap-6 animate-scroll-left hover:[animation-play-state:paused] w-max">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="glass rounded-xl p-6 w-80 shrink-0 glow-teal hover:glow-teal-strong transition-all duration-300"
            >
              <Stars rating={t.rating} />
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed italic">"{t.text}"</p>
              <div className="mt-4 border-t border-border pt-3">
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.title}</p>
                <p className="text-xs text-primary mt-1">{t.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
