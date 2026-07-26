import React from "react";

type InputProps = {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  className?: string;
};


export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  className = "",
}: InputProps) {

  return (
    <div className="w-full">

      {label && (
        <label
          className="
            block
            text-sm
            text-gray-400
            mb-2
          "
        >
          {label}
        </label>
      )}


      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full
          px-4
          py-3
          rounded-xl
          bg-white/5
          border
          border-white/10
          text-white
          outline-none
          focus:border-cyan-400
          transition
          ${className}
        `}
      />

    </div>
  );
}
