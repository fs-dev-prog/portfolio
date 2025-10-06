// @flow strict

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <motion.div
        ref={ref}
        initial={{ height: 0 }}
        animate={{ height: isInView ? "95%" : 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute left-1/2 transform -translate-x-1/2  h-full w-1 bg-gradient-to-b from-[#1a1443] via-[#1a1443] to-[#1a1443] rounded"
      />

      <div className="space-y-12">
        {experiences.map((experience, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex items-center w-full ${
                isLeft ? 'justify-start' : 'justify-end'
              } relative`}
            >
              <div className="w-full md:w-1/2 px-4">
                <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                  <div className="p-3 relative">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {experience.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-2xl text-2xl mb-2 font-medium uppercase">
                          {experience.title}
                        </p>
                        <p className="text-sm sm:text-base sm:text-xl italic">
                          {experience.company}
                        </p>
                        <ul className="space-y-1">
                        {(experience?.descriptions || []).map((desc, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="mt-3 w-1 h-1 bg-white rounded-full shrink-0"></span>
                            <span>{desc}</span>
                          </li>
                        ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;