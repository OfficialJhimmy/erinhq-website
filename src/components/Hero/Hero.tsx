import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { GoArrowDownRight } from "react-icons/go";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#1B1B1B] text-center px-6 pt-32">
      <div className="absolute left-8 top-16 lg:top-24 md:block">
        <Image
          src="/images/erin-two.png"
          alt="Feyijimi Erinle"
          width={160}
          height={200}
          className="rounded-2xl object-cover"
          loading="lazy"
        />
      </div>

      {/* Use the motion.h1 component after dynamic import */}
      <h1
        className="font-heading text-transparent bg-gradient-to-r from-white to-[#FF8906] 
        text-4xl sm:text-5xl md:text-6xl lg:text-[100px] 
        tracking-wide
        font-normal text-center bg-clip-text "
      >
        I AM <br />
        FEYIJIMI <br />
        ERINLE
      </h1>

      <p
        className="text-[#E2E2E2] font-body text-base md:text-[20px] max-w-4xl leading-[30px]"
        style={{ marginTop: "24px" }}
      >
        The Multi-Hat Tech Professional. <br />A Software Engineer, Technical
        Writer, Open Source Contributor, Technical Content Strategist & Content
        Creator.
      </p>

      <p
        className="mt-7 text-[#E2E2E2] font-euclid max-w-3xl text-sm md:text-[18px] leading-[30px]"
        style={{ marginTop: "16px" }}
      >
        Whatever the title, I help teams and creators build software that works,
        explain it with clarity, and share it with the world in a way that
        inspires adoption and advocacy.
      </p>

      <Link
        href="/project"
        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-[#1B1B1B] font-body font-medium rounded-full transition-transform hover:scale-105"
        style={{ marginTop: "18px", padding: "16px" }}
      >
        Explore my work ↗
      </Link>

      <div className="absolute bottom-8 right-8 hidden md:block">
        <Image
          src="/images/erin-one.png"
          alt="Feyijimi Erinle"
          width={160}
          height={200}
          className="rounded-2xl object-cover z-[10]"
          loading="lazy"
        />
      </div>
      <div className="absolute bottom-8 left-8 flex flex-col space-y-2 text-[#E2E2E2]">
        <p className="font-body font-medium text-[20px]">
          Get In Touch With ERIN
        </p>

        <p className="font-body font-normal text-[18px] underline text-[#4D4D4D]">
          creatives@theerin.com
        </p>
      </div>
    </section>
  );
}
