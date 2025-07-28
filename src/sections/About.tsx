import React from "react";
import { GraduationCap, Briefcase, Code2, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-gray-900 text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-4">
          <span className="text-blue-400">About</span> Me
        </h2>
        <p className="text-center text-gray-400 text-lg max-w-3xl mx-auto mb-14">
          A passionate software engineer with experience in web and mobile
          development. I combine modern technologies with user-centric design to
          deliver clean, scalable, and fast applications.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education Card */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-blue-500/40 transition">
            <div className="flex items-center gap-4 mb-4">
              <GraduationCap className="text-blue-400 w-8 h-8" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <ul className="text-gray-400 space-y-2 list-disc list-inside">
              <li>
                <span className="text-white font-medium">MCA</span> – NIET,
                Greater Noida (2021–2023)
              </li>
              <li>
                <span className="text-white font-medium">BCA</span> – CCS
                University (2018–2021)
              </li>
            </ul>
          </div>

          {/* Experience Card */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-blue-500/40 transition">
            <div className="flex items-center gap-4 mb-4">
              <Briefcase className="text-blue-400 w-8 h-8" />
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <ul className="text-gray-400 space-y-2 list-disc list-inside">
              <li>
                <span className="text-white font-medium">
                  Software Engineer
                </span>{" "}
                – Ansit Software Pvt. Ltd. (2024–Present)
              </li>
              <li>
                <span className="text-white font-medium">Web Developer</span> –
                Magic Edtech, Noida (2024)
              </li>
            </ul>
          </div>

          {/* Skills Card */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-blue-500/40 transition">
            <div className="flex items-center gap-4 mb-4">
              <Code2 className="text-blue-400 w-8 h-8" />
              <h3 className="text-xl font-semibold">Skills</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              HTML, CSS, Tailwind CSS, JavaScript, TypeScript, Angular, React,
              React Native, Next.js, Git, GitHub, DevOps (basics)
            </p>
          </div>

          {/* Highlights Card */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-blue-500/40 transition">
            <div className="flex items-center gap-4 mb-4">
              <Sparkles className="text-blue-400 w-8 h-8" />
              <h3 className="text-xl font-semibold">Highlights</h3>
            </div>
            <ul className="text-gray-400 space-y-2 list-disc list-inside">
              <li>Full Stack Java Developer Training – Jspiders Noida</li>
              <li>Handled both mobile & web for key projects</li>
              <li>Excellent multitasking and communication skills</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
