import { useState } from "react";

import Stars from "./Stars";
import Envelope from "./Envelope";
import Letter from "./Letter";
import ContinueButton from "./ContinueButton";

export default function Opening({ onOpen, audioRef }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = async () => {
    try {
      audioRef.current.volume = 0.35;

      await audioRef.current.play();
    } catch (err) {
      console.log(err);
    }

    setOpened(true);
  };

  return (
    <section className="fixed inset-0 bg-[#f8f4ee] overflow-hidden">
      <Stars />

      {!opened ? (
        <>
          <div
            className="
              absolute
              w-[500px]
              h-[500px]
              rounded-full
              bg-rose-200/30
              blur-[120px]
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
            "
          />

          <Envelope onClick={handleOpen} />
        </>
      ) : (
        <>
          <Letter />
          <ContinueButton onClick={onOpen} />
        </>
      )}
    </section>
  );
}
