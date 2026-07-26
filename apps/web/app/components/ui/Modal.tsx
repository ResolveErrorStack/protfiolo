"use client";

import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};


export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {

  if (!isOpen) return null;


  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/70
        backdrop-blur-md
        px-6
      "
      onClick={onClose}
    >

      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full
          max-w-lg
          glass
          rounded-3xl
          p-8
          border
          border-white/10
        "
      >

        {/* Header */}
        <div
          className="
            flex
            justify-between
            items-center
            mb-6
          "
        >

          <h2
            className="
              text-2xl
              font-bold
              text-cyan-400
            "
          >
            {title}
          </h2>


          <button
            onClick={onClose}
            className="
              text-gray-400
              hover:text-red-400
              text-xl
            "
          >
            ✕
          </button>

        </div>


        {/* Content */}
        <div>
          {children}
        </div>


      </div>

    </div>
  );
}
