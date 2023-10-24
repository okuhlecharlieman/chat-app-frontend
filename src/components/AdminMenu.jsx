import React from "react";

function Menu({ onItemClick }) {
  const handleMenuItemClick = (menuItem) => {
    onItemClick(menuItem); // Call the function from the prop when a menu item is clicked
  };

  return (
    <div>
      <nav className="card menu bg-gray-2 p-4 rounded-md">
        <section className="menu-section">
          <span className="menu-title">Admin menu</span>
          <ul className="menu-items">
            <li
              className="menu-item"
              onClick={() => handleMenuItemClick("review")}
            >
              Review and approval
            </li>
            <li
              className="menu-item"
              onClick={() => handleMenuItemClick("Profiles")}
            >
              Profiles
            </li>
            <li
              className="menu-item"
              onClick={() => handleMenuItemClick("Report")}
            >
              Report and feedback
            </li>
            <li
              className="menu-item"
              onClick={() => handleMenuItemClick("ChatRoom")}
            >
              Chat rooms
            </li>
            <li
              className="menu-item"
              onClick={() => handleMenuItemClick("Announcements")}
            >
              Announcements
            </li>
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
