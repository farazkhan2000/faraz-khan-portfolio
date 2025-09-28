import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="container mx-auto h-screen py-40">
      <div className="flex justify-between h-full">
        <div className="w-1/2 h-full">
          <div className="w-2/3 flex flex-col justify-between h-full">
            <div>
              <h1 className="font-semibold text-5xl leading-[1.2]">
                Designing bold brands that shape culture.
              </h1>
              <p className="text-gray-600 mt-4 text-[16px]">
                Unlock your brand's full potential with strategic design,
                immersive experiences, and digital clarity — all driven by a
                team that believes in purposeful creativity.
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
            <div className="flex items-end justify-between">
              <div>
                <ul className="flex flex-col gap-3">
                  <li className="text-[#5A5A5A] font-medium">
                    <NavLink to="/">GitHub</NavLink>
                  </li>
                  <li className="text-[#5A5A5A] font-medium">
                    <NavLink to="/">LinkedIn</NavLink>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-end gap-2">
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
        </div>
        <div className="w-1/2"></div>
      </div>
    </section>
  );
};

export default Hero;
