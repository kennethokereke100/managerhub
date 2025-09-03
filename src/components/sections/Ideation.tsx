import React, { useState } from "react";
import MidWireframe from "../MidWireframe";
import Image from "next/image";

export default function Ideation() {
  const [selectedFlow, setSelectedFlow] = useState<string | null>(null);

  const userFlows = [
    { src: "/userflow.png", alt: "User Flow Diagram 1" },
    { src: "/userflow2.png", alt: "User Flow Diagram 2" },
  ];

  return (
    <section id="ideation" className="py-16 bg-[#FFFCF5] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-center mb-12">Ideation</h1>
        
        {/* User Stories */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">User Stories</h2>
        <p className="text-gray-700 mb-4">
          The user stories were defined based on manager research and internal
          team questionnaires. These stories captured what managers needed most
          from Manager Hub, such as simplifying associate transfers, accessing
          performance information, and reducing tool-switching overhead.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-12">
          <li>
            As a store manager, I want to transfer an associate without
            repeating steps across multiple systems.
          </li>
          <li>
            As a store manager, I want a summary dashboard that shows hiring,
            team size, and performance at a glance.
          </li>
          <li>
            As a store manager, I want to view associate profiles with goals,
            achievements, and milestones in one place.
          </li>
          <li>
            As a store manager, I want to reduce time spent switching between
            Workday, email, and reporting tools.
          </li>
        </ol>

        {/* User Flows */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">User Flows</h2>
        <p className="text-gray-700 mb-4">
          To translate user stories into actionable design, I created user flows
          that mapped out how managers would interact with Manager Hub for their
          most critical tasks. These flows helped identify pain points in the
          transfer process, performance tracking, and dashboard navigation. The
          goal was to keep flows simple and intuitive, reducing the repetitive
          steps managers faced in Workday while ensuring critical actions
          remained accurate and efficient.
        </p>
        
        {/* User Flow Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {userFlows.map((flow, index) => (
            <div
              key={flow.src}
              className="cursor-pointer border rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow"
              onClick={() => setSelectedFlow(flow.src)}
            >
              <Image
                src={flow.src}
                alt={flow.alt}
                width={400}
                height={300}
                className="w-full h-auto object-contain"
              />
              <p className="text-center text-gray-700 py-3 font-medium">
                User Flow {index + 1}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mid-Fi Wireframes */}
      <MidWireframe />

      {/* Modal for User Flow Images */}
      {selectedFlow && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedFlow(null)}
        >
          <div className="bg-white p-4 rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <Image
              src={selectedFlow}
              alt="User Flow Diagram"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            <button
              onClick={() => setSelectedFlow(null)}
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
