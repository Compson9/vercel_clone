"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Collaborative() {
  return (
    <div className="m-16 p-20 border-gray-600 gap-32 w-[1079px] h-[578px] flex justify-between items-center border-[0.01px]">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="left w-[442px] h-[481px]"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex mr-24 gap-4 mb-2"
        >
          <Image src="/greater.png" width={16} height={16} alt="image" />
          <p className="opacity-90 text-gray-300">Git-connected Deploys</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white max-w-[442px] font-semibold text-[18px] mt-4"
        >
          From localhost to https, in seconds. <br />
          <span className="text-gray-500 font-semibold">Deploy from Git or your CLI.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <Image src="/ship.png" alt="ship image" width={444} height={333} />
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="right w-[539px] mt-20 h-[578px]"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex mr-24 gap-4 mb-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            opacity={50}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
            />
          </svg>
          <p className="opacity-90 text-gray-300">Git-connected Deploys</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white max-w-[374px] font-semibold text-[18px] mt-4"
        >
          Every deploy is remarkable. <span className="text-gray-500 font-semibold">Chat with</span> <br />
          <span className="text-gray-500 font-semibold">your team on real, production-grade UI, not</span> <br />
          <span className="text-gray-500 font-semibold">just designs</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="image mt-12"
        >
          <Image src="/swap.png" alt="swap image" width={442} height={301} />
        </motion.div>
      </motion.div>
    </div>
  );
}
