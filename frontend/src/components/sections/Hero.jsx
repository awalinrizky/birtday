import hero from "../../assets/images/hero.jpg";
import { motion } from "framer-motion";
import { siteData } from "../../constants/siteData.js";
import { ChevronDown } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">

      <motion.img
        src={hero}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* warm wine-toned overlay instead of flat black */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(43,36,32,0.55) 0%, rgba(92,32,41,0.55) 60%, rgba(43,36,32,0.75) 100%)",
        }}
      />
<div data-aos="fade-up"></div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <Container>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="eyebrow justify-center text-gold-soft"
            style={{ color: "#e3d3b8" }}
          >
            Happy Birthday
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl mt-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {siteData.hero.title}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-4xl md:text-6xl mt-2"
            style={{ fontFamily: "var(--font-script)", color: "#dcb3ac" }}
          >
            {siteData.hero.subtitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 max-w-xl mx-auto text-lg leading-8 text-paper/85"
          >
            {siteData.hero.description}
          </motion.p>

          <motion.a
            href="#story"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="inline-block mt-10 rounded-full border border-gold px-8 py-4 text-sm uppercase tracking-[2px] hover:bg-gold hover:text-ink transition-all duration-300"
          >
            Explore Our Story
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 2, repeat: Infinity, duration: 1.6 }}
            className="mt-14 flex justify-center text-gold"
          >
            <ChevronDown size={32} />
          </motion.div>

        </Container>
      </div>
    </section>
  );
}
