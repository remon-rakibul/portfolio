import { useEffect, useState } from "react";
import Navbar from "./navbar";
import HeroSection from "./heroSection";

import WhyHireMe from "./whyHireMe";
import Menu from "./menu";

import Projects from "./projects";
// import ParallaxGalaxy from "./parallaxGalaxy";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [navbarHeight, setNavbarHeight] = useState(0);

  // Set the navbar height dynamically and handle refresh logic
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
    if (window.location.pathname === "/") {
      window.location.replace("/#"); // Set the hash to section1
    }
  }, []);

  // Apply dark mode to document root element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main className="jetbrains-mono min-h-screen w-full overflow-x-hidden">
      <div className="relative w-full bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition duration-300 ease-in-out">
        <div
          id="navbar"
          className="sticky top-0 z-40 w-full flex flex-col"
        >
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        
        <Menu />

        <div
          id="section1"
          className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-4 pt-24 pb-20"
          style={{ scrollMarginTop: `${navbarHeight + 20}px` }}
        >
          <HeroSection />
        </div>
        <div
          id="section2"
          className="mx-auto my-20 flex w-full max-w-7xl flex-col px-4 lg:py-28"
          style={{ scrollMarginTop: `${navbarHeight + 20}px` }}
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              About Me
            </h2>
            <div className="mx-auto h-1 w-24 bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-500 dark:to-cyan-500"></div>
          </div>
          <WhyHireMe />
        </div>
        <div
          id="section3"
          className="mx-auto my-20 flex w-full max-w-7xl flex-col px-4 lg:py-28"
          style={{ scrollMarginTop: `${navbarHeight + 20}px` }}
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              My Projects
            </h2>
            <div className="mx-auto h-1 w-24 bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-500 dark:to-cyan-500"></div>
          </div>
          <Projects />
        </div>
      </div>
    </main>
  );
};

export default Home;
