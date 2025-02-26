import React from "react";
import "./About.css";
import { FaCalendarCheck } from "react-icons/fa";
const About = () => {
  return (
    <div className="About" id="About">
      <h1>
        About <span>Me</span>
      </h1>
      <div className="about-container">
        {/* <div className="img">
          <img src={Me} alt="me" />
          <span className="circle-spin"></span>
        </div> */}
        <div className="introduction">
          <h2>Introduction</h2>
          <p>
            I’m a dedicated MERN stack developer with a strong foundation in
            creating scalable and efficient web applications. My expertise spans
            from building full-stack CRUD applications to integrating advanced
            features like authentication systems and Stripe payment gateways.
            With a passion for clean, maintainable code and a focus on user
            experience, I enjoy bringing innovative ideas to life through
            MongoDB, Express, React, and Node.js. Whether it's crafting
            responsive user interfaces or developing robust backend systems, I’m
            committed to delivering solutions that are both functional and
            aesthetically pleasing. Outside of coding, I’m constantly exploring
            new technologies to stay ahead in this fast-paced industry.
          </p>
        </div>
        <>
          <h1>
            My <span>Skills</span> & <span>Experience</span>
          </h1>
          <div className="abt-bottom">
            <div className="skills ">
              <h2>Skills</h2>
              <div className="skills-box">
                <div className="skills-container">
                  <h3>HTML</h3>

                  <div className="layer">
                    <div className="HTML"></div>
                    <div className="HTML-percen animate__animated animate__fadeIn">
                      90%
                    </div>
                  </div>
                  <h3>CSS</h3>

                  <div className="layer">
                    <div className="CSS"></div>
                    <div className="CSS-percen animate__animated animate__fadeIn">
                      80%
                    </div>
                  </div>
                  <h3>JAVASCRIPT</h3>

                  <div className="layer">
                    <div className="JAVASCRIPT"></div>
                    <div className="JAVASCRIPT-percen animate__animated animate__fadeIn">
                      75%
                    </div>
                  </div>
                  <h3>REACTJS</h3>

                  <div className="layer">
                    <div className="REACT"></div>
                    <div className="REACT-percen animate__animated animate__fadeIn">
                      75%
                    </div>
                  </div>
                  <h3>Communication</h3>

                  <div className="layer">
                    <div className="communication"></div>
                    <div className="communication-percen animate__animated animate__fadeIn">
                      80%
                    </div>
                  </div>
                  <h3>Node & Express JS</h3>
                  <div className="layer">
                    <div className="node"></div>
                    <div className="communication-percen animate__animated animate__fadeIn">
                      70%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="other-skills">
              <h2>Experience</h2>
              <div className="expericence-box">
                <div className="edu-box">
                  <p>
                    <FaCalendarCheck /> 06/2022 - 09/2022
                  </p>
                  <strong>Internship</strong>
                  <p>
                    Through persistence and a strong passion for front-end web
                    development, I secured my first internship opportunity.
                    Leveraging my skills in HTML, CSS, and JavaScript, I
                    showcased my portfolio and actively sought out internship
                    positions. With determination, I impressed the hiring team
                    with my talent and drive, ultimately earning the valuable
                    experience and mentorship that propelled my career forward.
                  </p>
                </div>
                <div className="edu-box">
                  <p>
                    <FaCalendarCheck /> 04/2023 - Present
                  </p>
                  <strong>Mentorship & Online classes</strong>
                  <p>
                    Not only I am a front-end developer, I have also taken on
                    the fulfilling role of a mentor and web development
                    educator. Sharing my knowledge and expertise with aspiring
                    developers has become an integral part of my professional
                    journey. As a mentor, I guide and support individuals in
                    their quest to master the art of web development, offering
                    valuable insights, industry best practices, and practical
                    advice.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </>
      </div>
    </div>
  );
};

export default About;
