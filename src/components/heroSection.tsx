import { FiDownload } from "react-icons/fi";
import Social from "./social";
import Photo from "./photo";
import Stats from "./stats";
import { TypeAnimation } from "react-type-animation";
import Resume from "../assets/resume/Md_Rakibul_Haque_AI_Engineer.pdf";

const HeroSection = () => {
  return (
    <div className="flex w-full flex-col px-4">
      <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-0 md:pb-24 md:pt-8">
        <div className="text-balck order-2 flex flex-col text-center dark:text-white md:order-none md:gap-0 md:text-start">
          <span className="text-xl">AI Engineer</span>
          <div className="mb-6 text-5xl font-semibold md:text-7xl">
            Hello I'm <br />
            <span className="mt-6 text-teal-500">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Md Rakibul Haque",
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Focusing On AI/ML",
                  2000,
                ]}
                wrapper="span"
                speed={1}
                deletionSpeed={1}
                style={{
                  display: "inline-block",
                }}
                repeat={Infinity}
              />
            </span>{" "}
          </div>
          <p className="mb-9 max-w-[500px] dark:text-white/80">
          Building Smarter Systems to Empower Tomorrow.
          </p>
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <a
              href={Resume}
              download={"Md-Rakibul-Haque-Resume.pdf"}
              className="flex items-center gap-4 rounded-full border-2 border-teal-500 bg-teal-500 px-8 py-2 uppercase shadow-md transition-all duration-300 hover:scale-105 hover:shadow-teal-500 dark:bg-gray-900 dark:text-teal-500"
            >
              <span>Download Resume</span>
              <FiDownload className="text-xl" />
            </a>
            <div className="mb-8 md:mb-0">
              <Social />
            </div>
          </div>
        </div>
        <div className="text-balck dark:text-white">
          <Photo />
        </div>
      </div>
      <Stats />
    </div>
  );
};

export default HeroSection;
