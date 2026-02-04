"use client";

import Link from "next/link";
import { FizzyLogo } from "@/components/FizzyLogo";

export default function ChallengePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-yellow-300 to-lime-200">
            <div className="mx-auto max-w-4xl px-6 py-20">
                {/* Header */}
                <div className="mb-16 text-center">
                    <FizzyLogo className="mx-auto mb-8 h-24 text-sky-800" />
                    <h1 className="mb-4 text-5xl font-black uppercase text-orange-500 md:text-7xl">
                        Wait... this isn&apos;t real?
                    </h1>
                    <p className="text-2xl font-semibold text-sky-950">
                        Not yet, but it could be! 🥤
                    </p>
                </div>

                {/* Main Content */}
                <div className="space-y-12">
                    {/* Challenge Info */}
                    <div className="rounded-3xl bg-white/60 p-8 shadow-xl backdrop-blur-sm">
                        <h2 className="mb-4 text-3xl font-bold text-sky-950">
                            About This Project
                        </h2>
                        <p className="text-lg leading-relaxed text-slate-700">
                            <span className="font-bold text-orange-600">fIZZY</span> is a
                            showcase project created for the{" "}
                            <span className="font-bold text-sky-700">
                                Contra x Spline Challenge
                            </span>
                            . It&apos;s designed to demonstrate the incredible capabilities of{" "}
                            <span className="font-bold text-purple-600">Spline Hana</span> for
                            creating stunning 3D web experiences.
                        </p>
                    </div>

                    {/* Spline Hana */}
                    <div className="rounded-3xl bg-gradient-to-r from-purple-100 to-pink-100 p-8 shadow-xl">
                        <h2 className="mb-4 text-3xl font-bold text-purple-900">
                            ✨ Powered by Spline Hana
                        </h2>
                        <p className="text-lg leading-relaxed text-purple-800">
                            Spline Hana is a revolutionary tool that makes creating immersive
                            3D experiences accessible to everyone. With its intuitive
                            interface and powerful features, you can bring your wildest
                            creative visions to life on the web.
                        </p>
                    </div>

                    {/* What if it was real? */}
                    <div className="rounded-3xl bg-gradient-to-r from-orange-100 to-yellow-100 p-8 shadow-xl">
                        <h2 className="mb-4 text-3xl font-bold text-orange-900">
                            🍊 What if fIZZY was real?
                        </h2>
                        <p className="text-lg leading-relaxed text-orange-800">
                            Imagine a world where you could actually taste these fizzy,
                            refreshing flavors! While fIZZY exists only in the digital realm
                            for now, this project shows how engaging product experiences can
                            be created using modern web technologies.
                        </p>
                    </div>

                    {/* Credits */}
                    <div className="rounded-3xl bg-sky-100 p-8 shadow-xl">
                        <h2 className="mb-4 text-3xl font-bold text-sky-900">
                            🙏 Credits & Thanks
                        </h2>
                        <ul className="space-y-2 text-lg text-sky-800">
                            <li>
                                🎨 <span className="font-semibold">Spline</span> - For the
                                amazing 3D design tool
                            </li>
                            <li>
                                💼 <span className="font-semibold">Contra</span> - For hosting
                                this creative challenge
                            </li>
                            <li>
                                🚀 <span className="font-semibold">Next.js & React Three Fiber</span>{" "}
                                - For the technical foundation
                            </li>
                            <li>
                                💫 <span className="font-semibold">GSAP</span> - For smooth
                                animations
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Back Button */}
                <div className="mt-16 text-center">
                    <Link
                        href="/"
                        className="inline-block rounded-xl bg-orange-600 px-8 py-4 text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-orange-700"
                    >
                        ← Back to fIZZY
                    </Link>
                </div>
            </div>
        </div>
    );
}
