"use client";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  };
  const navigateToWork = () => {
    router.push("/work");
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <div className="flex justify-end px-12 py-6 text-lg font-medium absolute top-0 w-full">
        <button onClick={navigateToHome} className="mr-6 hover:underline">
          Home
        </button>
        <span className="mr-6 text-gray-400">About</span>
        <button onClick={navigateToWork} className="hover:underline">
          Work
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-row items-center w-full h-full">
        {/* Video Section */}
        <div className="w-1/2 relative h-screen overflow-hidden">
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
        <div className="w-1/2 flex flex-col items-start justify-center px-12">
          <h1 className="text-4xl font-bold mb-4">
            Hello, my name is Khayden Roberts. I'm a Full-Stack Developer.
          </h1>
          <p className="text-lg mb-6">
            I specialize in crafting scalable, efficient, and engaging web and
            mobile applications. With a deep passion for technology, I thrive in
            building seamless user experiences, leveraging tools like React,
            Node.js, Express, and AWS to create high-performance applications.
          </p>
          <p className="text-lg mb-6">
            Beyond coding, I'm also exploring the intersection of music, AR, and
            AI, bringing creative and technical innovation together. Whether
            it's developing a cloud server platform, enhancing
            Spotify-integrated AR experiences, or DJing high-energy techno sets,
            I bring a unique blend of technical expertise and creativity to
            every project.
          </p>
          <p className="text-lg mb-6">
            Looking for a developer who thrives on solving complex problems and
            pushing boundaries? Let's connect and build something incredible
            together.
          </p>

          {/* Contact Section */}
          <div className="relative mt-10">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover rounded-2xl grayscale brightness-200"
            >
              <source src="/border.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10 px-6 py-3 bg-black/80 m-3 rounded-2xl hover:bg-black ease-in-out duration-500">
              <a
                href="mailto:Khaydenroberts22@gmail.com"
                className="text-xl text-white"
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
