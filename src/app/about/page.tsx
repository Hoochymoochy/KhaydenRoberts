"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const LoadingScreen = ({ isVisible }: { isVisible: boolean }) => (
  <div
    className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-500 ${
      isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
  >
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
      <div className="text-white text-lg font-medium">Loading...</div>
    </div>
  </div>
);

export default function About() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const navigateWithLoading = (path: string) => {
    setIsNavigating(true);
    setTimeout(() => router.push(path), 300);
  };

  return (
    <>
      <LoadingScreen isVisible={isLoading} />
      <LoadingScreen isVisible={isNavigating} />

      <div
        className={`flex flex-col min-h-screen bg-black text-white transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <nav className="flex justify-center md:justify-end px-4 md:px-12 py-4 md:py-6 text-sm md:text-base tracking-wide w-full bg-black">
          <button
            onClick={() => navigateWithLoading("/")}
            className="mx-2 md:mr-6 hover:text-white/60 transition duration-300"
            disabled={isNavigating}
          >
            Home
          </button>
          <span className="mx-2 md:mr-6 text-white/40">About</span>
          <button
            onClick={() => navigateWithLoading("/experience")}
            className="mx-2 hover:text-white/60 transition duration-300"
            disabled={isNavigating}
          >
            Experience
          </button>
        </nav>

        <div className="flex flex-col md:flex-row items-center w-full flex-1">
          <div className="w-full md:w-1/2 relative h-64 md:h-screen overflow-hidden animate-fade-in-left">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/human3d.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-start justify-center px-6 md:px-12 lg:px-16 py-10 md:py-0 animate-fade-in-right">
            <p className="text-xs tracking-[0.25em] uppercase text-white/45 mb-3">
              About
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-2 tracking-tight">
              KHAYDEN ROBERTS
            </h1>
            <p className="text-white/70 mb-6 md:mb-8 tracking-wide">
              Full Stack Software Engineer
            </p>
            <p className="text-base md:text-lg mb-5 text-white/60 leading-relaxed">
              Full-stack engineer specializing in React, Next.js, TypeScript,
              and Go, with production experience building scalable APIs,
              multi-tenant data architectures, and CI/CD-automated deployment
              pipelines.
            </p>
            <p className="text-base md:text-lg mb-5 text-white/60 leading-relaxed">
              Skilled in automated testing with Playwright and GitLab CI/CD,
              with a proven track record shipping high-availability features and
              platforms from design through deployment in Agile teams.
            </p>
            <p className="text-sm text-white/45 mb-8 leading-relaxed">
              Salt Lake City, UT · +1 (385) 290-2056 · BS Computer Science,
              Neumont University 2026
            </p>

            <div className="relative mt-2 w-full md:w-auto animate-fade-in-up">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover rounded-xl md:rounded-2xl grayscale brightness-200"
              >
                <source src="/border.mp4" type="video/mp4" />
              </video>
              <div className="relative z-10 px-4 md:px-6 py-3 bg-black/80 m-2 md:m-3 rounded-xl md:rounded-2xl hover:bg-black ease-in-out duration-500 text-center md:text-left hover:scale-105 transition-transform">
                <a
                  href="mailto:khaydenroberts@gmail.com"
                  className="text-lg md:text-xl text-white"
                >
                  Get in Touch
                </a>
              </div>
            </div>
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
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out 0.3s both;
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.5s both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.7s both;
        }
      `}</style>
    </>
  );
}
