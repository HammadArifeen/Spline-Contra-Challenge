"use client";

import { Bounded } from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import clsx from "clsx";

// Hardcoded content showcasing the soda flavors
const workflowSections = [
  {
    heading: "Lemon Lime Bliss",
    body: "A zesty, refreshing blend of tangy lemon and lime that will awaken your senses. Perfect for hot summer days or whenever you need a citrus-powered pick-me-up. The bubbles dance on your tongue with every sip.",
  },
  {
    heading: "Strawberry Sensation",
    body: "Sweet, luscious strawberry flavor bursting with fruity goodness. Our strawberry Fizzi captures the essence of sun-ripened berries in every satisfying gulp. It's like summer in a can.",
  },
  {
    heading: "Grape Escape",
    body: "Bold, grape-forward flavor that takes you back to simpler times. Rich and full-bodied, our grape Fizzi delivers an unmistakable taste that's both nostalgic and refreshingly modern.",
  },
  {
    heading: "Find Your Fizz",
    body: "With three distinct flavors to choose from, there's a Fizzi for every mood and moment. Collect them all, share them with friends, or keep them all to yourself – we won't judge.",
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

