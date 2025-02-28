import Image from "next/image";
import { Button1 } from "./Button";

export default function MainHero() {
  return (
    <div className="bg-black mt-5">
         <div
           style={{
             backgroundImage: "url('/main1.png')",
             backgroundSize: "cover",
             backgroundPosition: "center",
             height: "600px", // Match original image height
             position: "relative", // For positioning child elements
             width: "100%",
           }}
         >
           <div className="flex justify-center mt-[-200px] items-center flex-col gap-4 p-8 absolute inset-0">
             <h1 className="text-white text-center text-5xl font-semibold">
               Your complete platform for the web
             </h1>
             <p className="text-white opacity-50">Vercel provides the developer tools and cloud infrastructure </p>
             <p className="text-white opacity-50 mt-[-10px]">to build, scale, and secure a faster, more personalized web.</p>

    <div className="flex justify-center gap-4 mt-5">
            <button className="flex justify-between items-center p-2 cursor-pointer rounded-4xl border hover:border-white gap-2 bg-black">
                <Image
                src="/vercel.svg"
                alt="Vercel logo"
                width={15}
                height={15}
                />
                <span className="text-[12px] text-white font-semibold">Start deploying</span>
            </button>
             
             <Button1
             className="bg-white hover:border hover:border-white text-black p-4 rounded-4xl hover:bg-black hover:text-white"
             title="Learn more"
           />
    </div>
            
           </div>
         </div>
       </div>
  )
}
