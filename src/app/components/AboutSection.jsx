"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Link from "next/link";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-x-5">
        <li>React</li>
        <li>NextJS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Express</li>
        {/* <li>Node.js</li> */}
        <li>Supabase</li>
        <li>MongoDB</li>
        {/* <li>PostgreSQL</li> */}
        <li>TailwindCSS</li>
        <li>Programming with OOP</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <>
        <div className="mb-8">
          <p className="md:text-lg mb-1">Data Capture Experts</p>
          <ul className="list-disc pl-8 flex flex-col gap-y-2">
            <li>
              Senior Project Coordinator{" "}
              <span className="text-xs text-[#ADB7BE] italic">
                (Jul 2023 - May 2024)
              </span>
            </li>
            <li>
              Junior Project Coordinator{" "}
              <span className="text-xs text-[#ADB7BE] italic">
                (Jan 2022 - Jul 2023)
              </span>
            </li>
            <li>
              Intern Project Coordinator{" "}
              <span className="text-xs text-[#ADB7BE] italic">
                (Jun 2021 - Dec 2021)
              </span>
            </li>
          </ul>
        </div>
        <div>
          <p className="md:text-lg mb-1">LOLC Development Finance</p>
          <ul className="list-disc pl-8 flex flex-col gap-y-2">
            <li>
              Trainee - Credit Department{" "}
              <span className="text-xs text-[#ADB7BE] italic">
                (Aug 2018 - Apr 2019)
              </span>
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 flex flex-col gap-y-4">
        <li className="md:text-lg">
          BSc in Management Information Systems{" "}
          <span className="text-sm text-[#ADB7BE]">
            - NSBM Green University
          </span>
        </li>
        <li className="md:text-lg">
          Diploma in Desktop Publishing & Graphic Design{" "}
          <span className="text-sm text-[#ADB7BE]">
            - National Youth Services Council
          </span>
        </li>
        <li className="md:text-lg">
          Physical Science (2014-2017){" "}
          <span className="text-sm text-[#ADB7BE]">- Isipathana College</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 flex flex-col gap-y-4">
        <li>
          The Ultimate React Course 2024: React, Next.js, Redux & More - Udemy
        </li>
        <li>
          AI-Driven Full Stack Development Professional Certification - STEM
          Link
        </li>
        <li>
          <Link
            href="https://proconsacademy.com/dlp/admin/tool/certificate/index.php?code=1393727075PR"
            target="_blank"
            className="hover:underline"
          >
            Agile Project Management Workshop with Jira - Procons Academy
          </Link>
        </li>
        <li>Scrum Foundations Professional Certificate - CertiProf</li>
        <li>
          <Link
            href="https://www.coursera.org/account/accomplishments/certificate/CE2B9DYBNYEU"
            target="_blank"
            className="hover:underline"
          >
            Introduction to Data Analytics for Business - Coursera
          </Link>
        </li>
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

  return (
    <section className="text-white lg:py-20" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about2.png"
          alt="About me"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with latest technologies like React, NextJS, Express,
            PostgreSQL, Supabase, MongoDB, Tailwind, and Git. I am a quick
            learner and always looking to expand my knowledge and skill set. I
            am a team player and excited to work with others to create amazing
            applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
