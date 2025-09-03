"use client";

import { useEffect, useState } from "react";

const steps = [
  { id: "discovery", label: "Discovery" },
  { id: "ideation", label: "Ideation" },
  { id: "design", label: "Design" },
  { id: "devhandoff", label: "Dev Handoff" },
  { id: "reflection", label: "Reflection" },
];

export default function DesignProcess() {
  const [activeStep, setActiveStep] = useState("discovery");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -10% 0px",
      threshold: [0.3], // trigger when 30% of section is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;

          // Map discovery + subsections
          if (
            sectionId.startsWith("discovery-") ||
            sectionId === "discovery"
          ) {
            setActiveStep("discovery");
          }
          // Map ideation + subsections
          else if (
            sectionId === "ideation" ||
            sectionId === "midwireframe"
          ) {
            setActiveStep("ideation");
          }
          // Always prioritize parent "design" before its children
          else if (sectionId === "design") {
            setActiveStep("design");
          }
          else if (
            sectionId === "design-systems" ||
            sectionId === "design-spec"
          ) {
            setActiveStep("design");
          }
          // Direct mapping for the rest
          else {
            setActiveStep(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const allSections = [
      ...steps.map((step) => step.id),
      "discovery-team",
      "discovery-questionnaire",
      "discovery-competitive",
      "discovery-hmw",
      "midwireframe",
      "design-systems",
      "design-spec",
    ];

    allSections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      allSections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full bg-[#FAF9F6] py-4 sm:py-6">
      <div className="flex justify-center items-center gap-4 sm:gap-8 lg:gap-12 px-4">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center">
            <div className="flex items-center">
              <div
                className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 font-bold text-sm sm:text-base ${
                  activeStep === step.id
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-400"
                }`}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className="w-8 sm:w-12 lg:w-16 h-[2px] bg-gray-300 mx-1 sm:mx-2"></div>
              )}
            </div>
            <p
              className={`mt-2 text-xs sm:text-sm text-center ${
                activeStep === step.id
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
            >
              {step.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
