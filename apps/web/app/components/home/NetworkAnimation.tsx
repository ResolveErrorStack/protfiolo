"use client";

import { motion } from "framer-motion";

export default function NetworkAnimation() {
  return (
    <div
      className="
        relative
        w-full
        h-72
        flex
        items-center
        justify-center
      "
    >

      {/* Connection Line */}
      <motion.div
        animate={{
          scaleX: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute
          w-64
          h-[2px]
          bg-gradient-to-r
          from-cyan-400
          to-red-500
        "
      />


      {/* User Node */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          left-10
          w-20
          h-20
          rounded-full
          glass
          border
          border-cyan-400
          flex
          items-center
          justify-center
          text-3xl
        "
      >
        👤
      </motion.div>


      {/* Center RES Node */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          w-24
          h-24
          rounded-full
          bg-black
          border-2
          border-cyan-400
          flex
          items-center
          justify-center
          text-cyan-400
          font-bold
          shadow-[0_0_30px_rgba(0,234,255,0.5)]
        "
      >
        RES
      </motion.div>


      {/* AI Node */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          right-10
          w-20
          h-20
          rounded-full
          glass
          border
          border-red-500
          flex
          items-center
          justify-center
          text-3xl
        "
      >
        🤖
      </motion.div>


      {/* Signal Particles */}
      <motion.span
        animate={{
          x: [-100, 100],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          w-3
          h-3
          rounded-full
          bg-cyan-400
        "
      />

    </div>
  );
            }
