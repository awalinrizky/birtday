import { useEffect, useState } from "react";

import Opening from "./components/opening/Opening";
import Router from "./routes/Router";
import Loading from "./components/loading/Loading";

export default function App() {

  const [loading, setLoading] = useState(true);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {!opened ? (
        <Opening onOpen={() => setOpened(true)} />
      ) : (
        <Router />
      )}
    </>
  );
}