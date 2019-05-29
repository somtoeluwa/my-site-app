import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
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
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Software Developer at Doccentrics{" "}
                          <span>2016-present</span>
                        </h2>
                        <p>
                          I am currently a Software Developer at Doccetrics in
                          Stevenage. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Quia, eum iusto. Saepe
                          necessitatibus vero praesentium culpa quis, nihil
                          alias laudantium debitis libero ab dolorem ducimus
                          illo eum eligendi perferendis fugit!
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Masters at RGU<span>2015-2016</span>
                        </h2>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Dolorum, iste perspiciatis suscipit asperiores
                          molestias dolor cumque, odio eius, ducimus tempora
                          labore delectus voluptatum veniam obcaecati architecto
                          ipsam modi. Doloribus, amet.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Business development Exec at Spinlet<span>2015</span>
                        </h2>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Vitae, sed aliquam alias nesciunt rem iure
                          repudiandae repellendus minus excepturi dicta,
                          corrupti, perspiciatis consequatur quod dolor
                          provident illum sit fugiat quaerat?
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
