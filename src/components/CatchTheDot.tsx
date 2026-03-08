import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const MESSAGES: Record<number, string> = {
  1: "So close… 👀",
  2: "It's watching you.",
  5: "You're getting warmer. 🔥",
  6: "The dot has trust issues.",
  8: "My AI literally trained this dot to avoid humans.",
  9: "Have you considered a career in dot-chasing?",
  10: "Persistence detected. Logging your IP… just kidding. Maybe.",
  11: "The dot respects you. It just won't show it.",
  15: "If you chase bugs like this, you're already a great engineer.",
};

const THRESHOLD = 80;
const DOT_SIZE = 24;
const MAX_ATTEMPTS = 30;

const CatchTheDot = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [dotPos, setDotPos] = useState({ x: 50, y: 50 });
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);
  const [dotVisible, setDotVisible] = useState(true);

  const randomPos = useCallback((avoidX?: number, avoidY?: number) => {
    const box = boxRef.current;
    if (!box) return { x: 50, y: 50 };
    const w = box.clientWidth - DOT_SIZE;
    const h = box.clientHeight - DOT_SIZE;
    let x: number, y: number, tries = 0;
    do {
      x = Math.random() * w;
      y = Math.random() * h;
      tries++;
    } while (
      avoidX !== undefined &&
      avoidY !== undefined &&
      Math.hypot(x - avoidX, y - avoidY) < 120 &&
      tries < 20
    );
    return { x, y };
  }, []);

  useEffect(() => {
    if (boxRef.current) {
      setDotPos(randomPos());
    }
  }, [randomPos]);

  const handleEvade = useCallback(
    (clientX: number, clientY: number) => {
      if (done) return;
      const box = boxRef.current;
      if (!box) return;
      const rect = box.getBoundingClientRect();
      const mx = clientX - rect.left;
      const my = clientY - rect.top;
      const dotCenterX = dotPos.x + DOT_SIZE / 2;
      const dotCenterY = dotPos.y + DOT_SIZE / 2;
      const dist = Math.hypot(mx - dotCenterX, my - dotCenterY);

      if (dist < THRESHOLD) {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);

        if (newAttempts >= MAX_ATTEMPTS) {
          setDone(true);
          setDotVisible(false);
          setMessage("");
          return;
        }

        const newPos = randomPos(mx, my);
        setDotPos(newPos);

        // Find the highest matching message
        const keys = Object.keys(MESSAGES)
          .map(Number)
          .sort((a, b) => b - a);
        const match = keys.find((k) => newAttempts >= k);
        if (match) setMessage(MESSAGES[match]);
      }
    },
    [dotPos, attempts, done, randomPos]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => handleEvade(e.clientX, e.clientY),
    [handleEvade]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      const t = e.touches[0];
      if (t) handleEvade(t.clientX, t.clientY);
    },
    [handleEvade]
  );

  const reset = () => {
    setAttempts(0);
    setDone(false);
    setDotVisible(true);
    setMessage("");
    setDotPos(randomPos());
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-10 md:py-14" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            🎯 Catch the Dot
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Think you're fast? Catch the dot and hire Sree at 50% off.
          </p>
          <p className="text-[11px] text-muted-foreground/30 mt-1 italic">
            *Terms apply. Dot has never been caught. Dot will never be caught.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[600px] mx-auto"
        >
          {/* Game box */}
          <div
            ref={boxRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[300px] md:h-[380px] rounded-2xl overflow-hidden select-none"
            style={{
              background: "hsla(166, 100%, 48%, 0.03)",
              backdropFilter: "blur(10px)",
              border: "1px solid hsla(166, 100%, 48%, 0.2)",
            }}
          >
            {/* Attempt counter */}
            <div className="absolute top-3 right-4 text-sm font-mono text-primary z-10">
              Attempts: {attempts}
            </div>

            {/* Mobile hint */}
            <div className="absolute bottom-3 left-4 text-[11px] text-muted-foreground/50 md:hidden">
              📱 Tap near the dot!
            </div>

            <AnimatePresence>
              {dotVisible && !done && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.3, transition: { duration: 0.6 } }}
                  animate={{ x: dotPos.x, y: dotPos.y }}
                  transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
                  className="absolute w-6 h-6 rounded-full cursor-pointer"
                  style={{
                    background: "hsl(166, 100%, 48%)",
                    boxShadow:
                      "0 0 12px hsla(166, 100%, 48%, 0.6), 0 0 24px hsla(166, 100%, 48%, 0.3)",
                    animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
                  }}
                />
              )}
            </AnimatePresence>

            {/* Final reveal */}
            <AnimatePresence>
              {done && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center p-6"
                >
                  <div className="text-center max-w-sm">
                    <p className="text-xl md:text-2xl font-display font-bold text-foreground mb-2">
                      Okay fine. You can't catch it.
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      But if you made it this far — you clearly don't give up easily.
                    </p>
                    <div className="w-16 h-px bg-border mx-auto mb-4" />
                    <p className="text-sm font-medium mb-5" style={{ color: "hsl(45, 100%, 70%)" }}>
                      That's exactly the kind of person I want to work with. 🤝
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                      <a
                        href="/Sreelakshmi_M_Resume.pdf"
                        download
                        className="px-4 py-2 rounded-lg border border-primary text-primary text-sm font-medium hover:bg-primary/10 transition-colors"
                      >
                        📄 View Resume
                      </a>
                      <a
                        href="mailto:sreelakshmi.ai2021@gmail.com"
                        className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        💼 Hire Me
                      </a>
                      <button
                        onClick={scrollToProjects}
                        className="px-4 py-2 rounded-lg border border-primary text-primary text-sm font-medium hover:bg-primary/10 transition-colors"
                      >
                        🧠 Explore Projects
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Message area */}
          <div className="h-10 mt-4 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {message && !done && (
                <motion.p
                  key={message}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm italic text-center"
                  style={{ color: "hsl(45, 100%, 70%)" }}
                >
                  {message}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Post-game text & reset */}
          {done && (
            <div className="text-center mt-2 space-y-3">
              <p className="text-[12px] text-muted-foreground/50 italic">
                (The 50% off was never real. But the collaboration will be.) 😄
              </p>
              <button
                onClick={reset}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                ↺ Try Again
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CatchTheDot;
