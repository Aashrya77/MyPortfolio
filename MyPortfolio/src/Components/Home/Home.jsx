import React from "react";
import "./Home.css";
import { BsInstagram, BsFacebook, BsGithub } from "react-icons/bs";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Me from '/Images/Me.png';

const Home = () => {
  const [text] = useTypewriter({
    words: ["Aashrya", "from Nepal."],
    loop: {},
    deleteSpeed: 30,
  });
  return (
    <main>
      <div className="Home" id="Home">
        <div className="header animate__animated animate__fadeInLeft">
          <span className="head">
            Hi, I'm <span style={{ color: "cornflowerblue" }}>{text}</span>
            <span className="cursor">
              <Cursor />
            </span>
          </span>
          <h3 className="sub-head">Full-Stack Developer</h3>
          <p>
            I’m a passionate MERN stack developer with a knack for building
            dynamic, responsive web applications. From seamless authentication
            systems to secure Stripe payment integrations, I specialize in
            delivering full-stack solutions that are both functional and
            user-friendly. Explore my work to see how I bring ideas to life with
            MongoDB, Express, React, and Node.js!
          </p>
          <div className="btn">
            <a href="#Contact">
              <button>Let's Talk</button>
            </a>
          </div>
        </div>
        <div className="right animate__animated animate__fadeInRight">
          <div></div>
          <div></div>
          <img src={Me} alt="myPhoto" />
        </div>
      </div>
      <div className="socials">
        <a href="https://www.facebook.com/Aashrya7/" target="_blank">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/aashrya77/" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://github.com/Aashrya77" target="_blank">
          <BsGithub />
        </a>
      </div>
    </main>
  );
};

export default Home;
