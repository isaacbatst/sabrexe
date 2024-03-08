import React from "react";
import Confetti from "react-confetti";
import Typed from "typed.js";

type Props = {};

const Third = (props: Props) => {
  const typedRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      typeSpeed: 50,
      strings: [
        `<p>Parabéns, você é uma membra legítima da casa corvinal!</p>^1000`,
        `<p class="mb-5">Seu prêmio final está na bolsa mais pesada.</p>
          <p>Dentro de um presente seu para mim 
          <p>você encontrará um presente meu para você.</p>`,
      ],
      showCursor: false,
      backSpeed: 15,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <Confetti numberOfPieces={500} recycle={false} />
      <div className="container py-5 flex flex-col items-center">
        <div ref={typedRef} className="text-2xl text-center font-light"></div>
      </div>
    </div>
  );
};

export default Third;
