"use client";
import WordPlanet from "@/components/WordPlanet";
import { useRouter } from "next/navigation";

export default function Experience() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  };
  const navigateToAbout = () => {
    router.push("/about");
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <div className="flex justify-end px-12 py-6 text-lg font-medium absolute top-0 w-full z-10">
        <button
          onClick={navigateToHome}
          className="mr-6 hover:text-gray-400 transition duration-300"
        >
          Home
        </button>
        <button
          onClick={navigateToAbout}
          className="mr-6 hover:text-gray-400 transition duration-300"
        >
          About
        </button>
        <span className="mr-6 text-gray-500">Experience</span>
      </div>

      {/* Content */}
      <div className="flex flex-row items-center w-full h-full pt-24 pb-16">
        {/* WordPlanet Section */}
        <div className="w-1/2 relative h-screen flex items-center justify-center">
          <WordPlanet />
        </div>

        {/* Text Section */}
        <div className="w-1/2 flex flex-col items-start justify-center px-12 py-16 max-h-screen ">
          <h1 className="text-4xl font-extrabold mb-8 text-left text-white">
            My Experience
          </h1>

          <section className="mb-10 border-l-2 border-gray-700 pl-6">
            <h2 className="text-2xl font-semibold text-gray-200">
              Project-Based Learning
            </h2>
            <p className="mt-3 text-gray-300">
              I attended a project-based learning institution, where hands-on
              experience was the core of my education. Instead of just learning
              theories, I applied concepts to real-world projects, collaborating
              with teams of different skill levels. This approach taught me how
              to quickly adapt to new challenges, work efficiently in a team,
              and develop practical problem-solving skills. I worked on diverse
              projects spanning web development, mobile applications, and
              backend systems, which helped me build a strong foundation in
              software engineering.
            </p>
          </section>

          <section className="mb-10 border-l-2 border-gray-700 pl-6">
            <h2 className="text-2xl font-semibold text-gray-200">
              Scrum & Leadership
            </h2>
            <p className="mt-3 text-gray-300">
              As a Scrum Master in multiple projects, I led teams through Agile
              sprints, ensuring smooth workflows, effective communication, and
              continuous improvement. I facilitated daily stand-ups, sprint
              planning, and retrospectives, helping the team stay aligned with
              project goals while adapting to changes efficiently. My experience
              in Scrum has strengthened my leadership, time management, and
              organizational skills. Additionally, I mentored junior developers,
              helping them navigate project complexities and improve their
              technical and collaborative abilities.
            </p>
          </section>

          <section className="mb-10 border-l-2 border-gray-700 pl-6">
            <h2 className="text-2xl font-semibold text-gray-200">
              Team Collaboration
            </h2>
            <p className="mt-3 text-gray-300">
              I have worked with teams of all sizes, from small agile groups to
              large-scale development teams. Collaborating with people of
              varying experience levels has taught me the importance of
              mentorship, adaptability, and clear communication. I have also
              worked on cross-functional teams, where I coordinated with
              designers, backend engineers, and product managers to ensure
              seamless project execution. My ability to bridge gaps between
              different teams and maintain a shared vision has been crucial in
              delivering successful projects.
            </p>
          </section>

          <section className="mb-10 border-l-2 border-gray-700 pl-6">
            <h2 className="text-2xl font-semibold text-gray-200">
              Technical Skills & Tools
            </h2>
            <p className="mt-3 text-gray-300">
              My experience has allowed me to work with a variety of
              technologies and tools, including React, Node.js, Express,
              WebSockets, and AWS. I am proficient in full-stack development and
              have a deep understanding of backend and frontend integration.
              Additionally, I have worked with CI/CD pipelines, Git workflows,
              and Agile project management tools like Jira and Trello.
            </p>
          </section>

          <section className="border-l-2 border-gray-700 pl-6">
            <h2 className="text-2xl font-semibold text-gray-200">
              Problem-Solving & Adaptability
            </h2>
            <p className="mt-3 text-gray-300">
              Throughout my experiences, I have encountered and overcome
              numerous challenges, from debugging complex systems to optimizing
              team workflows. My ability to quickly assess a situation, break
              down problems, and implement effective solutions has been a key
              asset in my development journey. Working in fast-paced,
              high-pressure environments has taught me how to remain focused,
              adaptable, and solution-oriented.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
