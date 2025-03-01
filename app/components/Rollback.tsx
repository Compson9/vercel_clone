"use client"
import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import Image from "next/image";

export default function Reliability() {
  return (
    <div className="m-16 p-20 border-gray-600 gap-5 w-[1079px] h-[678px] flex flex-col border-[0.01px]">
      <motion.div 
        className="first"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-white text-3xl ml-10 font-semibold">
          Reliability you can count on.
        </h1>
      </motion.div>
      <div className="second flex mr-16 justify-center items-center gap-10">
        {[{
          icon: "scale",
          title: "Elastic Scalability",
          description: "Handle unbelievable scale without a sweat, whether you’re on Fortune 500, or it’s your launch day."
        }, {
          icon: "shield-check",
          title: "Rock-solid security",
          description: "Infrastructure designed to automatically mitigate DDoS attacks and protect your information."
        }].map((item, index) => (
          <motion.div 
            key={index}
            className="Card flex p-10 flex-col gap-4 w-[358px] h-[236px]"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-${item.icon}`}>
                  {item.icon === "scale" ? (
                    <>
                      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                      <path d="M7 21h10" />
                      <path d="M12 3v18" />
                      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                    </>
                  ) : (
                    <>
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                      <path d="m9 12 2 2 4-4" />
                    </>
                  )}
                </svg>
                <p className="text-gray-500 text-left">{item.title}</p>
              </div>
              <p className="text-white text-left text-[16px] mt-5">{item.description}</p>
            </div>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image src="/uptime.png" alt="uptime image" width={358} height={236} />
        </motion.div>
      </div>
      <motion.div 
        className="third flex mr-16 justify-center items-center gap-10"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="Card flex p-10 flex-col gap-4 w-[358px] h-[236px]">
          <div>
            <div className="flex gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe-lock">
                <path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13" />
                <path d="M2 12h8.5" />
                <path d="M20 6V4a2 2 0 1 0-4 0v2" />
                <rect width="8" height="5" x="14" y="6" rx="1" />
              </svg>
              <p className="text-gray-500 text-left">Global performance</p>
            </div>
            <p className="text-white text-left text-[16px] mt-5">
              Automatically route traffic to over 100 edge locations around the globe, for a fast site, anywhere in the world.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
