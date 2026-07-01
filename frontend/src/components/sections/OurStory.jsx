import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import api from "../../api/axios";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function OurStory() {
  const [timelines, setTimelines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTimelines = async () => {
      try {
        const response = await api.get("/timelines");

        setTimelines(response.data.data || response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTimelines();
  }, []);

  return (
    <section id="story" className="py-28 md:py-32 bg-paper">
      <Container>
        <SectionTitle
          eyebrow="Our Story"
          title="Captured Moments"
          description="Every memory has its own chapter, and every chapter begins with you."
        />

        {isLoading ? (
          <div className="text-center text-ink-soft mt-12 animate-pulse">
            Gathering our memories...
          </div>
        ) : timelines.length === 0 ? (
          <div className="text-center text-ink-soft italic mt-12">
            Our story hasn't started yet...
          </div>
        ) : (
          <div className="mt-20 space-y-16">
            {timelines.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="grid md:grid-cols-[180px_1fr] gap-8"
              >
                {/* tanggal */}
                <div className="text-gold text-sm tracking-[3px] uppercase">
                  {item.event_date}
                </div>

                {/* isi timeline */}
                <div className="relative border-l border-gold-soft pl-8">
                  <div className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-paper border-2 border-gold"></div>

                  <h3
                    className="text-3xl text-wine"
                    style={{
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 text-ink-soft leading-8">
                    {item.description}
                  </p>

                  {item.image && (
                    <img
                      src={`http://localhost:5000/uploads/story/${item.image}`}
                      alt={item.title}
                      className="mt-8 rounded-2xl shadow-lg w-full max-w-xl object-cover"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
