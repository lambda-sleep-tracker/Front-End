import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import AboutStyles from './AboutStyles.css';
class About extends Component {

    render() {
        return (
            <div className="team">
                <Sidebar />
                <h1 className="team-h1">🌜 The Sleep Tracker Squad ⏰</h1>
                <p className="team-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dignissimos corporis aut esse dolores sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dignissimos corporis aut esse dolores sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dignissimos corporis aut esse dolores sint!</p>

                <div className="team-container">
                    <div className="team-box">
                        <h1>Khari Harris</h1>
                        <br />
                        <img className="responsive" src="https://avatars0.githubusercontent.com/u/45375960?s=460&v=4" alt="team-member" /><br />
                        <h3>Frontend Developer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dignissimos corporis aut esse dolores sint!</p>
                        <i className="github fab fa-github"></i>
                    </div>
                    <div className="team-box">
                        <h1>Chris Jones</h1>
                        <br />
                        <img className="responsive" src="https://avatars3.githubusercontent.com/u/20139818?s=460&v=4" alt="team-member" /><br />
                        <h3>Frontend Developer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dignissimos corporis aut esse dolores sint!</p>
                        <i className="github fab fa-github"></i>
                    </div>
                    <div className="team-box">
                        <h1>Robert Harrison</h1>
                        <br />
                        <img className="responsive" src="https://lambdaschoolstudents.slack.com/team/UDN3G71EC" alt="team-member" /><br />
                        <h3>Backend Developer</h3>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dignissimos corporis aut esse dolores sint!</p>
                        <i className="github fab fa-github"></i>
                    </div>
                    <div className="team-box">
                        <h1>Laurhens Daudier</h1>
                        <br />
                        <img className="responsive" src="http://monumentfamilydentistry.com/wp-content/uploads/2015/11/user-placeholder.png" alt="team-member" /><br />
                        <h3>Backend Developer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dignissimos corporis aut esse dolores sint!</p>
                        <i className="github fab fa-github"></i>
                    </div>
                </div>
            </div>
        )
    }
}


export default About;