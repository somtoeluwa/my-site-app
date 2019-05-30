import React, { Component } from "react";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{
                  backgroundImage: "url(images/IMG_20180803_181556_Bokeh.jpg)",
                  backgroundColor: "#000000"
                }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Somto Eluwa</a>
              </h1>
              <span className="email">
                <i className="icon-mail" /> somto.eluwa@outlook.com
              </span>
              <span className="number">
                <i className="icon-phone" /> +44 795 430 7###
              </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" data-nav-section="skills">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#" data-nav-section="experience">
                      Experience
                    </a>
                  </li>
                  <li>
                    <a href="#" data-nav-section="education">
                      Education
                    </a>
                  </li>
                  <li>
                    <a href="#" data-nav-section="contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="icon-facebook2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/sommyb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/somto-eluwa-a13a4895/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-linkedin2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/somtoeluwa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-github" />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and{" "}
                  <i className="icon-beer" aria-hidden="true" />
                  <br />
                  Thanks{" "}
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Colorlib
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://medium.com/@dhruv.barochia34788"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dhruv Barochia{" "}
                  </a>{" "}
                  for inspiration
                </small>
              </p>
              <p>
                <small>Lights On!</small>
              </p>
              <p>
                <small>© Somto Eluwa 2019</small>
              </p>
              <p>
                <small>
                  Built with React{/* TODO: Change to react revolving icon*/}
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}

export default Sidebar;
