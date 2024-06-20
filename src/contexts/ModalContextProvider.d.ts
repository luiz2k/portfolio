export type Modal = {
  isOpen: boolean;
  src: string;
  alt: string;
};

export type ModalContextType = {
  handleModal(src: string, alt: string): void;
};
