import React from "react";
import './About.css';
import profilepic from '../../Image/a.jpg';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const About =() => {
    return(
        <div className="container about-section" id="About">

            <div className="row">

            <Fade left>

                <div className="col-xl-6 col-md-12 col-sm-12">
                    <div className="about-image">
                        <img src={profilepic} alt="profile picture"/>
                    </div>
                </div>
            </Fade>

            

                <div className="col-xl-6 col-md-12 col-sm-12">
                    <div className="about-details">
                    <Flip left>

                        <div className="about-title">
                            <h5> About Me</h5>
                            <span className="line"></span>
                        </div>
                    </Flip>

                    <Fade right>
                        <p>
I'm Ma. Donna Fidelino, a 21-year-old ambitious and passionate aspiring full-stack developer with a vision to innovate and create impactful digital solutions. My journey in tech is fueled by a solid foundation in HTML, CSS, and JavaScript, and an ever-growing expertise in React, Node.js, and Python. I am dedicated to bridging the gap between technology and users, striving to make digital experiences more intuitive, accessible, and empowering.

<br></br>Beyond my technical skillset, I'm a fervent believer in continuous learning and collaboration. I actively engage with the tech community through forums, webinars, and workshops, keeping abreast of the latest trends and technologies. This not only enhances my knowledge but also allows me to connect with like-minded individuals and professionals who inspire me.</p>
</Fade>
                    </div>
                </div>

            </div>
          
        </div>
    )
}

export default About
