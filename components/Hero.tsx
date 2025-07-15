import React from "react";
import { Vortex } from "./ui/vortex";
import { TextReveal } from "./ui/TextReveal";

export function Hero() {
  return (
    <div className="w-[100%] mx-auto rounded-md h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={200}
        baseHue={180}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-2 w-full h-full"
      >
        <TextReveal />
      </Vortex>
    </div>
  );
}
