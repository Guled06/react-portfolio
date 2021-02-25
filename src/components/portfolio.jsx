import React from "react";

//import stock
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  During the time I attended the University of California San
                  Diego Coding Bootcamp, I had fun. I created a lot of projects.
                  Some of the projects, I created alone. I contributed to three
                  separate projects with three different groups consists of my
                  fellow classmates at the bootcamp. Below, you can view the
                  works I have completed.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Weather-Dashboard</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          Weather-Dashboard lets users search any city's current weather information. When the user searches for the city, the search will also display the weather forecast for the next five days. This application displays the searched city's temperature, wind speed and humidity. I designed this application using HTML5, CSS3, Bootstrap and Javascript to built this application.
                          </span>
                        </div>
                        <br />
                        <div>
                          <button type="button" class="btn btn-danger">
                            <a
                              href="https://guled06.github.io/Weather-Dashboard/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Link To Deployed App
                            </a>
                          </button>
                          <hr />
                          <button type="button" class="btn btn-warning">
                            <a
                              href="https://github.com/Guled06/Weather-Dashboard"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              GitHub Repository
                            </a>
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock1} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={stock1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">The Brew Budz</h2>
                        <div className="w-more">
                          <span className="w-ctegory">This App was created for the San Diegians and tourists alike. This app will offer brewery location information in San Diego. This application has added bonus of allowing the user to directly call breweries listed in the user's search directly from the application.
                          <br/>
                          <br/>
                          The user can also click on the brewery's address and the user will be redirected to google maps to show where the brewery is located. We designed this application by using HTML5, CSS3, Bootstrap, Javascript, Node.js, JawsDB, Express.js, Sequelize and MySQL to built this application.
                          </span>{" "}
                        </div>
                        <br />
                        <div>
                          <button type="button" class="btn btn-danger">
                            <a
                              href="https://thebrewbudz.herokuapp.com/landing"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Link To Deployed App
                            </a>
                          </button>
                          <hr />
                          <button type="button" class="btn btn-warning">
                            <a
                              href="https://github.com/Guled06/the-brew-budz"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              GitHub Repository
                            </a>
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock2} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={stock2} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Workday Scheduler</h2>
                        <div className="w-more">
                          <span className="w-ctegory">This application was designed to let users save events for each hour of their day from 9:00am to 5:00pm (their working day schedule). The user of this application can selected a specific hour, added a note for reminder and once the user no longer needs his/her note, the user then can delete that note. I designed this application using HTML5, CSS3, Bootstrap, Javascript and jQuery to build this application.
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                        <br />
                        <div>
                          <button type="button" class="btn btn-danger">
                            <a
                              href="https://guled06.github.io/Workday-Scheduler/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Link To Deployed App
                            </a>
                          </button>
                          <hr />
                          <button type="button" class="btn btn-warning">
                            <a
                              href="https://github.com/Guled06/Workday-Scheduler"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              GitHub Repository
                            </a>
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock3} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={stock3} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Note Taker</h2>
                        <div className="w-more">
                          <span className="w-ctegory">This application will allow the user to write notes and save the notes. When the user click the "GET STARTED" button, the app will redirect the user to a page where the user can input the title of the note the user will add. 
                          <br/>
                          <br/>
                          Once the title of the note is written, the user can input the text of the note. After completing the text, the user will be given an option to save his/her note. The user's saved notes will be displayed on the left side of the page. This App was designed using HTML5, CSS3, Bootstrap, jQuery and Express.js.
                          </span>
                        </div>
                        <br />
                        <div>
                          <button type="button" class="btn btn-danger">
                            <a
                              href="https://yournotetaker.herokuapp.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Link To Deployed App
                            </a>
                          </button>
                          <hr />
                          <button type="button" class="btn btn-warning">
                            <a
                              href="https://github.com/Guled06/note-taker"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              GitHub Repository
                            </a>
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock4} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={stock4} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Budget Tracker</h2>
                        <div className="w-more">
                          <span className="w-ctegory">This is a progressive web application that allows users to track their budgets by adding expenses and deposits to their budget through the "add and/or subtract funds" buttons. The users of this application will be able to add a transaction without an internet connection.
                          <br/>
                          <br/>
                          When the users enter a transaction while offline, the transactions will be stored in their IndexedDB connection. Once the users' internet connection is restored, the transactions the users have added or subtracted will be transferred out of their IndexedDB and into their MongoDB connection. This application was designed using HTML5, CSS3, Javascript, Mongoose and Express.js.
                          </span>
                        </div>
                        <br />
                        <div>
                          <button type="button" class="btn btn-danger">
                            <a
                              href="https://tracking-my-budget.herokuapp.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Link To Deployed App
                            </a>
                          </button>
                          <hr />
                          <button type="button" class="btn btn-warning">
                            <a
                              href="https://github.com/Guled06/budget-tracker"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              GitHub Repository
                            </a>
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock5} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={stock5} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Coded 19 (Covid-19 app)</h2>
                        <div className="w-more">
                          <span className="w-ctegory">This App is a COVID-19 Data application that allows the user to see real-time updates such as deaths and currently hospitalized from the Coronavirus (Covid-19) in his/her state. This application will also allow the user to search for New York Times articles pertaining to Covid-19. We used HTML5, CSS3, Materialize, Javascript, jQuery and AJAX to build this application.
                          </span>
                        </div>
                        <br />
                        <div>
                          <button type="button" class="btn btn-danger">
                            <a
                              href="https://elijahig.github.io/Coded-19-app/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Link To Deployed App
                            </a>
                          </button>
                          <hr />
                          <button type="button" class="btn btn-warning">
                            <a
                              href="https://github.com/ElijahIG/Coded-19-app"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              GitHub Repository
                            </a>
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
