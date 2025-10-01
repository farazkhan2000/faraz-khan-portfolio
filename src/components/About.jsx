import React from "react";
import ProfileImage from "../assets/images/profile.jpg";
import {
  ArrowUpRight,
  Code,
  BookOpen,
  GraduationCap,
  Layers,
} from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto px-4 lg:px-0 min-h-screen flex items-center py-32"
    >
      <div className="w-full space-y-12">
        {/* Header */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px bg-gray-400 flex-1"></div>
          </div>
          <h2 className="text-xl font-medium tracking-tight mb-6">About</h2>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <h2 className="text-3xl lg:text-4xl font-semibold leading-snug">
              More than just a developer — <br />I build digital solutions with
              purpose, precision, and impact.
            </h2>
            <div>
              <p className="text-gray-600 text-base leading-relaxed mb-3">
                I help brands and businesses turn bold ideas into meaningful
                digital products. My approach combines clean code, creative
                design, and strategic thinking to deliver work that stands out.
              </p>
              <p className="text-gray-500 text-sm">
                Every project is an opportunity to bridge the gap between
                technology and people — ensuring long-term growth and memorable
                user experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left - Image */}
          <div className="lg:col-span-1">
            <div className="relative group">
              <img
                src={ProfileImage}
                alt="Faraz Khan"
                className="w-full h-[320px] object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-2xl bg-black/5 group-hover:bg-transparent transition-all duration-300" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats (inline, compact) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "50+", label: "Projects Delivered" },
                { value: "9", label: "Fiverr Projects" },
                { value: "4", label: "Upwork Projects" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 border rounded-lg text-center hover:shadow transition-all"
                >
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Education & Skills side by side */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <GraduationCap size={20} /> Education
                </h3>
                <div className="p-3 rounded-lg border hover:bg-gray-50 transition">
                  <h4 className="font-medium text-gray-800">
                    Masters in Information Systems (Ongoing)
                  </h4>
                  <p className="text-sm text-gray-600">
                    University of Jyväskylä • 2024 - Present
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Focused on systems design, data-driven decision-making, and
                    global IT applications.
                  </p>
                </div>
                <div className="p-3 rounded-lg border hover:bg-gray-50 transition">
                  <h4 className="font-medium text-gray-800">
                    Bachelor in Computer Science
                  </h4>
                  <p className="text-sm text-gray-600">
                    XYZ University • 2018 - 2022
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Learned fundamentals of software engineering, algorithms,
                    databases, and full-stack web development.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Layers size={20} /> Skills & Expertise
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    "React.js",
                    "Next.js",
                    "Vue.js",
                    "Node.js",
                    "Laravel",
                    "MongoDB",
                    "MySQL",
                    "Firebase",
                    "AWS",
                    "TailwindCSS",
                    "Figma",
                    "UI/UX Design",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-2 rounded-md border text-xs text-gray-700 text-center hover:bg-gray-50 transition"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                View My Work
                <ArrowUpRight size={16} />
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
