"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

// Runaway component definition
export default function Runaway() {
  return (
    <div className="bg-black flex flex-col lg:flex-row gap-4 lg:gap-40 m-32">
      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="right flex w-[919px] gap-10">
        <div className="flex flex-col gap-5">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-500 leading-8 text-[22px]">
            <span className="font-extrabold text-[22px] text-white">
              run away
            </span>{" "}
            build times from 7m to 40s.
            <span className="flex gap-2">
              <Image
                src="/leonardo.png"
                alt="leonardo"
                width={100}
                height={100}
              />
              saw 95% reduction in page
            </span>
            load times.{" "}
            <span className="font-extrabold text-[22px] text-white">
              _Zapier
            </span>{" "}
            saw 24x faster builds
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} // Initial animation state
            whileInView={{ opacity: 1, scale: 1 }} // Animation state when in view
            transition={{ duration: 0.8, delay: 0.4 }}>
            {" "}
            
            <Image
              src="/tab.png"
              height={500}
              className="cursor-pointer"
              width={500}
              alt="tab"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }} // Initial animation state
        whileInView={{ opacity: 1, x: 0 }} // Animation state when in view
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
        viewport={{ once: true }} // Animate only once when in view
        className="left mt-0 lg:mt-[-50px] max-w-[260px]">
        <p className="text-white">
          Get started using our pre-built templates. Easily stream long-running
          LLM responses for a better user experience with zero-config
          infrastructure that’s always globally performant.
        </p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }} // Initial animation state
          whileInView={{ opacity: 1, scale: 1 }} // Animation state when in view
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white text-black flex cursor-pointer mt-5 justify-center items-center gap-6 px-8 py-3 text-[12px] font-semibold rounded-4xl">
          Deploy AI Apps in seconds
          <Image src="/star.png" alt="star" height={20} width={20} />
        </motion.button>
      </motion.div>
    </div>
  );
}
