import confetti from "canvas-confetti";

export default function ContinueButton({ onClick }) {

  const handleClick = () => {

    confetti({

      particleCount: 180,

      spread: 100,

      origin: { y: 0.6 }

    });

    setTimeout(() => {

      onClick();

    },600);

  };

  return (

    <button onClick={handleClick}>

      Continue

    </button>

  );

}