"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main>
      {[
        { id: "home", title: "JUNO CHOO", typewriter: true },
        {
          id: "about",
          title: "About Me",
          content:
            "I am a passionate software engineer who loves creating beautiful, user-friendly web applications.",
        },
        {
          id: "portfolio",
          title: "My Portfolio",
          content: "Here are some of my favorite projects:",
          list: [
            "📁 Project A: A sleek e-commerce platform with modern UI/UX.",
            "📁 Project B: A personal finance tracker built with React and Tailwind.",
            "📁 Project C: An AI-based chatbot integrated with a language learning app.",
          ],
        },
        {
          id: "contact",
          title: "Contact Me",
          content:
            "I’d love to hear from you! Feel free to reach out via email or connect with me on LinkedIn.",
          list: [
            "📧 Email: choojunhoe@gmail.com",
            "🔗 LinkedIn: linkedin.com/in/junhoe",
            "🌐 Website: junochoo.dev",
          ],
        },
      ].map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="h-screen flex flex-col items-center justify-center"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-700 dark:text-gray-100">
            {section.title}
          </h2>
          {section.typewriter && (
            <p className="text-lg md:text-2xl text-[#800000] dark:text-[#ff9999] mt-4">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Software Engineer",
                  "Tech & Art Enthusiast",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
          )}
          {section.content && (
            <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 px-6 max-w-4xl text-center">
              {section.content}
            </p>
          )}
          {section.list && (
            <ul className="mt-8 space-y-4 text-gray-600 dark:text-gray-300">
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </main>
  );
}
