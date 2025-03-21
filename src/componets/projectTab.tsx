"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import gang from "../../public/gang.jpeg";
import Image from "next/image";

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
      className="flex justify-center items-center flex-col space-y-96 py-28 px-10 w-full h-screen"
      ref={ref}
    >
      {/* Section 1 */}
      <div className="flex flex-row space-x-10 w-full h-3/5 relative justify-center items-center mt-auto">
        {/* Picture */}
        <motion.div
          className="absolute left-0 w-1/2 flex flex-row"
          animate={controls}
          initial="hidden"
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: -100, opacity: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <video autoPlay loop muted playsInline className="ml-52 h-fit ">
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
          className="absolute right-0 w-1/2 text-4xl"
        >
          <div className="w-2/3 space-y-2">
            <div>Core mobile frontend</div>
            <div className="font-bold">
              WORK ON DESIGN AND IMPLEMENTING SCREEN FEATURES AND ALLOWING USER
              TO TRACK DATA
            </div>
            <div className="flex blocks space-x-6">
              <div className="bg-purple-600 rounded-xl text-yellow-400 justify-center items-center text-xl p-2 inline-flex whitespace-nowrap px-4">
                UI/UX DESIGN
              </div>
              <div className="bg-purple-600 rounded-xl text-yellow-400 justify-center items-center text-xl p-2 inline-flex whitespace-nowrap px-4">
                MOBILE DEVELOPMENT
              </div>
            </div>
            <div>IT WAS PRETTY COOL NGL I FUCK WITH IT HEAVY TYPE SHI</div>
          </div>
        </motion.div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-row space-x-10 w-full h-3/5 relative justify-center items-center">
        {/* Picture */}
        <motion.div
          className="absolute right-0 w-1/2 flex flex-row"
          animate={controls}
          initial="hidden"
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: -100, opacity: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-96 w-14 bg-green-900"></div>
          <video autoPlay loop muted playsInline className=" object-cover">
            <source src="/l0re.mp4" type="video/mp4" />
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
          className="absolute left-0 w-1/2 text-4xl ml-52"
        >
          <div className="w-2/3 space-y-2">
            <div>C0RE L0RE FULLSTACK</div>
            <div className="font-bold">
              WORK ON DESIGN AND IMPLEMENTING SCREEN FEATURES AND ALLOWING USER
              TO TRACK DATA
            </div>
            <div className="flex blocks space-x-6">
              <div className="bg-purple-600 rounded-xl text-yellow-400 justify-center items-center text-xl p-2 inline-flex whitespace-nowrap px-4">
                AI IMPLEMENTATION
              </div>
              <div className="bg-purple-600 rounded-xl text-yellow-400 justify-center items-center text-xl p-2 inline-flex whitespace-nowrap px-4">
                DATA TRACKING
              </div>
            </div>
            <div>
              CONNECT USER TO THERE OWN PERSNOL DATA TRACKER AND ALLOW USER TO
              FILTER THE DATA WITH A LOCAL AI TO KEEP ALL OF THE DATA PRIVATE
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-row space-x-10 w-full h-3/5 relative justify-center items-center">
        {/* Picture */}
        <motion.div
          className="absolute left-0 w-1/2 flex flex-row"
          animate={controls}
          initial="hidden"
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: -100, opacity: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <video autoPlay loop muted playsInline className="ml-52 h-fit ">
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
          className="absolute right-0 w-1/2 text-4xl"
        >
          <div className="w-2/3 space-y-2">
            <div>Core mobile frontend</div>
            <div className="font-bold">
              WORK ON DESIGN AND IMPLEMENTING SCREEN FEATURES AND ALLOWING USER
              TO TRACK DATA
            </div>
            <div className="flex blocks space-x-6">
              <div className="bg-purple-600 rounded-xl text-yellow-400 justify-center items-center text-xl p-2 inline-flex whitespace-nowrap px-4">
                VECTOR DATABASE
              </div>
              <div className="bg-purple-600 rounded-xl text-yellow-400 justify-center items-center text-xl p-2 inline-flex whitespace-nowrap px-4">
                REACT
              </div>
            </div>
            <div>IT WAS PRETTY COOL NGL I FUCK WITH IT HEAVY TYPE SHI</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
