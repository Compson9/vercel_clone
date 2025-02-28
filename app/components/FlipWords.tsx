import React from "react";
import { FlipWords } from "../../components/ui/flip-words";

export function FlipWords1() {
  const words = ["Nuxt", "React", "Vite", "Next", "python", "Angular", "Vue"];

  return (
    <div className=" flex justify-center items-center px-4">
      <div className="text-2xl mx-auto font-normal text-white dark:text-neutral-400">
        Your
        <FlipWords className="text-red-400" words={words} /> 
        your way
      </div>
    </div>
  );
}
