"use client";

import { ModalContext } from "@/contexts/ModalContextProvider";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useContext } from "react";

export default function Modal() {
  const pathname = usePathname();
  const { modal, setModal } = useContext(ModalContext);

  // Usar modal apenas nas rotas `/` ou `/projetos`
  const activateModal: boolean = pathname === "/" || pathname === "/projetos";

  return (
    <>
      {activateModal && (
        <article
          data-image={modal.isOpen}
          onClick={() => setModal((prev) => ({ ...prev, isOpen: false }))}
          className="invisible fixed left-0 top-0 z-10 flex size-full items-center justify-center overflow-hidden bg-white/5 p-5 opacity-0 backdrop-blur-sm duration-150 ease-in-out data-[image='true']:visible data-[image='true']:opacity-100"
        >
          <Image
            src={modal.src}
            alt={modal.alt}
            width={1280}
            height={720}
            data-image={modal.isOpen}
            priority
            className="scale-95 cursor-pointer rounded duration-150 ease-in-out data-[image='true']:scale-100"
          />
        </article>
      )}
    </>
  );
}
