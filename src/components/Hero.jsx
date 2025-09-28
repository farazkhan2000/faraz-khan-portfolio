import React from "react";
import ProfileImage from "../assets/images/profile.jpg";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="container mx-auto h-screen py-32 lg:py-40 px-4 lg:px-0 overflow-x-hidden"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-12 h-full">
        {/* Left Side */}
        <div className="w-full lg:w-3/6 flex flex-col justify-between gap-8">
          <div className="w-full lg:w-2/3">
            <h1 className="font-semibold text-5xl leading-[1.2]">
              Designing bold brands that shape culture.
            </h1>
            <p className="text-gray-600 mt-4 text-[16px]">
              Unlock your brand's full potential with strategic design,
              immersive experiences, and digital clarity — all driven by a team
              that believes in purposeful creativity.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <button className="bg-black text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-gray-900">
                Start your project
              </button>
              <button className="border border-gray-800 text-gray-600 px-4 py-2 rounded-md font-semibold text-sm">
                Explore My Work
              </button>
            </div>
          </div>

          <div className="w-full lg:w-2/3 flex flex-col justify-end lg:flex-row lg:items-end lg:justify-between gap-4">
            <ul className="flex flex-row lg:flex-col gap-3">
              <li className="text-[#5A5A5A] font-medium">
                <NavLink to="/">GitHub</NavLink>
              </li>
              <li className="text-[#5A5A5A] font-medium">
                <NavLink to="/">LinkedIn</NavLink>
              </li>
            </ul>

            <div className="flex flex-col justify-end items-end gap-2">
              <p className="font-semibold font-mono text-sm">2022 - 2025</p>
              <p className="text-gray-800 font-semibold text-sm flex items-end gap-2 group cursor-pointer">
                farazkhan.webdev@gmail.com
                <span className="text-white rounded-full bg-gray-800 p-[2px] shadow-md group-hover:bg-gray-600 group-hover:scale-110 transition-all duration-200 -rotate-45">
                  <ArrowRight strokeWidth={2} size={16} />
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-2/5 flex flex-col gap-2">
          {/* First Row */}
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <img
              src={ProfileImage}
              alt="Profile 1"
              className="w-full h-72 sm:w-1/2 object-cover shadow-md rounded-2xl"
            />
            <div className="w-full sm:w-1/2 flex flex-col justify-between bg-white shadow-md rounded-2xl p-4">
              <p className="text-sm sm:text-base font-semibold text-gray-700">
                “We don't just design — we challenge, clarify, and create with
                intent. Every project at Menowo starts with strategy and ends
                with impact.”
              </p>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={ProfileImage}
                  alt="Faraz Khan"
                  className="w-10 h-10 shadow-lg rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">Faraz Khan</p>
                  <p className="text-xs sm:text-sm font-mono">Web Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <img
              src={ProfileImage}
              alt="Profile 3"
              className="w-full h-72 sm:w-4/6 object-cover shadow-md rounded-2xl"
            />
            <img
              src={ProfileImage}
              alt="Profile 4"
              className="w-full h-72 sm:w-2/6 object-cover shadow-md rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
