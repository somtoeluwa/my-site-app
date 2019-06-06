import React, { Component } from "react";

class Experience extends Component {
  state = {};
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="experience">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Experience</span>
                <h2 className="colorlib-heading animate-box">
                  Work Experience
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>

                      <div className="timeline-label">
                        <h2>
                          Software Developer at Doccentrics{" "}
                          <span>2016-Date</span>
                        </h2>
                        <p>
                          I build automated .NET applications aimed at large
                          data cleansing and validation based on configurable
                          customer requirements. These applications are designed
                          to be automated and self-managing reducing human
                          intervention in the process life cycle. I also work on
                          ASP.Net web applications which can be used to
                          configure business rules which drive complex data
                          calculations for document creation. Document
                          composition development using 3rd party software
                          Quadient Inspire. I train clients on product usage and
                          I engage clients as part of pre-sales technical
                          requirement gathering. Technologies used include C#,
                          PowerShell, .NetCore, .NetFramework, MySQL, MongoDB,
                          Entity Framework, VisualStudio, JIRA, Git, Octopus
                          Deploy, Bamboo.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Full Stack Developer <span>2015-2016</span>
                        </h2>
                        <p>
                          I worked as a free lance full stack developer using
                          the WAMP stack building websites for clients. Using
                          HTML5, CSS, BootStrap, JavaScript, PHP . A combination
                          of MySQL and NoSQL databases.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Business Development Exec <span>2014-2015</span>
                        </h2>
                        <p>
                          was in charge of content curation and sourcing.
                          Researching and establishing opportunities for new
                          business development. Web application testing and
                          development.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Talent Manager <span>2014-2015</span>
                        </h2>
                        <p>
                          Talent manager for multiple artistes in both the music
                          and film industry
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none" />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Experience;
