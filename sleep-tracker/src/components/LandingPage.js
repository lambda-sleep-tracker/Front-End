import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";
import Sidebar from "./Sidebar";

function LandingPage() {
  return (
    <div className="landingPageContainer">
    <Sidebar/>
      <div className="landingPageContent">
        <p>woohoo im a landing page, buy our app!</p>
        <p>jk its free but let me sell your data</p>
        <Link to={"/login"}>
          <p>Sign Up!</p>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
