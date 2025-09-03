"use client";

import ImageSlider from "./ImageSlider";

export default function MidWireframe() {
  return (
    <section
      id="midwireframe"
      className="py-12 sm:py-16 bg-[#FFFCF5] min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
          Mid-Fi Wireframes
        </h2>

        {/* Description */}
        <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base">
          To validate our concepts before moving into high-fidelity design, we
          created mid-fidelity wireframes. These allowed stakeholders to preview
          how Manager Hub would handle associate transfers, dashboards, and
          profiles early in the process. Wireframes also helped us test layout
          flows, refine functionality, and align the team on structure before
          visual polish.
        </p>

        {/* Slider */}
        <ImageSlider
          images={["/lowfi1.png", "/lowfi2.png", "/lowfi3.png", "/lowfi4.png"]}
        />
      </div>
    </section>
  );
}
