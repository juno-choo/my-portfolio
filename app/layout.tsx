import "./globals.css";
import React from "react";
import VerticalNavigation from "./VerticalNavigation";

export const metadata = {
  title: "My Portfolio",
  description: "A personal portfolio website built with Next.js",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <VerticalNavigation />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
