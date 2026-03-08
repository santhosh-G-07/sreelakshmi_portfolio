import { useMemo } from "react";

const COUNT = 30;

const Fireflies = () => {
  const fireflies = useMemo(() => {
    return Array.from({ length: COUNT }, (_, i) => {
      const size = 2 + Math.random() * 2;
      const duration = 8 + Math.random() * 12;
      const delay = Math.random() * -20;
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const driftX = (Math.random() - 0.5) * 200;
      const driftY = (Math.random() - 0.5) * 200;

      return (
        <div
          key={i}
          className="firefly"
          style={{
            width: size,
            height: size,
            left: `${startX}%`,
            top: `${startY}%`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            ["--drift-x" as string]: `${driftX}px`,
            ["--drift-y" as string]: `${driftY}px`,
          }}
        />
      );
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden" aria-hidden="true">
      {fireflies}
    </div>
  );
};

export default Fireflies;
