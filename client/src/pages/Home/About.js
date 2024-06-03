import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function About() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { skills, lottieURL, description1, description2 } = about;

  const frontendSkills = skills[0]?.frontend || [];
  const backendSkills = skills[0]?.backend || [];
  const othersSkills = skills[0]?.others || [];


  return (
    <div>
      <SectionTitle title="About" />

      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[35vh] w-1/2 sm:w-full">
          <dotlottie-player
            src={lottieURL}
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-darkblue font-semibold">{description1 || ""}</p>
          <p className="text-darkblue font-semibold ">{description2 || ""}</p>
        </div>
      </div>

      <div>
        <h1 className="text-secondary text-xl py-5">Frontend Technologies:</h1>
        <div className="flex flex-wrap gap-10">
          {frontendSkills.map((skill, index) => (
            <div
              key={index}
              className="text-white font-semibold bg-secondary border border-primary px-5 py-2  mr-5 mb-5"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-secondary text-xl py-5">Backend Technologies:</h1>
        <div className="flex flex-wrap gap-10">
          {backendSkills.map((skill, index) => (
            <div
              key={index}
              className="text-white font-semibold bg-secondary border border-primary px-5 py-2  mr-5 mb-5"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-secondary text-xl py-5">Other Technologies:</h1>
        <div className="flex flex-wrap gap-10">
          {othersSkills.map((skill, index) => (
            <div
              key={index}
              className="text-white font-semibold bg-secondary border border-primary px-5 py-2  mr-5 mb-5"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
