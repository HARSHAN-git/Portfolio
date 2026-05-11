import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <div className="mb-4 inline-block rounded-full glass px-4 py-1 text-xs font-mono uppercase tracking-widest text-primary">
        {eyebrow}
      </div>
      <h2 className="text-4xl font-bold md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-4 text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
}
