// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div
      id="skills"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <div className="w-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div
              className="group  w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
            >
              {/* Hover Text */}
              <div className="absolute top-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:top-2 group-hover:opacity-100">
                <p className="h-fit shadow-[0px_0px_10px_0px_#0EA5E9] rounded-md bg-[#1a1443] px-3 py-2 text-white">
                  {" "}
                  {skill}
                </p>
                <span className="absolute shadow-[0px_0px_12px_0px_#0EA5E9] -bottom-2 left-[50%] h-0 w-0 -translate-x-1/2 rotate-[135deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#11152c]"></span>
              </div>
              {/* Hover button */}
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg bg-white"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg">{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
