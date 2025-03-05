"use client";

import DecryptedText from "@/modules/shared/components/_bits/DecryptedText/DecryptedText";

export function DecipherText() {
  return (
    <h1 className="text-accent flex flex-col items-center text-5xl font-bold md:items-stretch md:text-6xl">
      <DecryptedText
        text="Desenvolvedor"
        animateOn="view"
        revealDirection="start"
        sequential={true}
      />

      <DecryptedText
        text="Full Stack"
        animateOn="view"
        revealDirection="start"
        sequential={true}
      />
    </h1>
  );
}
