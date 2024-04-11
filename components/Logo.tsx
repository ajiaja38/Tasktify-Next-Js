import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition hidden md:flex items-start gap-x-2">
        <Image src="/tasktify.png" alt="logo" height={30} width={30} />
        <p className="text-lg text-neutral-700 pb-1 font-bold">Tasktify</p>
      </div>
    </Link>
  );
};

export default Logo;
