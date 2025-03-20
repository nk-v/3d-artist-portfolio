import * as Dialog from "@radix-ui/react-dialog";

import { ReactNode } from "react";

type TModal = {
  children: ReactNode;
};

export default function Modal({ children }: TModal) {
  return <Dialog.Root>{children}</Dialog.Root>;
}

function ModalContent({ children }: TModal) {
  return (
    <Dialog.Portal>
      <Dialog.Title />
      <Dialog.Description />
      <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
      <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}

Modal.Trigger = Dialog.Trigger;
Modal.Content = ModalContent;
