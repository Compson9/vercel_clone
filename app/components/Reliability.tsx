"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Reliability() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="m-16 p-20 border-gray-600 gap-5 w-[1079px] h-[678px] flex flex-col border-[0.01px]">
      <div className="first">
        <h1 className="text-white text-3xl ml-10 font-semibold">
          Reliability you can count on.
        </h1>
      </div>
      <div className="second flex mr-16 justify-center items-center gap-10">
        <div className="Card flex p-10 flex-col gap-4 w-[358px] h-[236px]">
          <div>
            <div className="flex gap-3">
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
                className="lucide lucide-scale">
                <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                <path d="M7 21h10" />
                <path d="M12 3v18" />
                <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
              </svg>
              <p className="text-gray-500 text-left">Elastic Scalability</p>
            </div>
            <p className="text-white text-left text-[16px] mt-5">
              Handle unbelievable scale without a sweat, whether you’re on
              Fortune 500, or it’s your launch day.
            </p>
          </div>
        </div>
        <div className="Card flex p-10 flex-col gap-4 w-[358px] h-[236px]">
          <div>
            <div className="flex gap-3">
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
                className="lucide lucide-shield-check">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <p className="text-gray-500 text-left">Rock-solid security</p>
            </div>
            <p className="text-white text-left text-[16px] mt-5">
              Infrastructure designed to automatically mitigate DDoS attacks and
              protect your information.
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/uptime.png"
            alt="uptime image"
            width={358}
            height={236}
          />
        </div>
      </div>
    </motion.div>
  );
}
