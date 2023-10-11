import React from "react";
import InputTest from "./inputTest";
import Menu from "./menu";

function Sidebar() {
  return (
    <div>
      <div className="md:flex w-screen justify-center gap-1 m-6">
        <div className="w-full md:w-80 items-center justify-center">
          <Menu />
        </div>
        <div className="hidden md:block divider divider-vertical mx-0 h-96"></div>
        <div className="card max-w-full items-center justify-center md:my-0 my-4 max-h-screen">
          <InputTest />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
