import React from "react";
import { Link } from "react-router-dom";
function msgmenu() {
  return (
    <div>
      <nav className="menu bg-gray-2 p-4 rounded-md">
        <section className="menu-section">
          <ul className="menu-items">
            <Link to="/Chat" className="menu-item">
              <div className="avatar">
                <img
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  alt="avatar"
                />
              </div>
              <span>Nozi</span>
            </Link>
            <Link className="menu-item">
              <div className="avatar avatar-ring-success">
                <img
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  alt="avatar"
                />
              </div>
              <span>Khanya </span>
            </Link>
          </ul>
        </section>
      </nav>
    </div>
  );
}

export default msgmenu;
