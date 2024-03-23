import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="flex gap-10 items-center">
      <h1 className="text-3xl font-bold text-primary">{title}</h1>
      <div className="w-60 h-[1px] bg-secondary"></div>
    </div>
  );
}

export default SectionTitle;
