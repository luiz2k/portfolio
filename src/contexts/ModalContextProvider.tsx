"use client";

import Image from "next/image";
import { createContext, useState } from "react";

import { Modal, ModalContextType } from "./ModalContextProvider.d";

export const ModalContext = createContext({} as ModalContextType);

export function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modal, setModal] = useState<Modal>({
    isOpen: false,
    src: "/",
    alt: "",
  });

  function handleModal(src: string, alt: string) {
    setModal((prev) => ({ isOpen: !prev.isOpen, src, alt }));
  }

  function closeModal() {
    setModal((prev) => ({ ...prev, isOpen: !prev.isOpen }));
  }

  return (
    <ModalContext.Provider value={{ handleModal }}>
      <>
        {children}

        <article
          data-image={modal.isOpen}
          onClick={closeModal}
          className="invisible fixed left-0 top-0 z-10 flex size-full items-center justify-center overflow-hidden bg-white/5 p-5 opacity-0 backdrop-blur-sm duration-150 ease-in-out data-[image='true']:visible data-[image='true']:opacity-100"
        >
          <Image
            src={modal.src}
            alt={modal.alt}
            width={1280}
            height={720}
            data-image={modal.isOpen}
            className="scale-95 cursor-pointer rounded duration-150 ease-in-out data-[image='true']:scale-100"
          />
        </article>
      </>
    </ModalContext.Provider>
  );
}
