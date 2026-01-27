import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { Link } from "react-router-dom";

// import MobileNav from "./mobileNav";
interface DarkModeProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ darkMode, setDarkMode }: DarkModeProps) => {
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 dark:border-white/10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl w-full items-center justify-between px-4 py-4">
        <a href="/#section1" className="group">
          <h1 className="bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-xl font-bold text-transparent transition-all group-hover:from-teal-500 group-hover:to-cyan-500 dark:group-hover:from-teal-300 dark:group-hover:to-cyan-300 md:text-2xl">
            Portfolio
          </h1>
        </a>
        <div className="flex items-center gap-4">
          <div
            className="cursor-pointer rounded-lg p-2 text-2xl text-gray-700 dark:text-white transition-all hover:bg-gray-100 dark:hover:bg-white/10 hover:text-teal-600 dark:hover:text-teal-400"
            onClick={handleDarkMode}
          >
            <BsMoonStarsFill className="cursor-pointer transition-transform hover:rotate-12" />
          </div>
          <Link to="/contact">
            <button className="rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-teal-500/50 lg:text-base">
              Hire Me!
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
