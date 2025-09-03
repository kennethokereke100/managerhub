import React from "react";
import Questionnaire from "../Questionnaire";
import Competitive from "../Competitive";
import HMW from "../HMW";

const teamMembers = [
  { letter: "K", name: "Kenneth Okereke", role: "Lead Product Designer" },
  { letter: "P", name: "Product Manager", role: "Manager Hub Focus" },
  { letter: "T", name: "Product Manager", role: "Transaction Focus" },
  { letter: "D1", name: "Developer #1", role: "Accessibility Development" },
  { letter: "D2", name: "Developer #2", role: "Frontend Development" },
  { letter: "D3", name: "Developer #3", role: "Design System Development" },
];

export default function Discovery() {
  return (
    <div className="bg-[#FFFCF5]">
      {/* Team Members & Kickoff Section */}
      <section id="discovery-team" className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16 min-h-screen">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0A093D] mb-8 sm:mb-12 text-center">
          Discovery
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Team Members */}
          <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 justify-center lg:justify-start">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center w-20 sm:w-28">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-teal-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl mx-auto">
                  {member.letter}
                </div>
                <p className="mt-2 font-bold text-[#0A093D] text-sm sm:text-base">{member.name}</p>
                <p className="text-xs sm:text-sm text-gray-700">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Right Column - Kickoff Context */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A093D] mb-4">
              Team Kickoff
            </h3>
            <p className="text-gray-800 leading-relaxed mb-4 text-sm sm:text-base">
              The kickoff for Manager Hub began with aligning on business needs
              from stakeholders. We followed Agile methodology, structuring work
              into sprints to keep progress transparent and iterative.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-sm sm:text-base">
                                     Our primary users were internal managers across Walmart, Sam&apos;s Club,
              and Campus corporate teams. This included both hourly and salaried
              managers responsible for store operations and associate management.
            </p>
            <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
              The goal was to deeply understand manager needs around performance
              tracking, associate transfers, birthdays and achievements, and goal
              management — all consolidated into one intuitive platform.
            </p>
          </div>
        </div>
      </section>
      
      {/* Questionnaire Section */}
      <section id="discovery-questionnaire" className="py-16 px-8 md:px-16">
        <Questionnaire />
      </section>
      
      {/* Competitive Analysis Section */}
      <section id="discovery-competitive" className="py-16 px-8 md:px-16">
        <Competitive />
      </section>
      
      {/* HMW Section */}
      <section id="discovery-hmw" className="py-16 px-8 md:px-16">
        <HMW />
      </section>
    </div>
  );
}
