import React from "react";
import Home from "./Home";
import Analytics from "./Analytics";

const DashBoard = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Home />
      <Analytics />
    </div>
  );
};

export default DashBoard;
