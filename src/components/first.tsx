'use client';
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/KzOYuPVcSrL
 */
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { Button } from "./ui/button";

export function First(props: {
  nextChallenge: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Magia lançada!");
    console.log(inputRef.current?.value);
    const magic = inputRef.current?.value.toLowerCase();

    if(magic === "lumos" || magic === 'lumus') {
      console.log("Lumos!");
      props.nextChallenge();
    }
  }

  return (
    <div className="w-full max-w-md">
      <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 mb-5">
        Se as luzes se apagarem... 🧙‍♂️
      </p>
      <form action="" onSubmit={onSubmit}>
        <div className="flex gap-3">
          <Input
            className="w-full bg-[#000000] text-white border mb-3 border-[#0D1026] rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#0D1026] dark:bg-gray-800 dark:focus:ring-gray-600"
            placeholder="Digite a magia certa..."
            type="text"
            ref={inputRef}
          />
          <Button type="submit" variant="secondary">Soltar magia</Button>
        </div>
      </form>
    </div>
  );
}