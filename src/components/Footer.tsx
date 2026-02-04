import React from "react";
import { FizzyLogo } from "./FizzyLogo";
import CircleText from "./CircleText";


type Props = {};

export default function Footer({ }: Props) {
  return (
    <footer className="bg-[#FEE832] text-[#FE6334]">
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-4 py-10">
        <FizzyLogo />
        <div className="absolute right-24 top-0 size-28 origin-center -translate-y-14 md:size-48 md:-translate-y-28">
          <CircleText />
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold text-sky-950">
            Project made to showcase <span className="text-orange-600">Spline Hana</span>
          </p>
          <p className="mt-2 text-sm text-sky-800">
            Created for the <span className="font-bold">Contra x Spline Challenge</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
