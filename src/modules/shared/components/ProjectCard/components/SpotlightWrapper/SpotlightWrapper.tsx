"use client";

import SpotlightCard from "../../../_bits/SpotlightCard/SpotlightCard";

export function SpotlightWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SpotlightCard
      spotlightColor="rgba(999, 999, 999, 100)"
      className="rounded-lg shadow-sm"
    >
      {children}
    </SpotlightCard>
  );
}
