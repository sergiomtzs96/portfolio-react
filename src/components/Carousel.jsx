import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ images, className, fill }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className={`relative group overflow-hidden ${fill ? "flex-1 min-h-0" : ""} ${className}`}>
      <div className={`relative w-full overflow-hidden bg-card ${fill ? "h-full" : "aspect-[16/9]"}`}>
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full h-full object-cover object-top"
          />
        </AnimatePresence>
      </div>

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background border border-border p-2 text-foreground opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background border border-border p-2 text-foreground opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`cursor-pointer rounded-full transition-all ${
              i === current
                ? "w-6 h-2 bg-foreground"
                : "w-2 h-2 bg-foreground/40 hover:bg-foreground/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
