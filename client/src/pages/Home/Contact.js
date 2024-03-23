import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contacts } = portfolioData;

  return (
    <div>
      <SectionTitle title="Contact" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-secondary">{"{"}</h1>
          {Object.keys(contacts).map(
            (key) =>
              key !== "_id" && (
                <h1>
                  <span className="text-primary">{key}: </span>
                  <span className="text-secondary">'{contacts[key]}',</span>
                </h1>
              )
          )}
          <h1 className="text-secondary">{"}"}</h1>
        </div>
        <div className="h-[400px]">Image</div>
      </div>
    </div>
  );
}

export default Contact;
