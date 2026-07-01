import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const hearts = Array.from({ length: 10 });

export default function FloatingHearts() {
  return (
    <>
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white/20"
          initial={{
            y: 200,
            opacity: 0,
            x: Math.random() * window.innerWidth,
          }}
          animate={{
            y: -900,
            opacity: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 12 + Math.random() * 6,
            delay: Math.random() * 8,
          }}
        >
          <Heart size={20} fill="white" />
        </motion.div>
      ))}
    </>
  );
}