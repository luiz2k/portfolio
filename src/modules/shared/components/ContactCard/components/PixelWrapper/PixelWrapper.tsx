"use client";

import PixelCard from "../../../_bits/PixelCard/PixelCard";

export function PixelWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <PixelCard
      colors="#c39b4b"
      gap={16}
      className="h-[15.167rem]! w-full rounded-sm border-none shadow-sm"
    >
      {children}
    </PixelCard>
  );
}
