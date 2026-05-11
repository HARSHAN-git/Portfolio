import { motion } from "framer-motion";

export function ParticleBackground() {
  const particles = Array.from({ length: 30 });
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg radial-fade opacity-40" />
      <div className="absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--glow)] opacity-20 blur-[120px]" />
      <div className="absolute right-0 top-2/3 h-[400px] w-[400px] rounded-full bg-[var(--glow-2)] opacity-20 blur-[120px]" />
      {particles.map((_, i) => {
        const size = Math.random() * 3 + 1;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-primary/40"
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        );
      })}
    </div>
  );
}
