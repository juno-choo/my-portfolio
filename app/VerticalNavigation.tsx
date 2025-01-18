"use client";

import React, { useState } from "react";
import {
  HomeIcon,
  UserCircleIcon,
  BriefcaseIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const VerticalNavigation: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const html = document.documentElement; // <html>
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      html.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  return (
    <>
      {/* Dark Mode Toggle Button */}
      <div className="fixed top-5 right-5 z-50">
        <button
          onClick={toggleDarkMode}
          className={`flex items-center justify-center px-4 py-2 rounded-md shadow-md transition-colors duration-300 ${
            isDarkMode
              ? "bg-gray-700 text-gray-100 hover:bg-gray-100 hover:text-gray-700"
              : "bg-gray-200 text-gray-800 hover:bg-gray-800 hover:text-gray-200"
          }`}
        >
          {isDarkMode ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Vertical Navigation */}
      <div className="fixed left-5 top-1/2 -translate-y-1/2 flex flex-col space-y-6 z-50">
        {[
          { href: "#home", icon: <HomeIcon />, label: "Home" },
          { href: "#about", icon: <UserCircleIcon />, label: "About" },
          { href: "#portfolio", icon: <BriefcaseIcon />, label: "Portfolio" },
          {
            href: "#contact",
            icon: <ChatBubbleOvalLeftEllipsisIcon />,
            label: "Contact",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 shadow-md transition-transform duration-300 hover:scale-110"
          >
            {/* Icon */}
            <div className="text-gray-600 dark:text-gray-300 group-hover:text-transparent">
              {item.icon}
            </div>

            {/* Centered text on hover */}
            <span
              className="
                absolute 
                top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-300 
                text-xs text-gray-700 dark:text-gray-100 
                font-futuristic
              "
            >
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </>
  );
};

export default VerticalNavigation;
