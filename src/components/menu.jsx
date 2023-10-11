import React from "react";

function menu() {
  return (
    <div>
      <nav className="card menu bg-gray-2 p-4 rounded-md">
        <section className="menu-section">
          <span className="menu-title">Main menu</span>
          <ul className="menu-items">
            <li className="menu-item">General</li>
            <li className="menu-item">Teams</li>
            <li className="menu-item">Projects</li>
            <li className="menu-item">Calendar</li>
          </ul>
        </section>
        <div className="divider my-0"></div>
        <section className="menu-section">
          <span className="menu-title">Settings</span>
          <ul className="menu-items">
            <li className="menu-item">Profile</li>
            <li className="menu-item">Payments</li>
            <li className="menu-item">Email</li>
            <li className="menu-item">Invoices</li>
          </ul>
        </section>
      </nav>
    </div>
  );
}

export default menu;
