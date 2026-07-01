import { motion } from "framer-motion";

export default function Paper() {
  return (
    <motion.div
      initial={{
        y: 120,
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        y: -180,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      className="
      absolute
      w-[320px]
      h-[420px]
      bg-[#fffdf8]
      rounded-md
      shadow-2xl
      border
      border-stone-300
      left-1/2
      -translate-x-1/2
      z-0
      overflow-hidden
      "
    >
      <div className="p-10">

        <p
          className="text-center text-5xl"
          style={{
            fontFamily: "Parisienne",
          }}
        >
          Dear Icaa ❤️
        </p>

        <div className="mt-10 space-y-4">

          <div className="h-[2px] bg-stone-200 rounded-full"></div>

          <div className="h-[2px] bg-stone-200 rounded-full w-5/6"></div>

          <div className="h-[2px] bg-stone-200 rounded-full"></div>

          <div className="h-[2px] bg-stone-200 rounded-full w-4/6"></div>

          <div className="h-[2px] bg-stone-200 rounded-full"></div>

          <div className="h-[2px] bg-stone-200 rounded-full w-3/6"></div>

        </div>

        <p
          className="absolute bottom-8 right-8 text-3xl"
          style={{
            fontFamily: "Parisienne",
          }}
        >
          Rizky
        </p>

      </div>
    </motion.div>
  );
}