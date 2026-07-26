"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Chat AI",
    path: "/chat",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-xl
      bg-black/40
      border-b
      border-white/10
    ">

      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
      ">


        {/* Logo */}
        <Link
          href="/"
          className="
            text-2xl
            font-bold
            bg-gradient-to-r
            from-cyan-400
            to-red-500
            bg-clip-text
            text-transparent
          "
        >
          RES
        </Link>


        {/* Desktop Menu */}
        <div className="
          hidden
          md:flex
          items-center
          gap-8
        ">

          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="
                text-gray-300
                hover:text-cyan-400
                transition
              "
            >
              {item.name}
            </Link>
          ))}

        </div>


        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            text-cyan-400
            text-2xl
          "
        >
          ☰
        </button>

      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="
          md:hidden
          px-6
          pb-6
          flex
          flex-col
          gap-4
          bg-black/80
        ">

          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setOpen(false)}
              className="
                text-gray-300
                hover:text-cyan-400
              "
            >
              {item.name}
            </Link>
          ))}

        </div>
      )}

    </nav>
  );
  }
