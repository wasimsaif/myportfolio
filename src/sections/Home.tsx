import { useState, useEffect } from "react";
import {Download} from "lucide-react";

const titles = ["Frontend Developer", "Android Developer"];
const skills = [
  "html-logo.jpg",
  "css-logo.png",
  "tailwindcss-logo.png",
  "javascript-logo.png",
  "react-native-logo.png",
  "Angularjs-logo.png",
  "nextjs-logo.png",
  "reactjs-logo.jpg",
  "github-logo.png",
];

const Home = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (titles.length <= 1) return;

    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setShow(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-x-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 sm:px-6 md:px-20 py-8 sm:py-12 md:py-20 overflow-hidden"
    >
      {/* Background Circles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-400 rounded-full blur-3xl opacity-10" />
        <div
          className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-purple-400 rounded-full blur-3xl opacity-10"
          style={{ transform: "translate(-50%, -50%)" }}
        />
      </div>

      {/* Left Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-start text-left space-y-6 animate-fade-in w-full max-w-xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Hi, I'm <span className="text-primary">Wasim</span>
        </h2>

        <h3
          className={`text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 transition-opacity duration-500 ease-in-out ${
            show ? "opacity-100" : "opacity-0"
          }`}
        >
          {titles[currentTitleIndex]}
        </h3>

        <p className="text-base sm:text-lg md:text-xl text-gray-600">
          I build modern, scalable web applications with a focus on clean code
          and seamless user experiences.
        </p>

        {/* Skill Logos */}
        <div className="flex flex-wrap gap-4">
          {skills.map((logo, idx) => (
            <div
              key={idx}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 border border-gray-200"
            >
              <img
                loading="lazy"
                src={`../../logo/${logo}`}
                alt={logo.replace(".png", "")}
                className="w-12 h-12 object-contain rounded-full"
              />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-2">
          {/* <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`flex items-center gap-2 px-6 py-2 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 border ${
              hover
                ? "bg-white text-primary border-primary"
                : "bg-primary text-black border-transparent"
            }`}
          >
            More Info <ArrowRight size={20} />
          </button> */}

          <a
            href="Wasim_Saifi_FR.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-xl shadow-xl hover:from-pink-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
          >
            <span className="animate-pulse">Download CV</span>
            <Download
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative z-10 flex-1 flex md:flex-row sm:flex-row-reverse flex-col items-center justify-center gap-6 mt-10 md:mt-0 animate-slide-in w-full max-w-3xl">
        {/* Image */}
        <div className="relative max-w-xs sm:max-w-sm md:max-w-md h-64 sm:h-80 md:h-[32rem] flex items-center justify-center bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-gray-100 overflow-hidden">
          <img
            src="https://res.cloudinary.com/dcb1otmpr/image/upload/v1753783765/wasimim_mcrai8.jpg"
            alt="Developer"
            loading="lazy"
            className="w-full h-full object-cover rounded-3xl transition-all duration-500 hover:scale-105"
          />
        </div>

        {/* Social Icons (beside image on large screen) */}
        <div className="flex flex-row md:flex-col items-center gap-4">
          <a
            href="https://www.linkedin.com/in/wasim-saifi-b6954321b/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 border border-gray-200"
          >
            <i className="fa-brands fa-linkedin-in text-2xl text-blue-600"></i>
          </a>
          <a
            href="https://wa.me/7017499280"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 border border-gray-200"
          >
            <i className="fa-brands fa-whatsapp text-2xl text-green-500"></i>
          </a>
          <a
            href="tel:+917017499280"
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 border border-gray-200"
          >
            <i className="fa-solid fa-phone text-2xl text-gray-700"></i>
          </a>
          <a
            href="mailto:wasimsaifi983@gmail.com"
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 border border-gray-200"
          >
            <i className="fa-solid fa-envelope text-2xl text-red-500"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
