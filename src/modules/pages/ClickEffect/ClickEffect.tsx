"use client";

import ClickSpark from "@/modules/shared/components/_bits/ClickSpark/ClickSpark";

export function ClickEffect({ children }: { children: React.ReactNode }) {
  return (
    <ClickSpark
      sparkColor="#c39b4b"
      sparkSize={8}
      sparkRadius={50}
      sparkCount={8}
      duration={400}
      extraScale={0.5}
    >
      {children}
    </ClickSpark>
  );
}
