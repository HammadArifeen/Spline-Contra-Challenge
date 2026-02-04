"use client";

import { Bounded } from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import clsx from "clsx";

// Hardcoded workflow content explaining how the website was built with Spline
const workflowSections = [
  {
    heading: "Starting with Spline Hana",
    body: "We began our journey by exploring Spline Hana's powerful 3D capabilities. The intuitive interface made it easy to create stunning visuals that would have taken hours in traditional 3D software. Spline's real-time collaboration features allowed for rapid iteration and creative exploration.",
  },
  {
    heading: "Designing the Can Models",
    body: "The soda can models were crafted directly in Spline with realistic materials and lighting. We experimented with various textures, reflections, and colors to create the perfect fizzy aesthetic. The ability to preview changes in real-time was a game-changer for our workflow.",
  },
  {
    heading: "Adding Smooth Interactions",
    body: "Spline's event system enabled us to create smooth scroll-based animations and hover effects. We connected the 3D scenes to user interactions, making the experience feel alive and responsive. GSAP and React Three Fiber helped bring everything together seamlessly.",
  },
  {
    heading: "Final Polish & Export",
    body: "The finishing touches included fine-tuning animations, optimizing performance, and ensuring the 3D experience worked flawlessly across all devices. Spline's export options made it simple to integrate our creations into this Next.js application.",
  },
];

/**
 * Props for `AlternatingText`.
 */
export type AlternatingTextProps =
  SliceComponentProps<Content.AlternatingTextSlice>;

/**
 * Component for "AlternatingText" Slices.
 */
const AlternatingText = ({ slice }: AlternatingTextProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="alternating-text-container relative bg-yellow-300 text-sky-950"
    >
      <div>
        <div className="relative  z-[100] grid">
          {/* view goes here */}

          <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
            <Scene />
          </View>

          {workflowSections.map((item, index) => (
            <div
              key={item.heading}
              className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
            >
              <div
                className={clsx(
                  index % 2 === 0 ? "col-start-1" : "md:col-start-2",
                  "rounded-lg p-4 backdrop-blur-lg max-md:bg-white/1",
                )}
              >
                <div className="text-balance text-6xl font-bold">
                  <h3>{item.heading}</h3>
                </div>

                <div className="mt-4 text-xl">
                  <p>{item.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default AlternatingText;

