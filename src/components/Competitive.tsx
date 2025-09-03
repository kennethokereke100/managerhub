import React from "react";
import Image from "next/image";

const Competitive = () => {
  return (
    <div className="py-12 sm:py-16 bg-[#FFFCF5] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

        {/* Left Column */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Competitive Analysis
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Based on my internal team questionnaire findings in Dovetail, the
            majority of concerns were centered around <span className="font-semibold">Workday being slow
            and requiring too many steps</span>.
          </p>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            The <span className="font-semibold">transaction flow</span>, such as transferring associates,
            was repeatedly flagged by managers as confusing and overly repetitive.
            In addition, the <span className="font-semibold">Manager Hub flow</span> was considered
            fragmented for performance tracking, requiring managers to jump between
            multiple portals and tools to complete simple tasks.
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            To address these issues, I conducted a competitive analysis of
            workforce management tools to evaluate how they streamline
            transactions, dashboards, and performance tracking.
            These insights shaped opportunities to improve Manager Hub and
            reduce inefficiencies across the system.
          </p>
        </div>

        {/* Right Column - Competitor Images */}
        <div className="space-y-4">
          <div className="relative w-full h-[200px] sm:h-[250px] lg:h-[300px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/competitor1.png"
              alt="Competitor analysis visualization 1 - Workforce management tool comparison"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="relative w-full h-[200px] sm:h-[250px] lg:h-[300px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/competitor2.png"
              alt="Competitor analysis visualization 2 - Performance tracking comparison"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitive;
