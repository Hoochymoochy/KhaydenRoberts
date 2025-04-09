"use client";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  };

  const navigateToExperience = () => {
    router.push("/experience");
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <div className="flex justify-center md:justify-end px-4 md:px-12 py-4 md:py-6 text-base md:text-lg font-medium w-full bg-black">
        <button
          onClick={navigateToHome}
          className="mx-2 md:mr-6 hover:underline"
        >
          Home
        </button>
        <span className="mx-2 md:mr-6 text-gray-400">About</span>
        <button onClick={navigateToExperience} className="mx-2 hover:underline">
          Experience
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center w-full flex-1">
        {/* Video Section */}
        <div className="w-full md:w-1/2 relative h-64 md:h-screen md:h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/human3d.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center px-6 md:px-12 py-8 md:py-0">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            {"Hello, my name is Khayden Roberts. I'm a Full-Stack Developer."}
          </h1>
          <p className="text-base md:text-lg mb-4 md:mb-6">
            I specialize in crafting scalable, efficient, and engaging web and
            mobile applications. With a deep passion for technology, I thrive in
            building seamless user experiences, leveraging tools like React,
            Node.js, Express, and AWS to create high-performance applications.
          </p>
          <p className="text-base md:text-lg mb-4 md:mb-6">
            {
              "Beyond coding, I'm also exploring the intersection of music, AR, and AI, bringing creative and technical innovation together."
            }
          </p>
          <p className="text-base md:text-lg mb-4 md:mb-6">
            {
              "Looking for a developer who thrives on solving complex problems and pushing boundaries? Let's connect and build something incredible together."
            }
          </p>

          {/* Contact Section */}
          <div className="relative mt-6 md:mt-10 w-full md:w-auto">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover rounded-xl md:rounded-2xl grayscale brightness-200"
            >
              <source src="/border.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10 px-4 md:px-6 py-3 bg-black/80 m-2 md:m-3 rounded-xl md:rounded-2xl hover:bg-black ease-in-out duration-500 text-center md:text-left">
              <a
                href="mailto:Khaydenroberts22@gmail.com"
                className="text-lg md:text-xl text-white"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
