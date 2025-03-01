"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export default function Rollback() {
  return (
    <div className="m-16 p-20 border-gray-600 gap-32 w-[1079px] h-[578px] flex justify-between items-center border-[0.01px] relative">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-[442px] h-[481px]">
        <div className="flex mr-24 gap-4 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="gray"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-rotate-cw">
            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
          </svg>
          <p className="opacity-90 text-gray-300">Instant Rollback</p>
        </div>
        <p className="text-white max-w-[442px] font-semibold text-[18px] mt-4">
          Go ahead, deploy on Friday. <br />
          <span className="text-gray-500 font-semibold">Instantly</span>
          <span className="text-gray-500 font-semibold">
            rollback to a working deployment.
          </span>
        </p>
        <div className="mt-12">
          <Image
            src="/rollback.png"
            alt="ship image"
            width={444}
            height={333}
          />
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-[539px] mt-20 h-[578px]">
        <div className="flex mr-24 gap-4 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="gray"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-database-backup">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 12a9 3 0 0 0 5 2.69" />
            <path d="M21 9.3V5" />
            <path d="M3 5v14a9 3 0 0 0 6.47 2.88" />
            <path d="M12 12v4h4" />
            <path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" />
          </svg>
          <p className="opacity-90 text-gray-300">Conformance</p>
        </div>
        <p className="text-white max-w-[442px] font-semibold text-[18px] mt-4">
          Move fast, don’t break things. Keep <br />
          <span className="text-gray-500 font-semibold">
            quality high while maintaining velocity <br /> with Enterprise
            Monorepos.
          </span>
        </p>
        <div className="mt-12">
          <Image src="/owners.png" alt="ship image" width={442} height={301} />
        </div>
      </motion.div>
    </div>
  );
}
