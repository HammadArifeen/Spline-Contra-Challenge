"use client";

import React from "react";
import { Bounded } from "@/components/Bounded";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HowItWasMade() {
  useGSAP(() => {
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".how-made-section",
        start: "top bottom",
        end: "top center",
        scrub: 1,
      },
    });

    scrollTl.fromTo(
      "body",
      { backgroundColor: "#D9F99D" },
      { backgroundColor: "#7C3AED", overwrite: "auto" }
    );

    gsap.from(".how-made-title .char", {
      scrollTrigger: {
        trigger: ".how-made-title",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
      y: 50,
      opacity: 0,
      stagger: 0.02,
    });

    gsap.from(".how-made-card", {
      scrollTrigger: {
        trigger: ".how-made-cards",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
      y: 80,
      opacity: 0,
      stagger: 0.15,
    });
  });

  const steps = [
    {
      number: "01",
      title: "Spline Hana",
      description:
        "The 3D soda cans were meticulously crafted in Spline Hana, leveraging its powerful real-time 3D design capabilities for web-optimized assets.",
      color: "bg-pink-500",
    },
    {
      number: "02",
      title: "React Three Fiber",
      description:
        "Spline exports were integrated into React Three Fiber, enabling seamless 3D rendering within the React ecosystem with full interactivity.",
      color: "bg-cyan-400",
    },
    {
      number: "03",
      title: "GSAP Animations",
      description:
        "Scroll-driven animations were created using GSAP ScrollTrigger, bringing the cans to life as users navigate through the experience.",
      color: "bg-orange-500",
    },
    {
      number: "04",
      title: "Next.js Framework",
      description:
        "Built on Next.js for optimal performance, SEO, and static export capabilities, making deployment seamless.",
      color: "bg-lime-400",
    },
  ];

  return (
    <section
      id="how-it-was-made"
      className="how-made-section min-h-screen bg-violet-600 py-20"
    >
      <Bounded>
        <div className="text-center">
          <h2 className="how-made-title text-5xl font-black uppercase leading-tight text-white md:text-7xl lg:text-8xl">
            {"How It Was Made".split("").map((char, i) => (
              <span key={i} className="char inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-violet-200 md:text-2xl">
            This interactive experience was created for the{" "}
            <span className="font-bold text-yellow-300">
              Spline × Contra Challenge
            </span>{" "}
            using cutting-edge web technologies.
          </p>
        </div>

        <div className="how-made-cards mt-16 grid gap-8 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`how-made-card group relative overflow-hidden rounded-3xl ${step.color} p-8 transition-transform duration-300 hover:scale-[1.02]`}
            >
              <div className="absolute right-4 top-4 text-6xl font-black text-white/20 md:text-8xl">
                {step.number}
              </div>
              <h3 className="relative z-10 text-3xl font-black uppercase text-white md:text-4xl">
                {step.title}
              </h3>
              <p className="relative z-10 mt-4 text-lg text-white/90">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block rounded-2xl bg-white/10 px-8 py-6 backdrop-blur-sm">
            <p className="text-lg text-violet-200">Made with</p>
            <p className="mt-2 text-4xl font-black text-white md:text-5xl">
              ✨ Spline Hana ✨
            </p>
            <p className="mt-4 text-violet-200">
              The future of 3D design for the web
            </p>
          </div>
        </div>
      </Bounded>
    </section>
  );
}
