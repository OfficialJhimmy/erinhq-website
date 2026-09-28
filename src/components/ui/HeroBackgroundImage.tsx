import Image from "next/image";

interface HeroBackgroundImageProps {
  src: string;
  priority?: boolean;
}

// Decorative full-bleed hero background — dark gradient keeps foreground
// text at full contrast regardless of the underlying image.
export function HeroBackgroundImage({ src, priority = true }: HeroBackgroundImageProps) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Image src={src} alt="" fill priority={priority} className="object-cover opacity-25" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1B]/60 via-[#1B1B1B]/85 to-[#1B1B1B]" />
    </div>
  );
}
