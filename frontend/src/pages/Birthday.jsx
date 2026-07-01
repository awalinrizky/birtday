import { useState } from "react";

import BirthdayCard from "../components/intro/BirthdayCard";
import BirthdayIntro from "../components/intro/BirthdayIntro";
import Opening from "../components/opening/Opening";
import Home from "./Home";

export default function Birthday() {

  const [step, setStep] = useState(0);

  if (step === 0) {
    return (
      <BirthdayCard
        onContinue={() => setStep(1)}
      />
    );
  }

  if (step === 1) {
    return (
      <BirthdayIntro
        onFinish={() => setStep(2)}
      />
    );
  }

  if (step === 2) {
    return (
      <Opening
        onOpen={() => setStep(3)}
      />
    );
  }

  return <Home />;
}