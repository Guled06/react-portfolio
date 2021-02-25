import React from "react";
import "./stars.scss";
import Typed from "react-typed";

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am Guled Ahmed</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Front End Developer",
                      "Back End Developer",
                      "Full Stack Developer",
                      "Software Engineer",
                      "Coding Makes My Day Supercalifragilisticexpialidocious",
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
              </p>
              <div className="socials">
                <ul>
                  <li>
                    <a
                      href="mailto:akindnesstoremember@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="ico-circle">
                        <i
                          className="ion-social-codepen"
                          class="fa fa-envelope"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.google.com/document/d/116tPOaOj7PtOSHT8owYfb--wfKfowY0Xfha3ePOJpV8/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="ico-circle">
                        <i
                          className="ion-social-codepen"
                          class="fa fa-file"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Guled06"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="ico-circle">
                        <i className="ion-social-github"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/gahmed1/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="ico-circle">
                        <i className="ion-social-linkedin"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
