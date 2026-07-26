import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};


export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {

  const styles =
    variant === "primary"
      ? `
        bg-gradient-to-r
        from-cyan-400
        to-red-500
        text-black
        font-bold
      `
      : `
        border
        border-cyan-400
        text-cyan-400
        hover:bg-cyan-400
        hover:text-black
      `;


  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6
        py-3
        rounded-xl
        transition
        hover:scale-105
        ${styles}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
