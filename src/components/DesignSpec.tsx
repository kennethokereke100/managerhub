"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/button.png", alt: "Buttons" },
  { src: "/colors.png", alt: "Colors" },
  { src: "/gridsystem.png", alt: "Grid System" },
  { src: "/spaces.png", alt: "Spacing" },
];

export default function DesignSpec() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="design-spec" className="py-8 sm:py-12 bg-gray-100 min-h-[400px] sm:min-h-[500px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {images.map((img) => (
            <div
              key={img.src}
              className="cursor-pointer border rounded-md overflow-hidden bg-white shadow hover:shadow-md transition"
              onClick={() => setSelected(img.src)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={300}
                height={200}
                className="object-contain w-full h-32 sm:h-40"
              />
              <p className="text-center text-gray-700 py-2 text-sm sm:text-base">{img.alt}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <div className="bg-white p-4 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <Image
              src={selected}
              alt="Expanded view"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            <button
              onClick={() => setSelected(null)}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md block mx-auto hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
