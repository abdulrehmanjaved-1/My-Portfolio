import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
function services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Responsive Web Design: Create adaptable, user-friendly websites.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                User Interface Design: Craft visually appealing, intuitive
                interfaces.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                HTML/CSS Development: Convert designs into structured code
                seamlessly.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Front-end Performance Optimization: Improve website loading
                times and efficiency.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Cross-Browser Compatibility Testing: Ensure consistent
                functionality on various browsers.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Accessibility Compliance: Ensure websites are accessible to all
                users.
              </p>
            </li>
          </ul>
        </article>
        {/* End of 1st Service */}
        <article className="service">
          <div className="service__head">
            <h3>FullStack Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Full-Stack Web Application Development: Build end-to-end web
                applications with both front-end and back-end functionalities.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Database Design and Management: Create efficient and scalable
                databases to store and manage application data.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                RESTful API Development: Design and implement APIs for seamless
                communication between front-end and back-end components.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                User Authentication and Authorization: Implement secure user
                authentication and access control systems.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Deployment and Hosting: Deploy applications on servers and
                assist with hosting setup and configuration.
              </p>
            </li>
          </ul>
        </article>
        {/* end of 2nd service */}
        <article className="service">
          <div className="service__head">
            <h3>DevOps Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Cloud Services Management: Manage and optimize cloud resources
                on platforms like AWS, Azure, or Google Cloud to achieve
                scalability and cost-efficiency.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Monitoring and Logging: Set up monitoring and logging solutions
                to track application performance, identify issues, and ensure
                system reliability.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Security and Compliance: Implement security best practices and
                ensure compliance with industry standards to protect data and
                systems.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Containerization and Orchestration: Use Docker for
                containerization and tools like Kubernetes to orchestrate
                containerized applications.
              </p>
            </li>
          </ul>
        </article>
        {/* end of third service */}
      </div>
    </section>
  );
}

export default services;
