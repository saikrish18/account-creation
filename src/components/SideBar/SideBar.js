import React from 'react';
import './SideBar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/settings">Settings</a>
          </li>
          <li>
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
