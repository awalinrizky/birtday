import gallery from "../../data/gallery.js";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
export default function Gallery() {
  return (
    <section id="gallery" className="py-28 md:py-32 bg-paper">
      <Container>
        <SectionTitle
          eyebrow="Gallery"
          title="Captured Moments"
          description="Every photo tells a story, every memory lasts forever."
        />

        <PhotoProvider>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-20">
            {gallery.map((photo) => (
              <PhotoView key={photo.id} src={photo.image}>
                <motion.div
                  whileHover={{
                    scale: 1.04,
                    y: -8,
                  }}
                  className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg relative border border-gold-soft"
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-[320px] object-cover duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 40%, rgba(92,32,41,0.85) 100%)",
                    }}
                  />
                  <div className="absolute bottom-6 left-6 text-paper opacity-0 group-hover:opacity-100 transition">
                    <h3
                      className="text-2xl"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {photo.title}
                    </h3>
                    <p className="text-xs uppercase tracking-[2px] mt-1 text-gold-soft">
                      {photo.date}
                    </p>
                  </div>
                </motion.div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </Container>
    </section>
  );
}
