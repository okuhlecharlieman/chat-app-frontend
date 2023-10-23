import React from "react";

function NotificationMenu() {
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
              <span className="p-0 m-0">
                <p className="p-0 m-0 font-black">Nozi</p>
                <p className="p-0 m-0 truncate hover:text-clip  ">
                  Nozi liked a post you posted ondhdhkcsfjs dcfjdcvsjkbcd
                  fdsajkhkuijdf vfdsjb
                </p>
              </span>
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

export default NotificationMenu;
