import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="mx-20 mt-40  border-gray-600 w-[1079px] h-[400px] justify-center self-center items-center flex gap-40">
      <div className="first flex flex-col gap-2">
        <p className="text-white text-[16px]">Product</p>
        <p className="text-[14px] text-gray-500">Ai</p>
        <p className="text-[14px] text-gray-500">Enterprise</p>
        <p className="text-[14px] text-gray-500">Fluid Compute</p>
        <p className="text-[14px] text-gray-500">Nextjs</p>
        <p className="text-[14px] text-gray-500">Observability</p>
        <p className="text-[14px] text-gray-500">Previews</p>
        <p className="text-[14px] text-gray-500">Previews</p>
        <p className="text-[14px] text-gray-500">Security</p>
        <p className="text-[14px] text-gray-500">Turbo</p>
      </div>
      <div className="first flex flex-col mt-[-30px] gap-2">
        <p className="text-white text-[16px]">Community</p>
        <p className="text-[14px] text-gray-500">Docs</p>
        <p className="text-[14px] text-gray-500">Guides</p>
        <p className="text-[14px] text-gray-500">Help</p>
        <p className="text-[14px] text-gray-500">Pricing</p>
        <p className="text-[14px] text-gray-500">Resources</p>
        <p className="text-[14px] text-gray-500">Solution Partners</p>
        <p className="text-[14px] text-gray-500">Templates</p>
      </div>
      <div className="first flex flex-col mt-[-30px]  gap-2">
        <p className="text-white text-[16px]">Company</p>
        <p className="text-[14px] text-gray-500">About</p>
        <p className="text-[14px] text-gray-500">Blog</p>
        <p className="text-[14px] text-gray-500">Careers</p>
        <p className="text-[14px] text-gray-500">Changelog</p>
        <p className="text-[14px] text-gray-500">Contact Us</p>
        <p className="text-[14px] text-gray-500">Partners</p>
        <p className="text-[14px] text-gray-500">Privacy Policy</p>
        <p className="text-[14px] text-gray-500">Legal</p>
      </div>
      <div className="first flex flex-col mt-[-30px]  gap-2">
        <p className="text-white text-[16px]">Social</p>
        <p className="text-[14px] text-gray-500">Github</p>
        <p className="text-[14px] text-gray-500">LinkedIn</p>
        <p className="text-[14px] text-gray-500">Twitter</p>
        <p className="text-[14px] text-gray-500">Youtube</p>
      </div>
      <div className="five">
        <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={30}
        height={30}
        />
      </div>
    </footer>
  );
}
