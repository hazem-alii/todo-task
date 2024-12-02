"use client";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { useState } from "react";

const Modal = ({ trigger, handleDelete }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleClose() {
    setIsOpen(false);
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent className="bg-white w-[288px] p-4 ">
        <p className="mb-2">Are you sure you want to delete this item?</p>
        <button style={{ marginRight: "2rem" }} onClick={handleClose}>
          Close
        </button>
        <button
          onClick={() => {
            handleDelete();
            handleClose();
          }}
        >
          Continue
        </button>
      </PopoverContent>
    </Popover>
  );
};

export default Modal;
