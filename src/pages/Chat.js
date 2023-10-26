import React from "react";
import Nav from "../components/navbar";
import Menu from "../components/msgmenu";
import ChatWindow from "../components/ChatWindow";

function Chat() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Nav className="bg-blue-500  text-white"></Nav>
      <div className="flex">
        <div className="w-1/4 p-4">
          <Menu className="bg-green-500 text-white"></Menu>
        </div>
        <div className="w-3/4 p-4">
          <ChatWindow className="bg-yellow-500  text-white"></ChatWindow>
        </div>
      </div>
    </div>
  );
}

export default Chat;
