import React from "react";
import Image from "next/image";

export default function DevHandoff() {
  return (
    <section id="devhandoff" className="py-16 bg-[#FFFCF5] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-center mb-12">Design Handoff</h1>

        {/* Description */}
        <div className="max-w-5xl mx-auto mb-12">
          <p className="text-gray-700 leading-relaxed mb-6">
            The design handoff process was critical to ensuring developers had clear,
            actionable specifications to build from. I created comprehensive design
            specs with detailed annotations covering padding, margins, spacing, and
            component interactions that developers could follow precisely.
          </p>
          <p className="text-gray-700 leading-relaxed">
            To reduce ambiguity and ensure consistency across Manager Hub, the dev
            handoff included pink spacing annotations similar to Zeplin/Figma dev
            mode. This approach eliminated guesswork and provided developers with
            pixel-perfect measurements for every element, from button states to
            complex grid layouts.
          </p>
        </div>

        {/* Dev Handoff Image */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/devhandoff.png"
              alt="Design handoff specifications with annotated spacing and component details"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
