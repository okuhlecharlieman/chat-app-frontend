import React, { useState } from "react";

import JoinGroup from "./JoinGroup";
import Menu from "./menu";

function Sidebar() {
  // const [selectedMenuItem, setSelectedMenuItem] = useState("invite"); // Initialize with a default value

  // const handleMenuItemClick = (menuItem) => {
  //   setSelectedMenuItem(menuItem);
  // };

  return (
    <div>
      <div className="md:flex w-screen justify-center mt-6">
        <div className="w-full md:w-52 items-center justify-center">
          <Menu />
        </div>
        <div className="hidden md:block divider divider-vertical mx-0 h-96"></div>
        <div className="card max-w-4xl items-center justify-center md:my-0 my-4  overscroll-contain">
          <JoinGroup />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
