import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Courses() {
  const [selectedPeriod, setSelectedPeriod] = React.useState(0);
  const {portfolioData} = useSelector((state) => state.root);
  const {courses} = portfolioData;
  return (
    <div>
      <SectionTitle title="Courses" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-primary sm:flex-row sm:overflow-x-scroll sm:w-full">
          {courses.map((courses, index) => (
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
                {courses.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-white text-2xl font-semibold">
            {courses[selectedPeriod]?.title}
          </h1>
          <p className="text-white text-l font-semibold">
            {courses[selectedPeriod]?.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Courses;
