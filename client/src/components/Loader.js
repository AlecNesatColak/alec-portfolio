import React from "react";

function Loader() {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-tertiary z-[10000]">
      <div className="flex gap-5 text-3xl">
        <h1 className="text-secondary">Alec-Nesat Colak</h1>
      </div>
    </div>
  );
}

export default Loader;
