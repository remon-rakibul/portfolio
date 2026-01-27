import React from "react";

const TabContent = ({
  isActive,
  children,
}: {
  isActive: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`w-full text-white transition-all duration-300 ${
        isActive
          ? "block animate-fade-in"
          : "hidden"
      }`}
    >
      {children}
    </div>
  );
};

export default TabContent;
