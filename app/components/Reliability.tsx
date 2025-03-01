"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Reliability() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="m-16 p-20 border-gray-600 gap-5 w-[1079px] h-[678px] flex flex-col border-[0.01px]"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="first"
      >
        <h1 className="text-white text-3xl ml-10 font-semibold">
          Reliability you can count on.
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, staggerChildren: 0.3 }}
        viewport={{ once: true }}
        className="second flex mr-16 justify-center items-center gap-10"
      >
        {[ 
          {
            title: "Elastic Scalability",
            text: "Handle unbelievable scale without a sweat, whether you’re on Fortune 500, or it’s your launch day.",
            icon: "lucide lucide-scale"
          },
          {
            title: "Rock-solid security",
            text: "Infrastructure designed to automatically mitigate DDoS attacks and protect your information.",
            icon: "lucide lucide-shield-check"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="Card flex p-10 flex-col gap-4 w-[358px] h-[236px]"
          >
            <div className="flex gap-3">
              <svg className={item.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></svg>
              <p className="text-gray-500 text-left">{item.title}</p>
            </div>
            <p className="text-white text-left text-[16px] mt-5">{item.text}</p>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Image src="/uptime.png" alt="uptime image" width={358} height={236} />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="third flex mr-16 justify-center items-center gap-10"
      >
        <div className="Card flex p-10 flex-col gap-4 w-[358px] h-[236px]">
          <div className="flex gap-3">
            <svg className="lucide lucide-globe-lock" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></svg>
            <p className="text-gray-500 text-left">Global performance</p>
          </div>
          <p className="text-white text-left text-[16px] mt-5">
            Automatically route traffic to over 100 edge locations around the globe, for a fast site, anywhere in the world.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
