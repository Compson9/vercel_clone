
import React from "react";
import { Button1 } from "./Button";
import { TypingAnimation1 } from "./TypingAnimation";

export default function MiniHero() {
  return (
    <div className="bg-black ">
      <div
        style={{
          backgroundImage: "url('/mini.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px", // Match original image height
          position: "relative", // For positioning child elements
          width: "100%",
        }}
      >
        <div className="flex justify-center items-center flex-col gap-4 p-8 absolute inset-0">
          {/* <h1 className="text-white text-center text-4xl font-semibold">
            Introducing Fluid Compute
          </h1> */}
          <TypingAnimation1/>
          <p className="text-white opacity-50">The power of servers in serverless forms</p>
          <Button1
            className="bg-white hover:border cursor-pointer hover:border-white text-black p-4 rounded-4xl hover:bg-black hover:text-white"
             title="Learn more"
            
          />
        </div>
      </div>
    </div>
  );
}