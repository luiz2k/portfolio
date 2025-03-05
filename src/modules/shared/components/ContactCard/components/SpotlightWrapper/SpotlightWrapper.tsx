"use client";

import SpotlightCard from "../../../_bits/SpotlightCard/SpotlightCard";

export function SpotlightWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SpotlightCard
      spotlightColor="rgba(30, 30, 30, 0.15)"
      className="rounded-sm shadow-sm"
    >
      {children}
    </SpotlightCard>
  );
}
