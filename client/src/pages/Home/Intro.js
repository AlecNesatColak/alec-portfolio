import React from "react";
import { useSelector } from "react-redux";

function Intro() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, welcomeText, description, caption } = intro;

  return (
    <div className="h-[80vh] bg-tertiary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text text-white font-semibold">{welcomeText || ""}</h1>
      <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
        {firstName || ""}
      </h1>
      <h1 className="text-6xl sm:text-4xl text-white font-semibold">
        {caption || ""}
      </h1>
      <p className="text-white font-semibold w-2/3">{description || ""}</p>
      <button className="border border-secondary text-white px-10 py-3 rounded">
        Get Started
      </button>
    </div>
  );
}

export default Intro;
