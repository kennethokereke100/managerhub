import React from "react";
import DesignSystems from "../DesignSystems";
import DesignSpec from "../DesignSpec";

export default function Design() {
  return (
    <section id="design" className="bg-[#FFFCF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Design</h1>

        {/* Style Guide Section */}
        <DesignSystems />

        {/* Design Specs Section */}
        <DesignSpec />

        {/* Prototype Section */}
        <section className="py-12 sm:py-16">
          <div className="text-center">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Prototype
            </h2>

            {/* Description */}
            <p className="text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto text-sm sm:text-base">
              Interactive prototypes were created in Figma to validate flows across
              desktop and mobile before handoff. These prototypes allowed stakeholders
              to experience the Manager Hub interface firsthand and provided valuable
              feedback for final refinements.
            </p>

            {/* Prototype Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://www.figma.com/proto/DQ8m8kHhRQqWRnU78dSoQF/Walmart-US?node-id=67-236344&t=oFk2qRhUKS4ODddP-1&scaling=contain&content-scaling=fixed&page-id=49%3A120061&starting-point-node-id=67%3A236344&show-proto-sidebar=1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                Desktop Prototype
              </a>
              <a
                href="https://www.figma.com/proto/DQ8m8kHhRQqWRnU78dSoQF/Walmart-US?node-id=70-243781&t=5x2eZkWKj7v1xUkI-1&scaling=min-zoom&content-scaling=fixed&page-id=49%3A120061&starting-point-node-id=67%3A236344&show-proto-sidebar=1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                Mobile Prototype
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
