import { FiDownload } from "react-icons/fi";
import Social from "./social";
import Photo from "./photo";
import Stats from "./stats";
import { TypeAnimation } from "react-type-animation";
import Resume from "../assets/resume/Md_Rakibul_Haque_AI_Engineer.pdf";

const HeroSection = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row md:gap-8 md:pb-24">
        <div className="flex w-full flex-col text-center md:w-1/2 md:text-start animate-fade-in">
          <span className="mb-2 text-lg font-medium text-teal-600 dark:text-teal-400 md:text-xl">AI Engineer</span>
          <div className="mb-6 text-4xl font-bold md:text-7xl lg:text-8xl">
            <span className="text-gray-900 dark:text-white">Hello I'm</span>
            <br />
            <span className="mt-4 block bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 dark:from-teal-400 dark:via-cyan-400 dark:to-teal-500 bg-clip-text text-transparent">
              <TypeAnimation
                sequence={[
                  "Md Rakibul Haque",
                  2000,
                  "Focusing On AI/ML",
                  2000,
                  "Building Agentic Systems",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={30}
                style={{
                  display: "inline-block",
                }}
                repeat={Infinity}
              />
            </span>
          </div>
          <p className="mb-9 max-w-[500px] text-lg text-gray-700 dark:text-gray-300 md:text-xl">
            Building Smarter Systems to Empower Tomorrow.
          </p>
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            <a
              href={Resume}
              download={"Md-Rakibul-Haque-Resume.pdf"}
              className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/50"
            >
              <span>Download Resume</span>
              <FiDownload className="text-xl transition-transform group-hover:translate-y-1" />
            </a>
            <div>
              <Social />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center md:w-1/2 animate-float">
          <Photo />
        </div>
      </div>
      <Stats />
    </div>
  );
};

export default HeroSection;
