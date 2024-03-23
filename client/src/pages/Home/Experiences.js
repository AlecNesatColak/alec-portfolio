import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Experiences() {
  const [selectedPeriod, setSelectedPeriod] = React.useState(0);
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;  return (
    <div>
      <SectionTitle title="Experiences" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-primary sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((experience, index) => (
            <div
              className="cursor-pointer"
              onClick={() => setSelectedPeriod(index)}
            >
              <h1
                className={`text-xl px-5 ${
                  selectedPeriod === index
                    ? "text-secondary border-secondary border-l-4 -ml-[3px] py-3 bg-primary text-semibold"
                    : "text-white"
                }`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-white text-2xl font-semibold">
            {experiences[selectedPeriod]?.title}
          </h1>
          <p className="text-white text-l font-semibold">
            {experiences[selectedPeriod]?.company}
          </p>
          <p className="text-white text-l font-semibold">
            {experiences[selectedPeriod]?.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
