"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>Java 11,17</li>
        <li>C++</li>
        <li>Html, Css, Js</li>
        <li>React</li>
        <li>Sql, MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Indian Institute of Technology, Kharagpur</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul>
        <li>AWS cloud practitioner</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const selectedTabData = TAB_DATA.find((it) => it.id === tab);
  return (
    <section className="text-white">
      <div
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
        id="about"
      >
        <Image
          src="/images/about-image.png"
          alt="Description"
          width={500}
          height={500}
        />

        <div>
          <h2 className="text-4xl text-white font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a versatile developer proficient in Java 11/17, C++11/14/17,
            JavaScript, HTML, and CSS. With expertise in frameworks such as
            React, GraphQL, and Kafka, coupled with a strong foundation in cloud
            platforms like AWS and Azure, I excel in building innovative
            applications. A practitioner of Agile methodologies, I leverage
            tools like AEM, Docker, Git, MySQL, and MongoDB to deliver
            high-quality code. My commitment to mastering algorithmic
            intricacies enhances my ability to tackle complex challenges, making
            me a dedicated contributor to cutting-edge development projects.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              {" "}
              Certification{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {selectedTabData ? selectedTabData.content : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
