import { motion } from "framer-motion";

export default function BirthdayCard({ onContinue }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-[#0f0f0f] flex justify-center items-center text-white z-[9999]"
      onClick={onContinue}
    >
      <motion.div
        initial={{ scale: .9 }}
        animate={{ scale: 1 }}
        transition={{ duration: .7 }}
        className="text-center border border-white/20 rounded-2xl px-12 py-14"
      >
        <p className="uppercase tracking-[10px] text-gray-400">
          To
        </p>

        <h1
          className="text-6xl mt-6"
          style={{
            fontFamily: "Cormorant Garamond",
          }}
        >
          Icaa ❤️
        </h1>

        <div className="w-24 h-px bg-white/20 mx-auto my-8"></div>

        <p className="text-gray-300 leading-9">
          This place was made
          <br />
          only for you.
        </p>

        <p className="mt-12 text-sm tracking-[6px] text-rose-300 animate-pulse">
          TAP ANYWHERE
        </p>
      </motion.div>
    </motion.div>
  );
}