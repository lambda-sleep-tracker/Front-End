import React from 'react';
import { Link } from 'react-router-dom'
import '/landingpage.css'

function LandingPage() {
  return (
    <div className="landingPageContainer">
        <div className="landingPageContent">
        <div className="sidebar">
                    <div className="icon-box">
                        <a href="#">
                            <i className="fas fa-cloud-moon fa-3x statAwesome"></i>
                        </a>
                    </div>
                    <div className="icon-box">
                        <i className="fas fa-chart-area fa-3x statAwesome"></i>
                    </div>
                    <div className="icon-box">
                        <i className="fas fa-pencil-alt fa-3x statAwesome"></i>
                    </div>
                    <div className="icon-box">
                        <a href="#">
                            <i className="fas fa-trash fa-3x statAwesome"></i>
                        </a>
                    </div>
                    <div className="icon-box">
                        <a href="#">
                            <i className="fas fa-cog fa-3x statAwesome"></i>
                        </a>
                    </div>
            </div>
          <p>woohoo im a landing page, buy our app!</p>
          <p>jk its free but let me sell your data</p>
          <Link to={'/login'}><p>Sign Up!</p></Link>
        </div>
    </div>
  );
}

export default LandingPage;