import React from "react";
import MsgDrawer from "./MsgDrawer";
import NotificationDrawer from "./notificationDrawer";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <div>
      <div className="navbar rounded-lg">
        <div className="navbar-start">
          <Link to="/home" className="navbar-item">
            <img
              src="https://i.ibb.co/PMkQTpZ/logo-no-background.png"
              alt="logo-no-background"
              border="0"
              className=" w-10 "
            />
          </Link>
        </div>
        <div className="navbar-end">
          <div className="avatar avatar-ring avatar-md mx-1">
            <NotificationDrawer />
          </div>
          <div className="avatar avatar-ring avatar-md mx-1">
            <MsgDrawer></MsgDrawer>
          </div>

          <div className="avatar avatar-ring-success avatar-md mx-1">
            <div className="dropdown-container">
              <div className="dropdown">
                <label
                  className="btn btn-ghost flex cursor-pointer px-0"
                  tabIndex="0"
                >
                  <img
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    alt="avatar"
                  />
                </label>
                <div className="dropdown-menu dropdown-menu-bottom-left">
                  <a href="/home" className="dropdown-item text-sm">Profile</a>
                  <a  href="/home" tabIndex="-1" className="dropdown-item text-sm">
                    Account settings
                  </a>
                  <div className="divider"></div>
                  <Link to="/" tabIndex="-1" className="dropdown-item text-sm">
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default navbar;
