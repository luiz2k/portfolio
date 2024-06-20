"use client";

import { createContext, useState } from "react";

import { Modal, ModalContextType } from "./ModalContextProvider.d";
import { usePathname } from "next/navigation";

export const ModalContext = createContext({} as ModalContextType);

export function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modal, setModal] = useState<Modal>({
    isOpen: false,
    src: "/noise.webp",
    alt: "",
  });

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
}
