import React from "react";
import { Button1 } from "./Button";
import { TypingAnimation1 } from "./TypingAnimation";

// MiniHero component definition
export default function MiniHero() {
  return (
    <div className="bg-black m-24">
      <div
        style={{
          backgroundImage: "url('/mini.png')", // Background image for the hero section
          backgroundSize: "cover", // Ensure the background image covers the entire div
          backgroundPosition: "center", // Center the background image
          height: "400px", // Match original image height
          position: "relative", // For positioning child elements
          width: "1079px", // Full width
        }}
      >
        <div className="flex justify-center items-center flex-col gap-4 p-8 absolute inset-0">
          {/* Typing animation component */}
          <TypingAnimation1 />
          {/* Subtitle text */}
          <p className="text-white opacity-50">The power of servers in serverless forms</p>
          {/* Button component */}
          <Button1
            className="bg-white hover:border cursor-pointer hover:border-white text-black p-4 rounded-4xl hover:bg-black hover:text-white" 
            title="Learn more"
          />
        </div>
      </div>
    </div>
  );
}