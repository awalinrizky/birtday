import { TypeAnimation } from "react-type-animation";

export default function Letter() {

  return (

    <div
      className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      "
    >

      <div
        className="
        bg-white
        rounded-3xl
        p-10
        shadow-2xl
        max-w-xl
        w-full
        mx-5
        "
      >

        <h2 className="text-4xl text-center mb-8">

          Happy Birthday ❤️

        </h2>

        <TypeAnimation

          sequence={[
            `Dear Ica,

Today is your special day.

I made this little place just for you.

I hope every page brings a smile to your face.

Happy Birthday.

Love,
Awalin ❤️`
          ]}

          speed={70}

          wrapper="div"

          className="
          whitespace-pre-line
          leading-8
          text-gray-700
          "

        />

      </div>

    </div>

  );

}