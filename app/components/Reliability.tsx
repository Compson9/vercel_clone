import React from "react";
import Image from "next/image";

export default function Reliability() {
  return (
    <div className="m-16 p-20 border-gray-600 gap-5  w-[1079px] h-[678px] flex flex-col border-[0.01px]">
      <div className="first">
        <h1 className="text-white text-3xl ml-10 font-semibold">
          Reliability you can count on.
        </h1>
      </div>
      <div className="second flex mr-16 justify-center items-center gap-10">
        {/* Cards 1 section */}
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
        {/* Cards 2 section */}
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
        {/* Cards 3 section */}
        <div>
          <Image
            src="/uptime.png"
            alt="uptime image"
            width={358}
            height={236}
          />
        </div>
      </div>
      <div className="third flex mr-16 justify-center items-center gap-10">
        {/* Cards 4 section */}
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-globe-lock">
                <path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13" />
                <path d="M2 12h8.5" />
                <path d="M20 6V4a2 2 0 1 0-4 0v2" />
                <rect width="8" height="5" x="14" y="6" rx="1" />
              </svg>
              <p className="text-gray-500 text-left">Global performance</p>
            </div>
            <p className="text-white text-left text-[16px] mt-5">
              Automatically route traffic to over 100 edge locations around the
              globe, for a fast site, anywhere in the world.
            </p>
          </div>
        </div>
        {/* Cards 5 section */}
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-users">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <p className="text-gray-500 text-left">User protection</p>
            </div>
            <p className="text-white text-left text-[16px] mt-5">
              Vercel automatically caches your site to ensure that even if a
              backend service goes down, your site stays up.
            </p>
          </div>
        </div>
        {/* Cards 6 section */}
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-database">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                <path d="M3 12A9 3 0 0 0 21 12" />
              </svg>
              <p className="text-gray-500 text-left">Serverless Storage</p>
            </div>
            <p className="text-white text-left text-[16px] mt-5">
              Accelerate development with databases for the fastest frontends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
