import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext";
import { X } from "@phosphor-icons/react";

export const Modal = ({ children }: any) => {
  const { isOpen, closeModal } = useContext(ModalContext);
  if (!isOpen) return null;

  return (
    <div className="w-screen h-screen bg-zinc-900 bg-opacity-80 fixed top-0 left-0 z-50 flex justify-center md:items-center">
      <div className="bg-primaryPistachio opacity-100 w-4/5 md:w-[700px] md:h-[540px] lg:h-[666px] lg:w-[942px] mt-6 rounded-2xl p-4 relative">
        <X
          size={32}
          className="text-red-400 hover:text-red-100 absolute right-4 cursor-pointer"
          onClick={closeModal}
        />
        <div className="mt-12">{children}</div>
      </div>
    </div>
  );
};