import { Dispatch, SetStateAction } from "react";

export type Modal = {
  isOpen: boolean;
  src: string;
  alt: string;
};

export type ModalContextType = {
  modal: Modal;
  setModal: Dispatch<SetStateAction<Modal>>;
};
