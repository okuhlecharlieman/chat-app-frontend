import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "../pages/AdminPortal";
import Home from "./home";
import Landing from "./landing";
import SignInModal from "../components/signInModal";
import JoinGroupPage from "./JoinGroupPage";
import CreateGroup from "./CreateGroupPage";
import Chatrooms from "./Chatrooms";
import Announcements from "./Announcements";
import ReportAndFeedback from "./ReportAndFeedback";
import ReviewAndApproval from "./ReviewAndApproval";
import Chat from "./Chat";
import EditProfile from "./EditProfilePage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/" element={<Landing />} />
        {/* <Route path="*" element={<FOF />} /> */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/Announcements" element={<Announcements />} />{" "}
        <Route path="/admin/Chatrooms" element={<Chatrooms />} />{" "}
        <Route
          path="/admin/ReportandFeedback"
          element={<ReportAndFeedback />}
        />{" "}
        <Route
          path="/admin/ReviewAndApprovals"
          element={<ReviewAndApproval />}
        />
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
