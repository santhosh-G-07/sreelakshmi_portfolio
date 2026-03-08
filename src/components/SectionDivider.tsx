const SectionDivider = () => (
  <div className="py-2 flex justify-center">
    <div
      className="w-full max-w-2xl h-px"
      style={{
        background: "linear-gradient(to right, transparent, hsl(166 100% 48%), transparent)",
        opacity: 0.3,
      }}
    />
  </div>
);

export default SectionDivider;
