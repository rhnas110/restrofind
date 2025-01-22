import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import "./index.css";
import { cn } from "../../../lib/utils";

export default function Modal({
  open,
  onOpenChange,
  children,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  );
}

function ModalOverlay({ className }: { className?: string }) {
  return (
    <Dialog.Overlay
      className={cn(
        "fixed inset-0 z-20 DialogOverlay bg-black/50 backdrop-blur-sm",
        className
      )}
    />
  );
}

Modal.Portal = Dialog.Portal;
Modal.Overlay = ModalOverlay;
Modal.Button = Dialog.Trigger;
Modal.Title = Dialog.Title;
Modal.Close = Dialog.Close;
