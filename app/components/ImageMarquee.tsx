import Image from "next/image";
import { Marquee } from "../../components/magicui/marquee"; 

const images1 = ["/next.png", "/react.png", "/astro.png"];
const images2 = ["/svelte.png", "/nuxt.png", "/python.png"];

export default function ImageMarquee() {
  return (
    <div className="flex gap-10">
      {/* First column */}
      <Marquee vertical pauseOnHover className="[--duration:15s] w-[330px] h-[500px]">
        {images1.map((src, index) => (
          <Image key={index} src={src} width={330} height={170} alt="Tech Logo" className="cursor-pointer" />
        ))}
      </Marquee>

      {/* Second column (Reverse Direction) */}
      <Marquee vertical reverse pauseOnHover className="[--duration:15s] w-[330px] h-[500px]">
        {images2.map((src, index) => (
          <Image key={index} src={src} width={330} height={170} alt="Tech Logo" className="cursor-pointer" />
        ))}
      </Marquee>
    </div>
  );
}
