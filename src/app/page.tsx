"use client";
import Head from "next/head";
import ProjectTab from "@/componets/ProjectTab";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const navigateToAbout = () => router.push("/about");
  const navigateToExperience = () => router.push("/experience");

  // Add scroll to projects function
  const scrollToProjects = () => {
    const section = document.getElementById("projects-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="bg-white flex min-h-screen flex-col relative">
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
          <div className="flex justify-end items-center px-36 py-5 w-full z-10 absolute top-0">
            <div className="flex space-x-8 text-lg font-medium text-white">
              <button onClick={navigateToAbout} className="hover:underline">
                About
              </button>
              <button
                onClick={navigateToExperience}
                className="hover:underline"
              >
                Experience
              </button>
            </div>
          </div>

          {/* Title Section */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-0 space-y-3">
            <div className="text-xl font-semibold text-white">
              UI/UX DESIGNER AND BACKEND DEVELOPER
            </div>
            <div className="text-4xl font-bold text-white">Khayden Roberts</div>
          </div>

          {/* Arrow - Added onClick function */}
          <div className="absolute bottom-10 flex justify-center w-full">
            <button onClick={scrollToProjects} className="cursor-pointer">
              <Image
                src="/down-arrow.png"
                alt="Scroll Down"
                width={50}
                height={50}
              />
            </button>
          </div>
        </div>

        {/* Added ID to the ProjectTab section */}
        <div id="projects-section">
          <ProjectTab />
        </div>

        {/* Footer */}
        <footer className="bg-black text-white flex flex-col w-full px-16 py-10 border-t-2 border-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h1 className="font-semibold text-white">CONTACT ME</h1>
              <p className="text-gray-300">Khaydenroberts22@gmail.com</p>
            </div>
            <div>
              <h1 className="font-semibold text-white">LET'S CONNECT</h1>
              <p className="text-gray-300">
                <a
                  href="https://www.linkedin.com/in/khayden-roberts-5783b32b5/"
                  target="_blank"
                  className="text-blue-400"
                >
                  LinkedIn
                </a>
                <span> |</span>
                <a
                  href="https://github.com/Hoochymoochy?tab=overview&from=2025-03-01&to=2025-03-30"
                  target="_blank"
                  className="text-blue-400"
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
    </>
  );
}
