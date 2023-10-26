import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "../pages/AdminPortal";
import Home from "./home";
import Landing from "./landing";
import SignInModal from "../components/signInModal";
import JoinGroupPage from "./JoinGroupPage";
import CreateGroup from "./CreateGroupPage";
import Chat from "./Chat";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="*" element={<FOF />} /> */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/Creategroup" element={<CreateGroup />} />
        <Route path="/home/joinGroup" element={<JoinGroupPage />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/signup" element={<SignInModal />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
