import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "88%", value: "88" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "81%", value: "81" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "69%",
          value: "69"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "72%",
          value: "72"
        },
        {
          id: "MySQL",
          content: "MySQL",
          porcentage: "81%",
          value: "81"
        },
        {
          id: "NodeJS",
          content: "NodeJS",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "MongoDB",
          content: "MongoDB",
          porcentage: "77%",
          value: "77"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "My name is Guled Ahmed. I am a Full Stack Web Developer. I earned a certificate in Full Stack Web Development from the University of California San Diego Coding Bootcamp. I am n innovative problem-solver who is passionate about developing apps with a focus on mobile-first web designs and development. I have strengths in creativity, teamwork, and building projects from ideation to execution. Coding has become my new found passion. I am currently seeking software development in-person positions as well as remote positions. Wherever this journey takes me, I am know one thing for sure; failure is not an option, success is my goal!"
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
