import React from "react";

function msgmenu() {
  return (
    <div>
      <nav className="menu bg-gray-2 p-4 rounded-md">
        <section className="menu-section">
          <ul className="menu-items">
            <li className="menu-item">
              <div className="avatar">
                <img
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  alt="avatar"
                />
              </div>
              <span>Nozi</span>
            </li>
            <li className="menu-item">
              <div className="avatar avatar-ring-success">
                <img
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  alt="avatar"
                />
              </div>
              <span>Khanya </span>
            </li>
          </ul>
        </section>
      </nav>
    </div>
  );
}

export default msgmenu;
