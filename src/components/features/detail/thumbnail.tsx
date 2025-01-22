import { MdFullscreen } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { DialogContent } from "@radix-ui/react-dialog";
import Modal from "../../ui/modal";
export const Thumbnail = ({ image, alt }: { image: string; alt: string }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="relative mb-4">
      <img
        src={image}
        alt={alt || "Thumbnail"}
        className="object-cover object-center w-full rounded-md max-h-[400px] select-none"
      />
      <ModalThumbnail open={open} onOpenChange={setOpen} image={image} />
      <i
        onClick={() => setOpen(true)}
        title="Fullscreen"
        className="absolute inline-flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-white/75 bottom-2 right-2 animate-pulse"
      >
        <MdFullscreen size={32} />
      </i>
    </div>
  );
};

function ModalThumbnail({
  open,
  onOpenChange,
  image,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  image: string;
}) {
  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <Modal.Overlay className="bg-black/85" />
      <DialogContent className="fixed top-0 left-0 z-20 flex items-center justify-center p-4 h-dvh w-dvw">
        <div className="absolute top-0 right-0">
          <Modal.Close
            className="absolute text-stone-400 md:top-8 md:right-8 hover:text-stone-500 top-4 right-4"
            asChild
            aria-label="Close"
          >
            <button className="p-1 border-2 rounded-full border-stone-400 hover:border-stone-500">
              <IoClose className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </Modal.Close>
        </div>
        <div className="overflow-hidden border shadow-lg border-stone-500 md:w-9/12 rounded-2xl aspect-video">
          <img
            src={image}
            alt="Thumbnail"
            loading="lazy"
            className="object-cover object-center w-full h-full rounded select-none"
          />
        </div>
      </DialogContent>
    </Modal>
  );
}
