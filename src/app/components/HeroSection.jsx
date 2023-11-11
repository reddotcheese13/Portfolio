"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Lohit",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Full Stack developer",
                1000,
                "Programmer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base mb-6 sm:text-lg lg:text-xl ">
            Proficient in Java, C++, JavaScript, React, GraphQL, with expertise
            in AEM, Docker, Git, and cloud platforms AWS and Azure, utilizing
            Agile methodologies and specializing in algorithmic domains.
          </p>
          <div>
            <button className="px-5 py-4 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
              Hire me
            </button>
            <button className="px-5 py-4 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
              View cv
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[400px] h-[400px] lg:w-[450px] lg:h-[450px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
