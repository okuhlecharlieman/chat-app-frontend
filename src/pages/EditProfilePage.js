import React from "react";
import Nav from "../components/navbar";
import Sidebar from "../components/sidebarEditProfile";

function home() {
  return (
    <div>
      <Nav></Nav>
      <Sidebar />
    </div>
  );
}

export default home;
