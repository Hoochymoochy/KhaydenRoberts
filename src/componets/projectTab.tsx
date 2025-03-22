"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function ProjectTab() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div
      className="flex justify-center bg-black items-start flex-col py-28 px-20 w-full min-h-screen h-auto space-y-64 relative"
      ref={ref}
    >
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover filter grayscale brightness-25 absolute"
      >
        <source src="/pxl.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Section 1 */}
      <div className="flex flex-row space-x-10 w-full min-h-3/5 justify-center items-start">
        {/* Picture */}
        <motion.div
          className="w-1/2 justify-center items-center flex"
          animate={controls}
          initial="hidden"
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: -100, opacity: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <video autoPlay loop muted playsInline className="object-cover">
            <source src="/core-mobile.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Text */}
        <motion.div
          animate={controls}
          initial="hidden"
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: 100, opacity: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="w-1/2 h-auto items-center flex "
        >
          <div className="w-2/3 space-y-2 mt-20 relative overflow-hidden">
            {/* Video Background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover rounded-2xl grayscale brightness-200"
            >
              <source src="/border.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Content */}
            <div className="relative z-10 p-4 bg-black/80 m-3 rounded-2xl">
              <div className="text-2xl text-white">Core Mobile Frontend</div>
              <div className="font-bold text-4xl text-white">
                Designing and Implementing Screen Features for User Data
                Tracking
              </div>
              <div className="flex blocks space-x-6 mt-4">
                <div className="bg-black border-2 text-white text-opacity-100 rounded-xl justify-center items-center text-xl p-2 inline-flex whitespace-nowrap px-4">
                  UI/UX Design
                </div>
                <div className="bg-black border-2 text-white text-opacity-50 rounded-xl justify-center items-center text-xl p-2 inline-flex whitespace-nowrap px-4">
                  Mobile Development
                </div>
              </div>

              <div className="text-2xl text-gray-300 mt-4">
                Built the frontend architecture for a mobile app tracking user
                data and visualizing growth, with seamless authentication and
                dynamic UI for real-time location and activity tracking. Focused
                on responsive interfaces for enhanced engagement.
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-row space-x-10 w-full min-h-3/5 justify-center items-start">
        {/* Text */}
        <motion.div
          animate={controls}
          initial="hidden"
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: 100, opacity: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="w-1/2 text-4xl flex justify-center items-center h-auto"
        >
          <div className="w-2/3 space-y-2 relative overflow-hidden">
            {/* Video Background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover rounded-2xl grayscale brightness-200"
            >
              <source src="/border.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="relative z-10 p-4 bg-black/80 m-3 rounded-2xl">
              <div className="text-2xl text-white">C0RE L0RE Fullstack</div>
              <div className="font-bold text-4xl">
                Designing and Implementing Screen Features for Comprehensive
                Data Tracking
              </div>
              <div className="flex blocks space-x-6 mt-4">
                <div className="bg-black border-2 text-white text-opacity-100 rounded-xl justify-center items-center text-xl p-2 inline-flex whitespace-nowrap px-4">
                  AI Implementation
                </div>
                <div className="bg-black border-2 text-white text-opacity-100 rounded-xl justify-center items-center text-xl p-2 inline-flex whitespace-nowrap px-4">
                  Data Tracking
                </div>
              </div>
              <div className="text-2xl text-gray-300 mt-4">
                Developed an AI-powered personal data tracking system ensuring
                privacy by processing data locally, with a backend synchronizing
                user activity, skill evolution, and dynamic Lore experiences for
                real-time progression insights.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Picture */}
        <motion.div
          className="w-1/2"
          animate={controls}
          initial="hidden"
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: -100, opacity: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <video autoPlay loop muted playsInline className="object-cover">
            <source src="/l0re.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-row space-x-10 w-full min-h-3/5 relative justify-center items-start">
        {/* Picture */}
        <motion.div
          className="w-1/2 flex flex-row"
          animate={controls}
          initial="hidden"
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: -100, opacity: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <video autoPlay loop muted playsInline className="object-cover">
            <source src="/stuped.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Text */}
        <motion.div
          animate={controls}
          initial="hidden"
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: 100, opacity: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="w-1/2 text-4xl flex justify-center items-center h-auto"
        >
          <div className="w-2/3 space-y- relative overflow-hidden">
            {/* Video Background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover rounded-2xl grayscale brightness-200"
            >
              <source src="/border.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Content */}
            <div className="relative z-10 p-4 bg-black/80 m-3 rounded-2xl">
              <div className="text-2xl text-white">Stuped Web App</div>
              <div className="font-bold text-4xl text-white">
                Building a Vector Database-Powered Image Analysis System
              </div>
              <div className="flex blocks space-x-6 mt-4">
                <div className="bg-black border-2 text-white text-opacity-100 rounded-xl justify-center items-center text-xl p-2 inline-flex whitespace-nowrap px-4">
                  React
                </div>
                <div className="bg-black border-2 text-white text-opacity-50 rounded-xl justify-center items-center text-xl p-2 inline-flex whitespace-nowrap px-4">
                  Vector Database
                </div>
              </div>

              <div className="text-2xl text-gray-300 mt-4">
                Developed a web app that processes user-uploaded images via a
                vector database, retrieving relevant Wikipedia articles in
                real-time. Implemented efficient data processing and seamless
                React integration for user interaction.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
