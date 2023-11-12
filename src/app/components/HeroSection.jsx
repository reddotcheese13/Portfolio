"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            <TypeAnimation
              sequence={[
                "Lohit",
                1000,
                "Full Stack Developer",
                1000,
                "Java Backend",
                1000,
                "Frontend UI/UX",
                1000,
                "AEM Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "4xl", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white text-base sm:text-lg lg:text-xl mb-6">
            Proficient in Java, C++, JavaScript, React, GraphQL, with expertise
            in AEM, Docker, Git, and cloud platforms AWS and Azure, utilizing
            Agile methodologies and specializing in algorithmic domains.
          </p>
          <div>
            <button className="px-6 py-3 mr-4 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-black">
              Hire Me
            </button>
            <button className="px-1 py-1 rounded-full w-full sm:w-fit   bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 mt-3 border border-white">
              <span className="block bg-black hover:bg-slate-600 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="flex items-center justify-center rounded-full bg-[#181818] w-80vw h-80vw md:w-96 md:h-96">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="block rounded-full"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
