"use client";

import PixelCard from "../../../_bits/PixelCard/PixelCard";

export function PixelWrapper({ children }: { children: React.ReactNode }) {
  return (
    <PixelCard
      colors="#c39b4b"
      gap={16}
      className="h-[9.2rem]! w-full rounded-sm border-none shadow-sm"
    >
      {children}
    </PixelCard>
  );
}
