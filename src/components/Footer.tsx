import React from "react";
import Link from "next/link";
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
            Soda for the bold. Fizzi.
          </p>
        </div>

        {/* Spline Contra Challenge Credits */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-orange-300 pt-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-sky-800">
              A Project for the
            </p>
            <p className="mt-1 text-2xl font-black uppercase text-orange-600 md:text-3xl">
              Spline × Contra Challenge
            </p>
            <p className="mt-2 text-base font-semibold text-sky-950">
              Made with <span className="text-violet-600">Spline Hana</span> ✨
            </p>
          </div>

          <Link
            href="#how-it-was-made"
            className="mt-4 rounded-xl bg-violet-600 px-6 py-3 text-center text-lg font-bold uppercase tracking-wide text-white transition-all duration-200 hover:scale-105 hover:bg-violet-700"
          >
            How It Was Made
          </Link>
        </div>
      </div>
    </footer>
  );
}
