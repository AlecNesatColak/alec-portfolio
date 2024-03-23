import React from "react";

function Header() {
  return (
    <div className="p-5 bg-primary flex justify-between">
      <h1 className="text-4xl text-secondary font-semibold">Alec-Nesat</h1>
      <img src="GatorLogo.png" alt="" style={{ maxHeight: "50px" }}/>
    </div>
  );
}

export default Header;
