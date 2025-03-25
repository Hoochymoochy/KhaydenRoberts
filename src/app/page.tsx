"use client";
import Head from "next/head";
import ProjectTab from "@/componets/ProjectTab";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigateToAbout = () => {
    router.push("/about");
  };
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
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
          <div className="flex flex-row justify-between items-center px-36 py-5 w-full z-10 absolute top-0">
            <h1 className="text-2xl font-bold">KHAYDEN ROBERTS</h1>
            <div className="flex flex-row space-x-5 text-lg font-medium">
              <button onClick={navigateToAbout} className="z-10">
                work
              </button>
              <div>play</div>
              <div>About</div>
            </div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 text-center z-10">
            <div className="text-xl font-semibold text-white">
              UI/UX DESIGNER AND BACKEND DEVELOPER
            </div>
            <div className="text-4xl font-bold text-white">Khayden Roberts</div>
          </div>
        </div>

        <ProjectTab />

        {/* Footer */}
        <div className="bg-black flex w-full px-32 flex-col space-y-5 py-10 border-t-2 ">
          <div>Thanks for looking around</div>
          <div className="flex flex-row space-x-14">
            <div className="flex flex-col">
              <h1>CONTACT ME</h1>
              <h1>Khaydenroberts22@gmail.com</h1>
            </div>

            <div className="flex flex-col">
              <h1>LET'S CONNECT</h1>
              <h1>Linkedin Resume Work</h1>
            </div>

            <div className="flex flex-col">
              <h1>@2025 KHAYDEN ROBERTS</h1>
              <h1>Made with Next.js and Tailwind</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
