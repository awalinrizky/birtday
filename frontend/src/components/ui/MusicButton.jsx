import { useRef, useState } from "react";

export default function MusicButton() {
  const audio = useRef();

  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (playing) {
      audio.current.pause();
    } else {
      audio.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio
        ref={audio}
        loop
      >
        <source
          src="/music/birthday.mp3"
        />
      </audio>

      <button
        onClick={toggle}
        className="fixed bottom-6 right-6 bg-[#7A2E3B] text-white w-14 h-14 rounded-full shadow-xl z-50"
      >
        {playing ? "🔊" : "🎵"}
      </button>
    </>
  );
}