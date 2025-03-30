"use client";
import Head from "next/head";
import ProjectTab from "@/componets/ProjectTab";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigateToAbout = () => router.push("/about");
  const navigateToExperience = () => router.push("/experience");
  const navigateToProjects = () => router.push("/projects");

  return (
    <> {
      /* 
      to do
      edit the mobile to make it bigger. Then 
       */
      }
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>

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
              <button onClick={navigateToProjects} className="hover:underline">
                Projects
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
        </div>

        <ProjectTab />

        {/* Footer */}
        <footer className="bg-black text-white flex flex-col w-full px-16 py-10 border-t-2 border-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h1 className="font-semibold text-white">CONTACT ME</h1>
              <p className="text-gray-300">Khaydenroberts22@gmail.com</p>
            </div>
            <div>
              <h1 className="font-semibold text-white">LET'S CONNECT</h1>
              <p className="text-gray-300">LinkedIn | Resume | Work</p>
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
