import React from "react";
import Question from "./Question";

const Questionnaire: React.FC = () => {
  // Example Q&A lists for each manager
  const walmartQA = [
    {
      question: "What tasks take the most time?",
      answer: "Workday is extremely slow. I spend hours clicking through too many steps just to update schedules."
    },
    {
      question: "When transferring or hiring associates, what's difficult?",
      answer: "The transfer process in Workday is confusing. I often repeat the same steps because it's fragmented."
    },
    {
      question: "How do you track performance goals?",
      answer: "Currently in Workday, but it's not centralized. I keep spreadsheets outside the system."
    },
    {
      question: "How do you communicate with associates?",
      answer: "Mostly through email or in person, but nothing is tied to Workday goals."
    },
    {
      question: "What features would help?",
      answer: "One platform for performance tracking, transfers, and schedules instead of jumping between tools."
    },
    {
      question: "What's your biggest frustration?",
      answer: "Switching between Workday, email, and reports wastes time. Nothing feels connected."
    }
  ];

  const samsClubQA = [
    {
      question: "What tasks take the most time?",
      answer: "Workday has too many repetitive steps when creating schedules and assigning shifts."
    },
    {
      question: "When transferring or hiring associates, what's difficult?",
      answer: "Transfers are slow. I often need to verify the same data multiple times in Workday."
    },
    {
      question: "How do you track performance goals?",
      answer: "Right now, it's split between Workday and spreadsheets. It's easy for things to get lost."
    },
    {
      question: "How do you communicate with associates?",
      answer: "Mostly through text or email. Workday doesn't provide an easy channel."
    },
    {
      question: "What features would help?",
      answer: "Better scheduling tools integrated with performance tracking in one place."
    },
    {
      question: "What's your biggest frustration?",
      answer: "Switching between Workday, email, and paper notes. It's inefficient."
    }
  ];

  const campusQA = [
    {
      question: "What tasks take the most time?",
      answer: "Analyzing reports across Workday and other systems takes too long. Data is spread out."
    },
    {
      question: "When transferring or hiring associates, what's difficult?",
      answer: "Corporate processes in Workday involve multiple approvals. It feels redundant."
    },
    {
      question: "How do you track performance goals?",
      answer: "Different systems handle different metrics. I'd prefer a single source of truth."
    },
    {
      question: "How do you communicate with associates?",
      answer: "Mostly via email. Workday doesn't integrate with how we track milestones."
    },
    {
      question: "What features would help?",
      answer: "A central dashboard where I can see performance, goals, and org changes at a glance."
    },
    {
      question: "What's your biggest frustration?",
      answer: "Switching between Workday, reporting tools, and email is confusing and slows me down."
    }
  ];

  return (
    <div className="py-16 sm:py-20 bg-[#FFFCF5] w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-8 lg:px-16">
        {/* Left Column */}
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold mb-4">Internal Team Questionnaire</h2>
          <p className="mb-4 text-gray-700 text-sm sm:text-base">
            As the UX Designer I conducted Zoom calls with Walmart, Sam's Club, and Campus managers.
            Using Dovetail I synthesized and tagged recurring themes across responses.
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1 text-sm sm:text-base">
            <li>Workday is slow and requires too many steps</li>
            <li>Performance tracking and associate transfers are fragmented</li>
            <li>
              Switching between Workday, email, and reporting tools creates
              inefficiencies
            </li>
          </ul>
          <p className="text-gray-700 font-medium text-sm sm:text-base">
            These findings shaped the Q&amp;A cards shown on the right.
          </p>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Question
            managerName="Jaleesa McKnight"
            role="Store Manager at Walmart"
            qaList={walmartQA}
          />
          <Question
            managerName="Kyle Braaten"
            role="Store Manager at Sam's Club"
            qaList={samsClubQA}
          />
          <Question
            managerName="Srividya P."
            role="Product Manager"
            qaList={campusQA}
          />
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
