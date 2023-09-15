import Link from "next/link";
import React from "react";

import LogoSvg from "@/components/Logo/LogoSvg";

interface LogoProps {
  width: number;
}

const Logo = ({ width }: LogoProps) => {
  return (
    <Link href="/">
      <div className="flex flex-row gap-2 justify-center items-center text-gray-900 hover:scale-105 hover:text-violet-500">
        <LogoSvg width={width} />
        <h1 className="text-2xl font-bold transition-all">Chat Settelement</h1>
      </div>
    </Link>
  );
};

export default Logo;
