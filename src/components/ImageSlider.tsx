"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  images?: string[];
}

const defaultImages = [
  "/starters.png",
  "/managerhubselect.png",
  "/associate.png",
  "/profile.png",
  "/transfermanager.png",
  "/managerselect.png",
  "/managerselected.png",
];

export default function ImageSlider({ images = defaultImages }: ImageSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto relative px-8">
        {/* Slider */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((src, index) => (
              <div
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33%] p-2 sm:p-4"
                key={index}
              >
                <div className="relative w-full max-w-[400px] sm:w-[500px] lg:w-[600px] h-[250px] sm:h-[350px] lg:h-[400px] mx-auto">
                  {/* Laptop Mockup Frame */}
                  <div className="absolute inset-0 border-3 border-gray-300 rounded-t-xl bg-gray-100" />
                  
                  {/* Laptop Screen */}
                  <div className="absolute top-2 left-2 right-2 bottom-2 bg-white rounded-lg overflow-hidden">
                    <Image
                      src={src}
                      alt={`Manager Hub interface ${index + 1}`}
                      width={584}
                      height={384}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Laptop Bottom */}
                  <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-4 sm:h-5 bg-gray-300 rounded-b-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          className={`absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-md bg-white text-gray-700 hover:bg-gray-100 transition ${
            prevBtnEnabled ? "" : "opacity-30 pointer-events-none"
          }`}
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className={`absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-md bg-white text-gray-700 hover:bg-gray-100 transition ${
            nextBtnEnabled ? "" : "opacity-30 pointer-events-none"
          }`}
          onClick={scrollNext}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
