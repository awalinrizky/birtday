import { motion } from "framer-motion";
import future from "../../data/future.js";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function Future() {
  return (
    <section id="future" className="py-28 md:py-32 bg-ivory">
      <Container>
        <SectionTitle
          eyebrow="Looking Ahead"
          title="Future Dreams"
          description="Every photo tells a story, every memory lasts forever."
        />
        <p className="text-center text-ink-soft mt-6 max-w-xl mx-auto leading-7">
          Ini baru permulaan. Masih banyak cerita yang belum kita tulis bareng.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mt-16">
          {future.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-paper rounded-2xl p-8 border border-gold-soft shadow-sm"
            >
              <span
                className="text-wine text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3
                className="text-2xl mt-3 text-ink"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.title}
              </h3>
              <p className="text-ink-soft mt-2 leading-7">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
