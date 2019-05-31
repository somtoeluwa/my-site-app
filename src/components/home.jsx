import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li
                style={{
                  backgroundImage:
                    "url(images/neal-e-johnson-1556255-unsplash.jpg)",
                  backgroundColor: "#ffffff"
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>
                            Hi! <br />
                            I'm Somto
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                                                        href="https://drive.google.com/file/d/1DWT5kLgGnZ0U_XZ8yB7TYQRJrKWwXh34/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View CV
                              <i className="icon-download4" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                style={{
                  backgroundImage:
                    "url(images/mikael-kristenson-242108-unsplash.jpg)",
                  backgroundColor: "#ffffff"
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            Here's some stuff
                            <br /> I've built!
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                                                        href="https://github.com/somtoeluwa"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Projects <i className="icon-briefcase3" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
