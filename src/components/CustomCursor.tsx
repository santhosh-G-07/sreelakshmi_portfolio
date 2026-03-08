import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[10000] mix-blend-screen"
      style={{
        left: pos.x - 12,
        top: pos.y - 12,
        width: 24,
        height: 24,
        borderRadius: "50%",
        background: "radial-gradient(circle, hsl(166 100% 48% / 0.6) 0%, transparent 70%)",
        boxShadow: "0 0 20px hsl(166 100% 48% / 0.3)",
        transition: "left 0.05s linear, top 0.05s linear",
      }}
    />
  );
};

export default CustomCursor;
