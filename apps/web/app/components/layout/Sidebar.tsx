"use client";

import Link from "next/link";
import { useState } from "react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: "🏠",
  },
  {
    name: "Projects",
    path: "/projects",
    icon: "🚀",
  },
  {
    name: "Skills",
    path: "/skills",
    icon: "⚡",
  },
  {
    name: "AI Assistant",
    path: "/chat",
    icon: "🤖",
  },
  {
    name: "Resume",
    path: "/resume",
    icon: "📄",
  },
  {
    name: "Contact",
    path: "/contact",
    icon: "🌐",
  },
];

export default function Sidebar() {

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed
          top-20
          left-5
          z-50
          md:hidden
          text-cyan-400
          text-2xl
        "
      >
        ☰
      </button>


      {/* Sidebar */}
      <aside
        className={`
          fixed
          top-0
          left-0
          h-screen
          w-72
          bg-black/80
          backdrop-blur-xl
          border-r
          border-white/10
          p-6
          z-40
          transform
          transition-transform
          ${
            open
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >

        {/* Logo */}
        <div className="
          text-3xl
          font-bold
          mb-10
          bg-gradient-to-r
          from-cyan-400
          to-red-500
          bg-clip-text
          text-transparent
        ">
          RES
        </div>


        {/* Menu */}
        <nav className="
          flex
          flex-col
          gap-4
        ">

          {menuItems.map((item) => (

            <Link
              key={item.path}
              href={item.path}
              onClick={() => setOpen(false)}
              className="
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                text-gray-300
                hover:bg-white/10
                hover:text-cyan-400
                transition
              "
            >

              <span>
                {item.icon}
              </span>

              <span>
                {item.name}
              </span>

            </Link>

          ))}

        </nav>


        {/* AI Status */}
        <div className="
          absolute
          bottom-8
          left-6
          right-6
          glass
          rounded-xl
          p-4
        ">

          <p className="text-sm text-gray-400">
            AI Assistant
          </p>

          <p className="
            text-green-400
            text-sm
            mt-1
          ">
            ● Online
          </p>

        </div>


      </aside>
    </>
  );
  }
