import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";
import Sidebar from "./Sidebar";

function LandingPage() {
  return (
    <div className="landingPageContainer">
    <Sidebar/>
      <div className="landingPageContent">
      <p>Hypnos will help you gain a deeper understanding of your own sleeping patterns, and allow you to use those key details to make informed decisions about how much sleep is right for you.</p>

      <h2>Testimonials:</h2>
      <p>"Using Hypnos let me see my children!"<span className="testimonialTitle">- Previously nocturnal man</span></p>
      <p>"Thanks to Hypnos, I realized that sleeping for 20 minutes a night wasn't in my best interest!"<span className="testimonialTitle">- Actually Me</span></p>
      <p>"As a sleep professional, Hypnos made me quit my job! No point in being a sleep doctor when such a fantastic app exists. Who knew automation would catch up to me too?"<span className="testimonialTitle">- Unemployed man</span></p>
      <p>"You want me to do a testimonial? What's that?"<span className="testimonialTitle">- Satisfied app user</span></p>
        <Link to={"/login"}>
          <p>Sign Up!</p>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
