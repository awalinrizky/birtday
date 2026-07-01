import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import BirthdayWish from "./BirthdayWish"; 

export default function LoveCounter() {
  // FIX: Target diubah ke 2 Juli 2027 jam 00:00 WIB
  const targetDate = new Date("July 2, 2027 00:00:00 GMT+0700").getTime();

  const calculate = () => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      return { finished: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      finished: false,
      days: Math.floor(diff / 1000 / 60 / 60 / 24),
      hours: Math.floor(diff / 1000 / 60 / 60) % 24,
      minutes: Math.floor(diff / 1000 / 60) % 60,
      seconds: Math.floor(diff / 1000) % 60,
    };
  };

  const [time, setTime] = useState(calculate());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculate());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    { value: time.days, label: "Hari" },
    { value: time.hours, label: "Jam" },
    { value: time.minutes, label: "Menit" },
    { value: time.seconds, label: "Detik" },
  ];

  // FIX: Kita bungkus pakai Fragment (<>) biar bisa nampilin dua-duanya (atas-bawah)
  return (
    <>
      {/* BAGIAN ATAS: COUNTDOWN KE 2027 */}
      <section className="py-28 bg-paper">
        <Container>
          <p className="eyebrow justify-center">Birthday Countdown</p>
          <h2 className="text-center text-6xl mt-5" style={{ fontFamily: "var(--font-display)" }}>
            2 Juli 2027
          </h2>
          <p className="text-center mt-4 text-ink-soft">
            Countdown menuju ulang tahun Icaa ke-24 🎂
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {items.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -8 }}
                className="rounded-3xl bg-white p-8 shadow-xl border border-gold-soft text-center"
              >
                <div className="text-6xl text-wine" style={{ fontFamily: "var(--font-display)" }}>
                  {item.value}
                </div>
                <div className="uppercase tracking-[3px] text-sm mt-3 text-ink-soft">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* BAGIAN BAWAH: SURAT DAN PERMOHONAN (Kita set finished={true} biar nampil terus) */}
      <BirthdayWish finished={true} />
    </>
  );
}