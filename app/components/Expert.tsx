import React from "react";
import { TextAnimate1 } from "./AnimateText";

export default function Expert() {
  return (
    <div className="m-16 p-20 border-gray-600 gap-32  w-[1079px] h-[78px] flex justify-between items-center border-[0.01px]">
      <div className="first w-[719px]">
        <button className="bg-black border flex hover:opacity-80 justify-around items-center cursor-pointer gap-10 py-4 rounded-4xl px-24">
         <TextAnimate1/>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-arrow-right  ">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="second flex flex-col w-[500px] gap-5">
        <button className="bg-white border px-5 hover:opacity-80 flex justify-around items-center cursor-pointer gap-10 py-4 rounded-4xl ">
          <p className="text-black">Talk to Expert</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="black"
            className="size-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
        <button className="bg-black border px-5 hover:opacity-80 flex justify-around items-center cursor-pointer gap-10 py-4 rounded-4xl ">
          <p className="text-white">Get an enterprise trial</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            className="size-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
