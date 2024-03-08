import React from "react";
import Confetti from "react-confetti";
import Typed from "typed.js";

type Props = {
  nextChallenge: () => void;
};

const Second = (props: Props) => {
  const typedRef = React.useRef<HTMLDivElement>(null);
  const firstToTypeRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      typeSpeed: 30,
      strings: [
        ` <div className="mb-5 first-to-type">
          <p>As vezes é difícil enxergar</p>
          <p>então abra bem os olhos,</p>
          <p>para que quando eu te veja pare logo em teu olhar</p>
        </div>
        <div className="mb-5">
          <p>Responda o desafio</p>
          <p>e quem sabe um pouco mais feliz esse dia vai ficar</p>
          <p>Aonde é tão quente que a água grita por socorro?</p>
        </div>
        <div className="mb-5">
          <p>Vá mas não se esqueça de voltar</p> 
          <p>pois com todas as fatias</p> 
          <p>algo mais delicioso que uma pizza vai encontrar.
          </p>
        </div>
        `,
      ],
    });

    return () => {
      typed.destroy();
    }
  }, []);

  return (
    <div className="container">
      <Confetti numberOfPieces={200} recycle={false} />
      <div ref={typedRef} >
      </div>
    </div>
  );
};

export default Second;
