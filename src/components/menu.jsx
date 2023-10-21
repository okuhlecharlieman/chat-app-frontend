import React from "react";

function Menu({ onItemClick }) {
  const handleMenuItemClick = (menuItem) => {
    onItemClick(menuItem); // Call the function from the prop when a menu item is clicked
  };

  return (
    <div>
      <nav className="card menu bg-gray-2 p-4 rounded-md">
        <section className="menu-section">
          <span className="menu-title">Main menu</span>
          <ul className="menu-items">
            <li
              className="menu-item"
              onClick={() => handleMenuItemClick("invite")}
            >
              Invite Friend
            </li>
            <li
              className="menu-item"
              onClick={() => handleMenuItemClick("createGroup")}
            >
              Create Group
            </li>
            <li
              className="menu-item"
              onClick={() => handleMenuItemClick("joinGroup")}
            >
              Join Group
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
