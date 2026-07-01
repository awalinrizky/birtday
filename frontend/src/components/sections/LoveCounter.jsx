import { useEffect, useState } from "react";
import { siteData } from "../../constants/siteData.js";
import { getRelationshipDuration } from "../../utils/date.js";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function LoveCounter() {
  const [time, setTime] = useState(
    getRelationshipDuration(siteData.relationshipDate),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getRelationshipDuration(siteData.relationshipDate));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-28 bg-paper" id="counter">
      <Container>

        <div className="monogram-seal w-14 h-14 text-xl mx-auto">KyyCaa</div>

        <SectionTitle
          eyebrow="Together Since"
          title={new Date(siteData.relationshipDate).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-16">
          <CounterItem number={time.days} label="Hari" />
          <CounterItem number={time.hours} label="Jam" />
          <CounterItem number={time.minutes} label="Menit" />
          <CounterItem number={time.seconds} label="Detik" />
        </div>
      </Container>
    </section>
  );
}

function CounterItem({ number, label }) {
  return (
    <div className="border-t border-gold-soft pt-5">
      <h3
        className="text-5xl md:text-6xl text-wine"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {number}
      </h3>
      <p className="uppercase tracking-[3px] text-xs mt-3 text-ink-soft">{label}</p>
    </div>
  );
}
