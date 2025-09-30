import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Column - Image */}
            <div className="lg:w-2/5 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl transform rotate-3"></div>
                <div className="absolute top-6 left-6 w-64 h-64 md:w-80 md:h-80 bg-gray-800 rounded-2xl transform -rotate-3 overflow-hidden">
                  {/* Placeholder for your image */}
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <span className="text-white text-lg">Your Photo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:w-3/5">
              <div className="space-y-6">
                {/* Introduction */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Full Stack Developer & Master's Student
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    I'm Faraz Khan, a passionate full stack web developer
                    currently pursuing my Master's in Information Systems at the
                    University of Jyvaskyla. I specialize in creating digital
                    experiences that are both visually appealing and highly
                    functional.
                  </p>
                </div>

                {/* Education & Current Focus */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    Current Focus
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Combining academic knowledge with practical experience to
                    build innovative web solutions. My studies in Information
                    Systems provide me with a strong foundation in both
                    technical and business aspects of software development.
                  </p>
                  <div className="flex items-center text-gray-700">
                    <span className="font-medium">University of Jyvaskyla</span>
                    <span className="mx-2">•</span>
                    <span>Masters in Information Systems</span>
                  </div>
                </div>

                {/* Skills & Technologies */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">
                    Technical Skills
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "React",
                      "JavaScript",
                      "TypeScript",
                      "Node.js",
                      "Express",
                      "MongoDB",
                      "PostgreSQL",
                      "Tailwind CSS",
                      "Git",
                      "REST APIs",
                      "Python",
                      "Java",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:border-blue-500 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="pt-4">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                    View My Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
