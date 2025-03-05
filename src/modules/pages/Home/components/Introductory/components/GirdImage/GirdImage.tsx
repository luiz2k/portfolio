"use client";

import GridDistortion from "@/modules/shared/components/_bits/GridDistortion/GridDistortion";

export function GirdImage() {
  return (
    <div className="size-60 overflow-hidden rounded-full border-2 border-black object-cover">
      <GridDistortion
        imageSrc="/luiz-01.jpg"
        grid={10}
        mouse={0.1}
        strength={0.15}
        relaxation={0.9}
      />
    </div>
  );
}
