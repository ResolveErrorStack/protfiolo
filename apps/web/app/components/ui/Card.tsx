import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};


export default function Card({
  children,
  className = "",
}: CardProps) {

  return (
    <div
      className={`
        glass
        rounded-2xl
        p-6
        border
        border-white/10
        hover:border-cyan-400/50
        transition
        duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}
