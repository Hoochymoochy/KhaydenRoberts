"use client";
import ProjectTab from "@/components/ProjectTab";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
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

const experience = [
  {
    role: "Full Stack Developer",
    company: "Switchyard",
    logo: "/switchyard_partners_logo.jpeg",
    location: "Remote",
    dates: "June 2026 – Present",
    points: [
      "Built a full-stack CRM platform for a private equity firm using Next.js, React, TypeScript, PostgreSQL, and Prisma, supporting 100+ investment opportunities across 8+ deal pipeline stages.",
      "Designed relational schemas and Prisma models with PostgreSQL Row-Level Security, enabling secure multi-tenant data access for 10+ organizations.",
      "Integrated Microsoft Graph API (OAuth 2.0) for Outlook email and calendar sync with encrypted token management.",
      "Improved frontend and backend performance by 35% through reusable components, SSR optimizations, and query tuning.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Adobe",
    logo: "/adobe_logo.jpeg",
    location: "Remote",
    dates: "March 2026 – June 2026",
    points: [
      "Developed full-stack features using React, TypeScript, Go, and GraphQL, serving thousands of internal users.",
      "Built and maintained REST APIs handling 10,000+ requests per day while sustaining 99.9% service availability.",
      "Automated CI/CD pipelines in GitLab, reducing deployment time by 70%.",
      "Wrote Playwright end-to-end and regression suites integrated into GitLab CI/CD to catch defects before release.",
      "Designed responsive, reusable React UI components with engineering, design, and product teams in Agile workflows.",
    ],
  },
];

export default function Home() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const navigateWithLoading = (path: string) => {
    setIsNavigating(true);
    setTimeout(() => router.push(path), 300);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Analytics />
      <LoadingScreen isVisible={isLoading} />
      <LoadingScreen isVisible={isNavigating} />

      <div
        className={`bg-black flex min-h-screen flex-col relative transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Hero */}
        <section className="relative w-full flex flex-col items-center h-screen overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover filter grayscale brightness-[0.28]"
          >
            <source src="/bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

          <nav className="flex justify-center md:justify-end items-center px-4 md:px-12 lg:px-24 py-5 w-full z-10 absolute top-0">
            <div className="flex space-x-6 md:space-x-10 text-sm md:text-base tracking-wide text-white/90">
              <button
                onClick={() => navigateWithLoading("/about")}
                className="hover:text-white transition-colors"
                disabled={isNavigating}
              >
                About
              </button>
              <button
                onClick={() => scrollTo("experience-section")}
                className="hover:text-white transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollTo("projects-section")}
                className="hover:text-white transition-colors"
              >
                Projects
              </button>
            </div>
          </nav>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-0 px-6 hero-enter">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.95]">
              KHAYDEN ROBERTS
            </h1>
            <p className="mt-4 md:mt-5 text-base md:text-xl text-white/85 tracking-[0.2em] uppercase">
              Full Stack Software Engineer
            </p>
            <p className="mt-4 max-w-xl text-sm md:text-base text-white/60 leading-relaxed">
              React, Next.js, TypeScript, and Go — shipping scalable APIs,
              multi-tenant systems, and CI/CD-automated platforms.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => scrollTo("experience-section")}
                className="px-6 py-3 border border-white/40 text-white text-sm tracking-wide hover:bg-white hover:text-black transition-colors duration-300"
              >
                View Experience
              </button>
              <button
                onClick={() => scrollTo("projects-section")}
                className="px-6 py-3 text-white/70 text-sm tracking-wide hover:text-white transition-colors duration-300"
              >
                See Projects
              </button>
            </div>
          </div>

          <div className="absolute bottom-6 md:bottom-10 flex justify-center w-full animate-bounce z-10">
            <button
              onClick={() => scrollTo("experience-section")}
              className="cursor-pointer hover:scale-110 transition-transform duration-200"
              aria-label="Scroll to experience"
            >
              <Image
                src="/down-arrow.png"
                alt=""
                width={isMobile ? 36 : 44}
                height={isMobile ? 36 : 44}
              />
            </button>
          </div>
        </section>

        {/* Professional Experience */}
        <section
          id="experience-section"
          className="relative w-full bg-black text-white px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-white/10"
        >
          <div className="max-w-5xl mx-auto">
            <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-white/45 mb-3">
              Professional
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Experience
            </h2>
            <p className="text-white/55 max-w-2xl text-base md:text-lg mb-14 md:mb-20 leading-relaxed">
              Production work building high-availability features and platforms
              from design through deployment — at Switchyard and Adobe.
            </p>

            <div className="space-y-16 md:space-y-20">
              {experience.map((job) => (
                <article
                  key={job.company}
                  className="border-l border-white/20 pl-6 md:pl-10 experience-item"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3 md:gap-4">
                      <Image
                        src={job.logo}
                        alt={`${job.company} logo`}
                        width={40}
                        height={40}
                        className="h-9 w-9 md:h-11 md:w-11 object-contain rounded-md shrink-0"
                      />
                      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                        {job.company}
                      </h3>
                    </div>
                    <span className="text-sm text-white/45 tracking-wide">
                      {job.dates}
                    </span>
                  </div>
                  <p className="text-white/70 mb-6">
                    {job.role} — {job.location}
                  </p>
                  <ul className="space-y-3 text-sm md:text-base text-white/60 leading-relaxed">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-16 md:mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-white/45">
              <p>
                Salt Lake City, UT ·{" "}
                <a
                  href="mailto:khaydenroberts@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  khaydenroberts@gmail.com
                </a>{" "}
                · +1 (385) 290-2056
              </p>
              <p className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/khayden-roberts-5783b32b5/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://khaydenroberts.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  khaydenroberts.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <div id="projects-section">
          <div className="bg-black px-6 md:px-16 lg:px-24 pt-16 md:pt-20 pb-4 border-t border-white/10">
            <div className="max-w-5xl mx-auto">
              <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-white/45 mb-3">
                Selected Work
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Projects
              </h2>
            </div>
          </div>
          <ProjectTab />
        </div>

        <footer className="bg-black text-white flex flex-col w-full px-6 md:px-16 py-8 md:py-10 border-t border-white/15">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left max-w-6xl mx-auto w-full">
            <div>
              <h3 className="font-semibold text-white tracking-wide text-sm">
                CONTACT
              </h3>
              <a
                href="mailto:khaydenroberts@gmail.com"
                className="text-white/55 hover:text-white transition-colors"
              >
                khaydenroberts@gmail.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-white tracking-wide text-sm">
                CONNECT
              </h3>
              <p className="text-white/55">
                <a
                  href="https://www.linkedin.com/in/khayden-roberts-5783b32b5/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <span className="mx-2">|</span>
                <a
                  href="https://github.com/Hoochymoochy"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white tracking-wide text-sm">
                © 2026 KHAYDEN ROBERTS
              </h3>
              <p className="text-white/55">Full Stack Software Engineer</p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes hero-enter {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-enter {
          animation: hero-enter 1s ease-out 0.4s both;
        }
        .experience-item {
          animation: hero-enter 0.8s ease-out both;
        }
        .experience-item:nth-child(2) {
          animation-delay: 0.15s;
        }
      `}</style>
    </>
  );
}
