import { useEffect } from "react";
import { motion } from "framer-motion";

export default function BirthdayIntro({ onFinish }) {

  useEffect(() => {

    const timer = setTimeout(() => {

      onFinish();

    }, 7000);

    return () => clearTimeout(timer);

  }, []);

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black flex justify-center items-center text-white z-[9999]"
    >

      <div className="text-center max-w-xl">

        <motion.h1

          initial={{ y: 30 }}
          animate={{ y: 0 }}

          className="text-6xl"

          style={{
            fontFamily: "Cormorant Garamond",
          }}
        >
          Happy Birthday
        </motion.h1>

        <motion.p

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}

          transition={{ delay: 1 }}

          className="mt-12 text-xl leading-10 text-gray-300"
        >

          I wanted to make something
          <br />

          that you could keep forever.

        </motion.p>

      </div>

    </motion.div>

  );

}