import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Projects() {
  const [selectedPeriod, setSelectedPeriod] = React.useState(0);
  const {portfolioData} = useSelector((state) => state.root);
  const {projects} = portfolioData;
  return (
    <div>
      <SectionTitle title="Projects" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-primary sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((projects, index) => (
            <div
              className="cursor-pointer"
              onClick={() => setSelectedPeriod(index)}
            >
              <h1
                className={`text-xl px-5 ${
                  selectedPeriod === index
                    ? "text-secondary border-secondary border-l-4 -ml-[3px] py-3 bg-primary text-semibold"
                    : "text-darkblue"
                }`}
              >
                {projects.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-darkblue text-l font-semibold">
            {projects[selectedPeriod]?.Technologies}
          </p>
          <p className="text-darkblue text-l font-semibold">
            {projects[selectedPeriod]?.description}
          </p>
          <div>Project Image</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;