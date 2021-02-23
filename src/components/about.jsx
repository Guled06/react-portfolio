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
            "My name is Guled Ahmed. I am a Full Stack Web Developer. I like to challenge myself by thinking by trying to find creative ways to complete tasks. I attended University of California San Diego Trilogy Coding Bootcamp. During my time in school, I was enjoying coding and creating projects. I came to the realization that I have found my passion. I am currently seeking software development, as well as remote positions. However, I am open-minded to other possibilities."
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
