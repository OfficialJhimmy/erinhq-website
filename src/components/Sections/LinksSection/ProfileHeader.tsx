// components/ProfileHeader.tsx
import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  tagline: string;
  avatarSrc: string;
};

const ProfileHeader: React.FC<Props> = ({ name, tagline, avatarSrc }) => {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-2 ring-white/10 dark:ring-white/5">
        <Image
          src={avatarSrc}
          alt={`${name} avatar`}
          width={128}
          height={128}
          className="object-cover"
          priority
        />
      </div>

      <h1 className="mt-4 text-2xl sm:text-3xl font-heading text-white">{name}</h1>
      <p className="mt-1 text-sm sm:text-base font-body text-gray-200/80 max-w-xs">
        {tagline}
      </p>
    </header>
  );
};

export default ProfileHeader;