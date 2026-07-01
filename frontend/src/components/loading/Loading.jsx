import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#fbf6ee] flex flex-col justify-center items-center z-[9999]">
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="text-7xl"
      >
        🤍
      </motion.div>

      <p className="mt-6 tracking-[8px] uppercase text-[#7A2E3B]">
        Loading...
      </p>
    </div>
  );
}