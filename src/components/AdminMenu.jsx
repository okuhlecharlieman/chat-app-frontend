import React from "react";
import { Link } from "react-router-dom";

function Menu({ onItemClick }) {
  // const handleMenuItemClick = (menuItem) => {
  //   onItemClick(menuItem); // Call the function from the prop when a menu item is clicked
  // };

  return (
    <div>
      <nav className="card menu bg-gray-2 p-4 rounded-md">
        <section className="menu-section">
          <span className="menu-title">Admin menu</span>
          <ul className="menu-items">
            <Link
              to="/admin/ReviewAndApprovals"
              className="menu-item"
              // onClick={() => handleMenuItemClick("review")}
            >
              Review and approval
            </Link>
            <Link
              to="/admin"
              className="menu-item"
              // onClick={() => handleMenuItemClick("Profiles")}
            >
              Profiles
            </Link>
            <Link
              to="/admin/ReportandFeedback"
              className="menu-item"
              // onClick={() => handleMenuItemClick("Report")}
            >
              Report and feedback
            </Link>
            <Link
              to="/admin/Chatrooms"
              className="menu-item"
              // onClick={() => handleMenuItemClick("ChatRoom")}
            >
              Chat rooms
            </Link>
            <Link
              to="/admin/Announcements"
              className="menu-item"
              // onClick={() => handleMenuItemClick("Announcements")}
            >
              Announcements
            </Link>
          </ul>
        </section>
        <div className="divider my-0"></div>
        <section className="menu-section">
          <span className="menu-title">Settings</span>
          {/* Add more menu items and their corresponding onClick handlers here */}
        </section>
      </nav>
    </div>
  );
}

export default Menu;
