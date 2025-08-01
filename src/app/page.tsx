"use client";
import ProjectTab from "@/components/ProjectTab";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
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

export default function Home() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, []);

  // Enhanced navigation with loading state
  const navigateWithLoading = (path: string) => {
    setIsNavigating(true);
    setTimeout(() => {
      router.push(path);
    }, 300);
  };

  const navigateToAbout = () => navigateWithLoading("/about");
  const navigateToExperience = () => navigateWithLoading("/experience");

  const scrollToProjects = () => {
    const section = document.getElementById("projects-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Analytics />
      
      {/* Loading Screens */}
      <LoadingScreen isVisible={isLoading} />
      <LoadingScreen isVisible={isNavigating} />
      
      <div className={`bg-white flex min-h-screen flex-col relative transition-opacity duration-500 ${
        isLoading ? 'opacity-0' : 'opacity-100'
      }`}>
        {/* Header */}
        <div className="relative w-full flex flex-col items-center h-screen">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover filter grayscale brightness-25"
          >
            <source src="/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Navigation Bar */}
          <div className="flex justify-center md:justify-end items-center px-4 md:px-12 lg:px-36 py-5 w-full z-10 absolute top-0">
            <div className="flex space-x-4 md:space-x-8 text-base md:text-lg font-medium text-white">
              <button 
                onClick={navigateToAbout} 
                className="hover:underline transition-all duration-200 hover:scale-105"
                disabled={isNavigating}
              >
                About
              </button>
              <button
                onClick={navigateToExperience}
                className="hover:underline transition-all duration-200 hover:scale-105"
                disabled={isNavigating}
              >
                Experience
              </button>
            </div>
          </div>

          {/* Title Section with fade-in animation */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-0 space-y-2 md:space-y-3 px-4 animate-fade-in">
            <div className="text-base md:text-xl font-semibold text-white">
              UI/UX DESIGNER AND BACKEND DEVELOPER
            </div>
            <div className="text-2xl md:text-4xl font-bold text-white">
              Khayden Roberts
            </div>
          </div>

          {/* Arrow with bounce animation */}
          <div className="absolute bottom-6 md:bottom-10 flex justify-center w-full animate-bounce">
            <button onClick={scrollToProjects} className="cursor-pointer hover:scale-110 transition-transform duration-200">
              <Image
                src="/down-arrow.png"
                alt="Scroll Down"
                width={isMobile ? 40 : 50}
                height={isMobile ? 40 : 50}
              />
            </button>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects-section">
          <ProjectTab />
        </div>

        {/* Footer */}
        <footer className="bg-black text-white flex flex-col w-full px-6 md:px-16 py-8 md:py-10 border-t-2 border-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <h1 className="font-semibold text-white">CONTACT ME</h1>
              <p className="text-gray-300">Khaydenroberts22@gmail.com</p>
            </div>
            <div className="mb-4 md:mb-0">
              <h1 className="font-semibold text-white">{"LET'S CONNECT"}</h1>
              <p className="text-gray-300">
                <a
                  href="https://www.linkedin.com/in/khayden-roberts-5783b32b5/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <span> |</span>
                <a
                  href="https://github.com/Hoochymoochy?tab=overview&from=2025-03-01&to=2025-03-30"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  Github
                </a>
              </p>
            </div>
            <div>
              <h1 className="font-semibold text-white">
                © 2025 KHAYDEN ROBERTS
              </h1>
              <p className="text-gray-300">Made with Next.js and Tailwind</p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out 0.5s both;
        }
      `}</style>
    </>
  );
}