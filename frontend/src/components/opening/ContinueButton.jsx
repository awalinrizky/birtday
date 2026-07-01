import confetti from "canvas-confetti";
import { motion } from "framer-motion";

export default function ContinueButton({ onClick }) {
  const handleClick = () => {
    confetti({
      particleCount: 180,
      spread: 100,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      onClick();
    }, 600);
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 2,
        duration: 0.8,
      }}
      onClick={handleClick}
      className="
        fixed
        bottom-12
        left-1/2
        -translate-x-1/2
        px-8
        py-4
        rounded-full
        bg-rose-500
        text-white
        font-semibold
        shadow-2xl
        hover:scale-105
        duration-300
        z-[999]
      "
    >
      Continue →
    </motion.button>
  );
}