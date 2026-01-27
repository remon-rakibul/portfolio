import React from "react";

type CardProps = {
  // imageSrc: string;
  title: string;
  description: string;
  primaryUrl: string;
  secondaryUrl: string;
};

const Card: React.FC<CardProps> = ({
  // imageSrc,
  title,
  description,
  primaryUrl,
  secondaryUrl,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-800/50 dark:to-gray-900/50 p-1 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-cyan-500/0 to-teal-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-teal-500/10 group-hover:via-cyan-500/10 group-hover:to-teal-500/10"></div>
      
      <div className="relative rounded-2xl bg-white/80 dark:bg-gray-800/80 p-6 backdrop-blur-md ring-1 ring-gray-300 dark:ring-white/10">
        {/* Title */}
        <div className="mb-3 bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-xl font-bold text-transparent md:text-2xl">
          {title}
        </div>
        {/* Description */}
        <p className="mb-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300 md:text-base">
          {description}
        </p>

        {/* Button Section */}
        <div className="flex flex-col gap-3 md:flex-row">
          {primaryUrl !== "#" && (
            <a
              href={primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-2.5 text-center text-sm font-semibold text-white transition-all hover:from-teal-600 hover:to-cyan-600 hover:shadow-lg hover:shadow-teal-500/50"
            >
              GitHub
            </a>
          )}
          {secondaryUrl !== "#" && (
            <a
              href={secondaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg border border-teal-500/50 bg-transparent px-4 py-2.5 text-center text-sm font-semibold text-teal-600 dark:text-teal-400 transition-all hover:border-teal-500 dark:hover:border-teal-400 hover:bg-teal-500/10 hover:text-teal-700 dark:hover:text-teal-300"
            >
              {secondaryUrl.includes("drive.google.com") || secondaryUrl.includes("streamlit.app") || secondaryUrl.includes("vercel.app") || secondaryUrl.includes("codester.com") || secondaryUrl.includes("pypi.org") ? "View" : "Preview"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
