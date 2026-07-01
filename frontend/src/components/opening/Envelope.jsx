import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Paper from "./Paper";

export default function Envelope({ onClick }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    if (!opened) {
      setOpened(true);
    } else {
      onClick();
    }
  };

  return (
    <motion.div
      initial={{
        scale: 0,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center">

        {/* Surat keluar */}
        <AnimatePresence>
          {opened && <Paper />}
        </AnimatePresence>

        {/* Amplop */}
        <motion.button
          onClick={handleOpen}
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            relative
            w-56
            h-40
            bg-white
            rounded-xl
            shadow-2xl
            border
            border-stone-200
            text-5xl
            z-10
          "
        >
          💌
        </motion.button>

        {/* Tombol Continue */}
        <AnimatePresence>
          {opened && (
            <motion.button
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                delay: 0.8,
              }}
              onClick={onClick}
              className="
                mt-8
                px-8
                py-3
                rounded-full
                bg-rose-500
                text-white
                shadow-lg
                hover:bg-rose-600
                transition
              "
            >
              Continue →
            </motion.button>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
}