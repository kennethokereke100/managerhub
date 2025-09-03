"use client";

export default function DesignSystems() {
  return (
    <section id="design-systems" className="py-12 sm:py-16 bg-[#FFFCF5] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Style Guide</h2>

        {/* Description */}
        <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
          The design system served as the single source of truth for Manager
          Hub, ensuring consistency across every part of the experience. I
          leveraged reusable components, documented patterns, and scalable
          styles to reduce design and development friction.  
        </p>
        <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
          The system defined a clear approach to <strong>spacing</strong> for
          predictable layouts, a consistent set of <strong>colors</strong> for
          accessibility and hierarchy, and a <strong>grid system</strong> to
          maintain balance across screens. Together, these foundations made it
          easier to design and ship features at scale while maintaining
          usability and alignment with business goals.
        </p>
      </div>
    </section>
  );
}
