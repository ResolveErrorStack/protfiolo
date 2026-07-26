"use client";

import { motion } from "framer-motion";

export default function ProfileAnimation() {
  return (
    <div
      className="
        relative
        w-80
        h-80
        flex
        items-center
        justify-center
      "
    >

      {/* Outer Glow Circle */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          w-72
          h-72
          rounded-full
          border
          border-cyan-400/40
        "
      />


      {/* Profile Container */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          w-52
          h-52
          rounded-full
          overflow-hidden
          border-4
          border-cyan-400
          shadow-[0_0_40px_rgba(0,234,255,0.5)]
        "
      >

        <img
          src="/profile.png"
          alt="Developer Profile"
          className="
            w-full
            h-full
            object-cover
          "
        />

      </motion.div>


      {/* Floating Tech Nodes */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute
          top-5
          right-5
          px-4
          py-2
          rounded-full
          bg-black/70
          border
          border-cyan-400
          text-cyan-400
          text-sm
        "
      >
        AI 🤖
      </motion.div>


      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-8
          left-0
          px-4
          py-2
          rounded-full
          bg-black/70
          border
          border-red-500
          text-red-400
          text-sm
        "
      >
        CODE ⚡
      </motion.div>


    </div>
  );
}
