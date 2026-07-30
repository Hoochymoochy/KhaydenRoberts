"use client";
import WordPlanet from "@/components/WordPlanet";
import { useRouter } from "next/navigation";
import Image from "next/image";
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

const jobs = [
  {
    company: "Switchyard",
    logo: "/switchyard_partners_logo.jpeg",
    role: "Full Stack Developer",
    location: "Remote",
    dates: "June 2026 – Present",
    points: [
      "Built a full-stack CRM for a private equity firm with Next.js, React, TypeScript, PostgreSQL, and Prisma — 100+ investment opportunities across 8+ pipeline stages.",
      "Designed Prisma schemas with PostgreSQL Row-Level Security for secure multi-tenant access across 10+ organizations.",
      "Integrated Microsoft Graph API (OAuth 2.0) for Outlook email and calendar sync with encrypted token management.",
      "Improved frontend and backend performance by 35% via reusable components, SSR, and query tuning.",
    ],
  },
  {
    company: "Adobe",
    logo: "/adobe_logo.jpeg",
    role: "Full Stack Developer",
    location: "Remote",
    dates: "March 2026 – June 2026",
    points: [
      "Shipped full-stack features with React, TypeScript, Go, and GraphQL for thousands of internal users.",
      "Built REST APIs handling 10,000+ requests/day at 99.9% availability.",
      "Automated GitLab CI/CD, cutting deployment time by 70%.",
      "Maintained Playwright e2e and regression suites in CI to catch defects before release.",
    ],
  },
];

export default function Experience() {
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
        <nav className="flex justify-center md:justify-end px-4 md:px-12 py-4 md:py-6 text-sm md:text-base tracking-wide w-full bg-black z-10">
          <button
            onClick={() => navigateWithLoading("/")}
            className="mx-2 md:mr-6 hover:text-white/60 transition duration-300"
            disabled={isNavigating}
          >
            Home
          </button>
          <button
            onClick={() => navigateWithLoading("/about")}
            className="mx-2 md:mr-6 hover:text-white/60 transition duration-300"
            disabled={isNavigating}
          >
            About
          </button>
          <span className="mx-2 text-white/40">Experience</span>
        </nav>

        <div className="flex flex-col lg:flex-row w-full flex-1">
          <div className="w-full lg:w-2/5 relative min-h-64 lg:min-h-full flex items-center justify-center order-last lg:order-first animate-fade-in-left">
            <WordPlanet />
          </div>

          <div className="w-full lg:w-3/5 flex flex-col items-start justify-start px-6 md:px-12 lg:px-16 py-8 md:py-12 animate-fade-in-right overflow-y-auto">
            <p className="text-xs tracking-[0.25em] uppercase text-white/45 mb-3">
              Professional
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
              Experience
            </h1>
            <p className="text-white/55 mb-10 md:mb-14 max-w-xl leading-relaxed">
              Full-stack work at Switchyard and Adobe — scalable APIs,
              multi-tenant data, and CI/CD-automated delivery.
            </p>

            <div className="space-y-12 md:space-y-14 w-full max-w-2xl">
              {jobs.map((job) => (
                <section
                  key={job.company}
                  className="border-l border-white/20 pl-5 md:pl-7 hover:border-white/50 transition-colors duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                    <div className="flex items-center gap-3">
                      <Image
                        src={job.logo}
                        alt={`${job.company} logo`}
                        width={36}
                        height={36}
                        className="h-8 w-8 md:h-10 md:w-10 object-contain rounded-md shrink-0"
                      />
                      <h2 className="text-xl md:text-2xl font-semibold">
                        {job.company}
                      </h2>
                    </div>
                    <span className="text-sm text-white/40">{job.dates}</span>
                  </div>
                  <p className="text-white/60 text-sm md:text-base mb-4">
                    {job.role} — {job.location}
                  </p>
                  <ul className="space-y-2.5 text-sm md:text-base text-white/55 leading-relaxed">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/35" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <section className="mt-12 md:mt-16 pt-8 border-t border-white/10 w-full max-w-2xl">
              <h2 className="text-lg font-semibold mb-3">Education</h2>
              <p className="text-white/55 text-sm md:text-base">
                Bachelor of Science (BS), Computer Science — Neumont University,
                2026
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
