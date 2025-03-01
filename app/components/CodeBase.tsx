import React from "react";
import { CodeBlock1 } from "./CodeBlock";
import { IconCloud1 } from "./IconCloud";

export default function CodeBase() {
  return (
    <div className="flex justify-center gap-16 items-center w-[1079px] h-[678px] p-20 mt-32 mx-24">
      <div className="left w-[719px]  h-[705px] ml-20">
        <div className="code">
          <CodeBlock1 />
          <p className=" mt-10 text-[18px] text-white">
            Bridging the best of Client and Server Rendering. <br />
            <span className="text-gray-500 text-[16px] font-semibold">
              Experience seamless integration, optimized performance, <br />
              and reduced bundle sizes like never before
            </span>
          </p>
          <button className="flex gap-3 px-[24px] mt-5 py-2 w cursor-pointer hover:opacity-60  border-gray-500 border-[0.01px] rounded-4xl">
            <p className="text-white">More About rendering</p>
          </button>
        </div>
        <div className="paragraph"></div>
      </div>
      <div className="right w-[359px] flex flex-col   h-[705px]">
        <div className="code">
          <IconCloud1 />
          <div className=" mt-[-10px]">
            <p className=" text-white">
              All the data. Connect with content, <br />{" "}
              <span className="text-gray-500 font-semibold">
                commerce or database platforms.
              </span>
            </p>
            <button className="flex gap-3 mt-5 px-6 py-2 cursor-pointer hover:opacity-60  border-gray-500 border-[0.01px] rounded-4xl">
              <p className="text-white">More About rendering</p>
            </button>
          </div>
        </div>
        <div className="paragraph"></div>
      </div>
    </div>
  );
}
