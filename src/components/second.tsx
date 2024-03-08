import React from "react";
import Confetti from "react-confetti";
import Typed from "typed.js";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type Props = {
  nextChallenge: () => void;
};

const Second = (props: Props) => {
  const typedRef = React.useRef<HTMLDivElement>(null);
  const [isTyped, setIsTyped] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  
  React.useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      typeSpeed: 50,
      strings: [
        `<p>Olá, Sabrina.</p>^2000`,
        `<p>Surpresa?</p>^2000`,
        `<p>Sugiro que você preste bastante atenção</p><p>para não perder nenhum detalhe.</p>^2000`,
        `
          <p>Às vezes é difícil enxergar</p>
          <p>então abra bem os olhos,</p>
          <p>para que</p> <p>quando eu te veja pare logo em teu olhar...</p>^3000
        `,
        ` <p>Responda o desafio</p>
          <p>e quem sabe um pouco mais feliz esse dia vai ficar.</p>^2000`,
        `
          <p class='mb-5'">Aonde é tão quente que a água grita por socorro?</p>^4000
          <p>Vá, mas não se esqueça de voltar</p>
          <p>pois se tiver todas as fatias</p>
          <p>algo mais delicioso que uma pizza vai achar...</p>
        `,
      ],
      showCursor: false,
      backSpeed: 15,
      onComplete: () => {
        setTimeout(() => {
          setIsTyped(true);
        }, 5000);
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef.current!.value.toLowerCase();
    const correct = ["sabrina", "eu", "sabrexe"]

    if(correct.includes(value)) {
      props.nextChallenge();
    }
  }

  return (
    <div className="container py-5 flex flex-col items-center">
      <Confetti numberOfPieces={200} recycle={false} />
      <div ref={typedRef} className="text-xl font-light mb-10" />
      {isTyped && (
        <form className="max-w-md flex justify-center gap-3" onSubmit={onSubmit}>
          <Input
            ref={inputRef}
            className="w-full bg-[#000000] text-white border mb-3 border-[#0D1026] rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#0D1026] dark:bg-gray-800 dark:focus:ring-gray-600"
            placeholder="Quando tiver todas as fatias..."
            type="text"
          />
          <Button type="submit">Submeter resposta</Button>
        </form>
      )}
    </div>
  );
};

export default Second;
