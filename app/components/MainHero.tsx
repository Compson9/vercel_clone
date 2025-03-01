"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button1 } from "./Button";

// MainHero component definition
export default function MainHero() {
  return (
    <div className="bg-black m-16 mt-5">
      <div
        style={{
          backgroundImage: "url('/main1.png')", // Background image for the hero section
          backgroundSize: "cover", // Ensure the background image covers the entire div
          backgroundPosition: "center", // Center the background image
          height: "600px", // Match original image height
          position: "relative", // For positioning child elements
          width: "1079px", // Full width
        }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initial animation state
          whileInView={{ opacity: 1, y: 0 }} // Animation state when in view
          transition={{ duration: 0.5, ease: "easeOut" }} // Animation duration and easing
          viewport={{ once: true }} // Animate only once when in view
          className="flex justify-center mt-[-200px] items-center flex-col gap-4 p-8 absolute inset-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }} // Initial animation state
            whileInView={{ opacity: 1, y: 0 }} // Animation state when in view
            transition={{ duration: 0.8, delay: 0.2 }} // Animation duration and delay
            className="text-white text-center text-5xl font-semibold">
            Your complete platform for the web
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            whileInView={{ opacity: 1, y: 0 }} // Animation state when in view
            transition={{ duration: 0.8, delay: 0.4 }} // Animation duration and delay
            className="text-gray-500 opacity-50">
            Vercel provides the developer tools and cloud infrastructure
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            whileInView={{ opacity: 1, y: 0 }} // Animation state when in view
            transition={{ duration: 0.8, delay: 0.6 }} // Animation duration and delay
            className="text-gray-500 opacity-50 mt-[-10px]">
            to build, scale, and secure a faster, more personalized web.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} // Initial animation state
            whileInView={{ opacity: 1, scale: 1 }} // Animation state when in view
            transition={{ duration: 0.8, delay: 0.8 }} // Animation duration and delay
            className="flex justify-center gap-8 mt-5">
            <button className="flex justify-between hover:opacity-70 items-center p-4 cursor-pointer rounded-4xl border hover:border-white hover:bg-gray-950 gap-2 bg-black">
              <Image
                src="/vercel.svg"
                alt="Vercel logo"
                width={15}
                height={15}
              />
              <span className="text-[12px] text-white font-semibold">
                Start deploying
              </span>
            </button>

            <Button1
              className="bg-white hover:border hover:border-white text-black p-6 rounded-4xl hover:bg-black hover:text-white"
              title="Get a Demo"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
