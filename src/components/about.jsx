import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        <strong>Hi, my name is Somto Eluwa</strong>
                      </p>
                      <p>
                        I am a Software Engineer. I build systems aimed at
                        delivering the best value and experience for users.
                        Automated systems aimed at simplifying BAU tasks and
                        empowering non-tech business users in making big
                        decisions. Think clean UX and UI with a robust back-end
                        to handle complex computing.
                      </p>
                      <p>
                        Personally, I believe taking the{" "}
                        <strong>Intiative</strong>, being able to make a
                        significant impact <strong>Impact</strong> and{" "}
                        <strong>Leadership</strong> are the things that make a
                        great software engineer and I strive to deliver and
                        improve on them everywhere I work.
                      </p>
                      <p>I enjoy reading, music, football, anime and gaming!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Web Development </h3>
                    <p>
                      I have experience building websites using JavaScript,
                      React, HTML, CSS, PHP, C#
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Application Development</h3>
                    <p>
                      I also build console and desktop applications using C#,
                      .NetCore, Powershell, Java
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>
                      Creating CICD enviroments using Bamboo, Docker and
                      Configuration of Cloud technologies
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Product</h3>
                    <p>
                      Product design, Product development and Product management
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                  <span className="icon">
                    <i className="icon-layers2" />
                  </span>
                  <div className="desc">
                    <h3>Business Dev and Analysis</h3>
                    <p>
                      Requirement Gathering, Requirement Analyisis, Requirement
                      validation{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                  <span className="icon">
                    <i className="icon-speech-bubble" />
                  </span>
                  <div className="desc">
                    <h3>Client Engagement</h3>
                    <p>
                      Pre sales engagement, Strong presentation and
                      communication skills, Customer training
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
