import React from "react";

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

        {/* Right Column */}
        <div className="bg-gray-200 h-[200px] sm:h-[250px] lg:h-[400px] flex items-center justify-center text-gray-500 italic rounded-md">
          Placeholder for competitive analysis visuals
        </div>
      </div>
    </div>
  );
};

export default Competitive;
