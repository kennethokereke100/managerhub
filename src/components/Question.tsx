import React from "react";

interface QA {
  question: string;
  answer: string;
}

interface QuestionProps {
  managerName: string;
  role: string;
  qaList: QA[];
}

const Question: React.FC<QuestionProps> = ({ managerName, role, qaList }) => {
  return (
    <div className="bg-white border rounded-md shadow-md flex flex-col h-[400px]">
      {/* Header */}
      <div className="bg-[#FAF9F6] px-4 py-2 border-b">
        <h3 className="text-sm font-semibold">Internal Team Questionnaire</h3>
        <p className="text-xs font-medium">{managerName}</p>
        <p className="text-xs text-gray-600">{role}</p>
      </div>

      {/* Scrollable Q&A */}
      <div className="flex-1 overflow-y-scroll p-4 space-y-4">
        {qaList.map((qa, index) => (
          <div key={index}>
            <p className="font-semibold text-sm">{qa.question}</p>
            <p className="text-sm text-gray-700">{qa.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
