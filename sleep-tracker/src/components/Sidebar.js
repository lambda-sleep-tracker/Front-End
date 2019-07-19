import React from "react";
import { Link } from "react-router-dom";
import "./StatStyles.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="icon-box">
        <Link to="/">
          <i class="fas fa-home fa-3x statAwesome" />
        </Link>
      </div>
      <div className="icon-box">
        <Link to="/home">
          <i className="fas fa-cloud-moon fa-3x statAwesome" />
        </Link>
      </div>
      <div className="icon-box">
        <Link to="/stats">
          <i className="fas fa-chart-area fa-3x statAwesome" />
        </Link>
      </div>
      <div className="icon-box">
        <Link to="/about">
          <i className="fas fa-address-card fa-3x statAwesome" />
        </Link>
      </div>
      <div className="icon-box">
        <a href="#">
          <i className="fas fa-cog fa-3x statAwesome" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
