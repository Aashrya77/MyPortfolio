import React from "react";
import "./Services.css";
import { FaCode } from "react-icons/fa";
import { BiCrop } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { SiPostman } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { DiResponsive } from "react-icons/di";
const Services = () => {
  return (
    <div className="services" id="Services">
      <div className="heading">
        <h1>
          My <span>Services</span>
        </h1>
      </div>

      <div className="service-container">
        <div className="service">
          <div className="service-head">
            <FaCode className="code" />
            <h2>Full-Stack Web Development</h2>
          </div>
          <p>
            I create dynamic, responsive, and scalable web applications using
            the MERN stack (MongoDB, Express, React, and Node.js). From
            front-end design to back-end development, I provide end-to-end
            solutions tailored to your needs.
          </p>
        </div>
        <div className="service">
          <div className="service-head">
            <MdOutlinePayment className="code" />
            <h2>Stripe Payment Integration</h2>
          </div>
          <p>
            Seamlessly integrate Stripe into your web applications for secure
            and reliable payment processing, perfect for e-commerce platforms,
            subscription-based services, or any app requiring online payments.
          </p>
        </div>
        <div className="service">
          <div className="service-head">
            <SiPostman className="code" />
            <h2>Custom API Development</h2>
          </div>
          <p>
            I develop efficient and well-structured RESTful APIs with Node.js
            and Express, enabling your web or mobile applications to communicate
            smoothly and handle complex operations.
          </p>
        </div>
        <div className="service">
          <div className="service-head">
            <MdOutlineSecurity className="code" />
            <h2>Authentication & Security</h2>
          </div>
          <p>
            Implement robust authentication systems using JWT or OAuth for
            secure user login and access control. I ensure your web applications
            are protected from common vulnerabilities.
          </p>
        </div>
        <div className="service">
          <div className="service-head">
            <IoIosCreate className="code" />
            <h2>CRUD Applications</h2>
          </div>
          <p>
            Whether it's managing users, products, or content, I build Create,
            Read, Update, and Delete (CRUD) applications that provide a smooth
            user experience and handle data efficiently.
          </p>
        </div>
        <div className="service">
          <div className="service-head">
            <DiResponsive className="code" />
            <h2>Responsive Front-End Development</h2>
          </div>
          <p>
            I specialize in developing intuitive and mobile-friendly user
            interfaces with React, ensuring a seamless experience across all
            devices.
          </p>
        </div>
      </div>
      <a href="#Contact">
        <button className="hire-btn">Hire Me</button>
      </a>
    </div>
  );
};

export default Services;
