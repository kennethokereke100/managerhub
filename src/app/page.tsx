"use client";
import React from "react";
import Image from "next/image";
import ImageSlider from "@/components/ImageSlider";
import DesignProcess from "@/components/DesignProcess";
import Discovery from "@/components/sections/Discovery";
import Ideation from "@/components/sections/Ideation";
import Design from "@/components/sections/Design";
import DevHandoff from "@/components/sections/DevHandoff";
import Reflection from "@/components/sections/Reflection";

export default function Page() {
  return (
    <main className="bg-[#FAF9F6] font-['IBM_Plex_Mono'] text-[#111111] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Header */}
      <section className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 mb-12 lg:mb-16">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0A23] mb-4">
            Manager Hub
          </h1>
          <p className="text-lg sm:text-xl text-[#111111] leading-relaxed">
            A workforce management application for Walmart, Sam&apos;s Club, and
            Campus corporate managers
          </p>
        </div>
        <div className="w-full lg:w-[500px] h-[200px] sm:h-[250px] lg:h-[250px] rounded-lg overflow-hidden">
          <Image
            src="/managerhub.png"
            alt="Manager Hub application interface"
            width={500}
            height={250}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0A0A23] mb-4">
          Overview
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-[#111111]">
          Manager Hub is part of the Me@ ecosystem and serves Walmart, Sam&apos;s
          Club, and campus corporate managers across both hourly and salaried
          roles. The platform streamlines core manager responsibilities
          including performance tracking, associate transfers, and career
          mobility. It also provides ways to recognize birthdays, celebrate
          achievements, and set performance goals. By consolidating these
          functions into one centralized system, Manager Hub improves efficiency,
          strengthens associate engagement, and helps managers create a more
          connected workplace.
        </p>
      </section>

      {/* Problem & Solution */}
      <section className="mb-12 lg:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A0A23] mb-4">
              Problem
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#111111]">
              <strong>
                Store managers needed a reliable source of truth to manage
                associates and daily operations.
              </strong>{" "}
              Existing tools like Workday required too many steps, lacked
              interactivity with associates, and created inefficiencies. This led
              to delays in handling performance tracking, transfers, and associate
              engagement, reducing overall effectiveness.
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A0A23] mb-4">
              Solution
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#111111]">
              We created the Manager Hub, a centralized application that gives
              Walmart, Sam&apos;s Club, and campus managers a single platform to manage
              performance, transfers, and associate achievements. By streamlining
              workflows and enabling direct interaction with associates, the
              platform reduced complexity and improved both efficiency and
              engagement.
            </p>
          </div>
        </div>
      </section>

      {/* My Role, Tools, Timeline, Process */}
      <section className="mb-12 lg:mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A23] mb-4">
              My Role
            </h3>
            <p className="text-base leading-relaxed text-[#111111]">
              I was the sole Product Designer leading the end-to-end UX for
              Manager Hub. I worked closely with a team of three developers and
              two product managers. One product manager focused on the overall
              Manager Hub experience and the other focused on the associate
              transfer flow.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A23] mb-4">
              Tools
            </h3>
            <ul className="text-base leading-relaxed text-[#111111] space-y-1">
              <li>Figma</li>
              <li>Miro</li>
              <li>Dovetail</li>
              <li>Design System</li>
              <li>UserTesting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A23] mb-4">
              Timeline
            </h3>
            <ul className="text-base leading-relaxed text-[#111111] space-y-1">
              <li>Overall 10 weeks</li>
              <li>Discovery 3 weeks</li>
              <li>Design 3 weeks</li>
              <li>Iteration and Testing 4 weeks</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A23] mb-4">
              Process
            </h3>
            <ul className="text-base leading-relaxed text-[#111111] space-y-1">
              <li>Discovery</li>
              <li>Research and Synthesis</li>
              <li>Ideation</li>
              <li>Design and Prototyping</li>
              <li>Usability Testing</li>
              <li>Developer Handoff</li>
              <li>Reflection</li>
            </ul>
          </div>
        </div>
      </section>

      <ImageSlider />

      <DesignProcess />
      
      <Discovery />
      <Ideation />
      <Design />
      <DevHandoff />
      <Reflection />
    </main>
  );
}
