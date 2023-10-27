import React from "react";
import Nav from "../components/navbar";
import Menu from "../components/msgmenu";
import ChatWindow from "../components/ChatWindow";

function Chat() {
  return (
    <div className="bg-gray-200 ">
      <Nav className="bg-blue-500  text-white"></Nav>
      <div className="flex">
        <div className="md:w-1/4 m-2">
          <Menu className="text-white"></Menu>
        </div>
        <div className=" md:w-3/4 m-2 w-3/5 ">
          <ChatWindow className="  text-white"></ChatWindow>
        </div>
      </div>
    </div>
  );
}

export default Chat;
