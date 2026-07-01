import hero from "../../assets/images/hero.jpg";
import { motion } from "framer-motion";
import { siteData } from "../../constants/siteData.js";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">

      {/* IMAGE */}
      <motion.img
        src={hero}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{
          scale: 1.18,
          filter: "blur(12px)",
        }}
        animate={{
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 7,
          ease: "easeOut",
        }}
      />

      {/* GLOW EFFECT */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-[#b86a75]/20
          blur-[180px]
        "
      />

      {/* OVERLAY */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(10,10,10,.15) 0%,
              rgba(60,20,28,.35) 45%,
              rgba(22,16,18,.82) 100%
            )
          `,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <Container>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-[#e3d3b8] uppercase tracking-[3px]"
          >
            Happy Birthday
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="
              text-6xl
              md:text-[7rem]
              leading-none
              drop-shadow-xl
              text-center
            "
            style={{ fontFamily: "var(--font-display)" }}
          >
            {siteData.hero.title}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="
              text-5xl
              md:text-7xl
              mt-2
              text-center
            "
            style={{
              fontFamily: "var(--font-script)",
              color: "#dcb3ac",
            }}
          >
            {siteData.hero.subtitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="
              mt-8
              max-w-xl
              mx-auto
              text-xl
              leading-9
              text-center
              text-white/80
            "
          >
            {siteData.hero.description}
          </motion.p>

          {/* BUTTON */}
          <motion.a
            href="#story"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="
              inline-block
              mt-10
              rounded-full
              border
              border-[#d5b98f]
              px-8
              py-4
              text-sm
              uppercase
              tracking-[2px]
              transition-all
              duration-300
              hover:bg-[#d5b98f]
              hover:text-black
              hover:scale-105
            "
          >
            Explore Our Story
          </motion.a>

          {/* SCROLL INDICATOR */}
          <div className="mt-14 flex justify-center">
            <div className="w-7 h-12 rounded-full border border-white/60 flex justify-center">
              <motion.div
                animate={{ y: [4, 18, 4] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                }}
                className="w-1.5 h-1.5 rounded-full bg-white mt-2"
              />
            </div>
          </div>

        </Container>
      </div>
    </section>
  );
}