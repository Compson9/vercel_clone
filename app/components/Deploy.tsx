import Image from "next/image";
import ImageMarquee from "./ImageMarquee";


export default function Deploy() {
  return (
    <div className="m-16 p-20 border-gray-600 gap-10 w-[1079px] h-[878px] flex justify-between items-center border-[0.01px]">
      <div className="first w-[358px] h-[709px] mt-[250px]">
        <h1 className="text-white mb-10 text-3xl">
          Deploy your first app in seconds
        </h1>
        <Image
          src="/cli.png"
          width={262}
          height={262}
          alt="CLI"
          className="cursor-pointer"
        />
      </div>

      {/* Image Marquee Component */}
      <ImageMarquee />
    </div>
  );
}
