import NoteCard from "./NoteCard";

export default function HMW() {
  const hmwStatements = [
    "How might we simplify Workday tasks so managers complete them faster?",
    "How might we unify associate transfers into a seamless flow?",
    "How might we centralize performance tracking in Manager Hub?",
    "How might we create a unified profile for associates?",
    "How might we make reporting faster and reduce tool-switching?",
    "How might we celebrate associate achievements and milestones?",
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#FFFCF5]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-6">
        {/* Left Column */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How Might We</h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            As the UX Designer, I introduced the &ldquo;How Might We&rdquo; framework after
            discovery to reframe manager frustrations into actionable design
            opportunities. Using findings from Zoom calls and Dovetail, I
            created six HMWs to guide ideation.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
            <li>Workday is slow and requires too many steps</li>
            <li>Performance tracking and associate transfers are fragmented</li>
            <li>
              Switching between Workday, email, and reporting tools creates
              inefficiencies
            </li>
          </ul>
          <p className="text-gray-700 mt-4 text-sm sm:text-base">
            These insights were reframed into six How Might We statements,
            displayed as sticky notes on the right.
          </p>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {hmwStatements.map((text, index) => (
            <NoteCard key={index} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
}
