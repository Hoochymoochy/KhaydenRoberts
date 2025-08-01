"use client";
import WordPlanet from "@/components/WordPlanet";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

// Loading Screen Component
const LoadingScreen = ({ isVisible }: { isVisible: boolean }) => (
  <div className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-500 ${
    isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
  }`}>
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
      <div className="text-white text-lg font-medium">Loading...</div>
    </div>
  </div>
);

export default function Experience() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);

  // Handle initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Enhanced navigation with loading state
  const navigateWithLoading = (path: string) => {
    setIsNavigating(true);
    setTimeout(() => {
      router.push(path);
    }, 300);
  };

  const navigateToHome = () => navigateWithLoading("/");
  const navigateToAbout = () => navigateWithLoading("/about");

  return (
    <>
      {/* Loading Screens */}
      <LoadingScreen isVisible={isLoading} />
      <LoadingScreen isVisible={isNavigating} />
      
      <div className={`flex flex-col min-h-screen bg-black text-white transition-opacity duration-500 ${
        isLoading ? 'opacity-0' : 'opacity-100'
      }`}>
        {/* Navigation Bar */}
        <div className="flex justify-center md:justify-end px-4 md:px-12 py-4 md:py-6 text-base md:text-lg font-medium w-full bg-black z-10">
          <button
            onClick={navigateToHome}
            className="mx-2 md:mr-6 hover:text-gray-400 transition duration-300 hover:underline hover:scale-105"
            disabled={isNavigating}
          >
            Home
          </button>
          <button
            onClick={navigateToAbout}
            className="mx-2 md:mr-6 hover:text-gray-400 transition duration-300 hover:underline hover:scale-105"
            disabled={isNavigating}
          >
            About
          </button>
          <span className="mx-2 text-gray-500">Experience</span>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center w-full flex-1">
          {/* WordPlanet Section */}
          <div className="w-full md:w-1/2 relative h-64 md:h-full flex items-center justify-center order-last md:order-first animate-fade-in-left">
            <WordPlanet />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-start px-6 md:px-12 py-4 md:py-8 animate-fade-in-right">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 text-left text-white">
              My Experience
            </h1>

            <section className="mb-6 md:mb-10 border-l-2 border-gray-700 pl-4 md:pl-6 hover:border-gray-500 transition-colors duration-300">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-200">
                Project-Based Learning
              </h2>
              <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-300">
              Hands-on projects shaped me — building real apps, collaborating cross-skill, and leveling up fast. I’m all about practical problem-solving and delivering full-stack solutions.
              </p>
            </section>

            <section className="mb-6 md:mb-10 border-l-2 border-gray-700 pl-4 md:pl-6 hover:border-gray-500 transition-colors duration-300">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-200">
                Scrum & Leadership
              </h2>
              <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-300">
              Led Agile sprints as Scrum Master, driving teams with clear goals, smooth workflows, and sharp communication. Mentored juniors to boost their skills and project impact.
              </p>
            </section>

            <section className="mb-6 md:mb-10 border-l-2 border-gray-700 pl-4 md:pl-6 hover:border-gray-500 transition-colors duration-300">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-200">
                Team Collaboration
              </h2>
              <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-300">
              From scrappy small teams to big cross-functional crews, I bridge gaps between devs, designers, and PMs. Clear communication + shared vision = project wins.
              </p>
            </section>

            <section className="mb-6 md:mb-10 border-l-2 border-gray-700 pl-4 md:pl-6 hover:border-gray-500 transition-colors duration-300">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-200">
                Technical Skills & Tools
              </h2>
              <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-300">
              Rock React, Node.js, Express, WebSockets, AWS, plus CI/CD with Git, Jira, and Trello. Deep full-stack fluency and backend-frontend synergy.
              </p>
            </section>

            <section className="mb-6 md:mb-10 border-l-2 border-gray-700 pl-4 md:pl-6 hover:border-gray-500 transition-colors duration-300">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-200">
                Problem-Solving & Adaptability
              </h2>
              <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-300 mb-8 md:mb-0">
              Debugging, optimizing, pivoting — I thrive on fast-paced challenges, staying sharp and solution-focused under pressure.
              </p>
            </section>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out 0.3s both;
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.5s both;
        }
      `}</style>
    </>
  );
}