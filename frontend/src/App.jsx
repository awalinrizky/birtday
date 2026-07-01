import { useEffect, useRef, useState } from "react";

import Loading from "./components/loading/Loading";
import Opening from "./components/opening/Opening";
import Router from "./routes/Router";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [opened, setOpened] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/birthday.mp3"
        loop
      />

      {!opened ? (
        <Opening
          audioRef={audioRef}
          onOpen={() => setOpened(true)}
        />
      ) : (
        <Router audioRef={audioRef} />
      )}
    </>
  );
}