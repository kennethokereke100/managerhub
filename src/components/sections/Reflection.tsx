import React from "react";

export default function Reflection() {
  return (
    <section id="reflection" className="py-16 bg-[#FFFCF5] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-center mb-12">Reflection</h1>

        {/* Reflection Content */}
        <div className="max-w-5xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-6">
            Looking back on the Manager Hub project, the results exceeded our
            initial expectations. By streamlining associate transfers and eliminating
            the repetitive steps that frustrated managers in Workday, we created a
            workflow that significantly improved efficiency. Managers were able to
            complete tasks that previously took hours in a fraction of the time,
            allowing them to focus on what matters most—supporting their teams and
            driving store performance.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The direct connection between managers and associates proved to be a
            game-changer. Managers could now view performance milestones, celebrate
            achievements, and track goals in one centralized location. This
            human-centered approach fostered better relationships and created a more
            engaged workplace culture. Associates felt seen and valued, while
            managers gained insights that helped them provide better support and
            recognition.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The overall UX outcome was transformative—less tool-switching meant
            managers could maintain focus and momentum throughout their day. The
            simplified workflows reduced cognitive load and eliminated the frustration
            of navigating between multiple systems. What emerged was a more
                         human-centered experience that respected managers&apos; time and expertise,
            ultimately leading to better outcomes for both managers and associates
                         across Walmart, Sam&apos;s Club, and Campus locations.
          </p>
        </div>
      </div>
    </section>
  );
}
