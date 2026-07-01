import { TypeAnimation } from "react-type-animation";
import letter from "../../data/letter.js";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function LoveLetter() {
  return (
    <section id="letter" className="py-28 md:py-36 bg-ivory">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-paper rounded-3xl shadow-2xl p-10 md:p-16 relative border border-gold-soft"
        >
          <div className="monogram-seal w-16 h-16 text-2xl absolute -top-8 left-1/2 -translate-x-1/2">
            CAA
          </div>

          <SectionTitle
            eyebrow="A Letter to You"
            title="Love Letter"
            description="Every photo tells a story, every memory lasts forever."
          />

          <TypeAnimation
            sequence={[letter.content]}
            speed={65}
            wrapper="div"
            cursor={false}
            className="mt-12 whitespace-pre-line leading-9 text-lg text-ink-soft"
            initial={{
opacity:0
}}

whileInView={{
opacity:1
}}

transition={{
delay:4
}}

className="
mt-20
text-right
text-5xl
"

style={{
fontFamily:"var(--font-script)"
}}


          />
        </motion.div>
      </Container>
    </section>
  );
}
