import { useState } from "react";

export default function MusicButton({ audioRef }) {
  const [playing, setPlaying] = useState(true);

  const toggle = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      await audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="fixed bottom-6 right-6 bg-[#7A2E3B] text-white w-14 h-14 rounded-full shadow-xl z-50"
    >
      {playing ? "🔊" : "🎵"}
    </button>
  );
}