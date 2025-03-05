"use client";

import PixelCard from "../../../_bits/PixelCard/PixelCard";

export function PixelWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <PixelCard
      variant="default"
      className="h-[15.167rem]! w-full rounded-sm border-none shadow-sm"
    >
      {children}
    </PixelCard>
  );
}
