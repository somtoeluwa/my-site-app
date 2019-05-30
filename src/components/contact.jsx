import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <section class="colorlib-contact" data-section="contact">
          <div class="colorlib-narrow-content">
            <div class="row">
              <div
                class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span class="heading-meta">Get in Touch</span>
                <h2 class="colorlib-heading">Contact</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-5">
                <div
                  class="colorlib-feature colorlib-feature-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div class="colorlib-icon">
                    <i class="icon-globe-outline" />
                  </div>
                  <div class="colorlib-text">
                    <p>
                      <a href="#">somtoeluwa@outlook.com</a>
                    </p>
                  </div>
                </div>

                <div
                  class="colorlib-feature colorlib-feature-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div class="colorlib-icon">
                    <i class="icon-map" />
                  </div>
                  <div class="colorlib-text">
                    <p>Stevenage, England, UK</p>
                  </div>
                </div>

                <div
                  class="colorlib-feature colorlib-feature-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div class="colorlib-icon">
                    <i class="icon-phone" />
                  </div>
                  <div class="colorlib-text">
                    <p>
                      <a href="tel://">+44(0)795 430 7630</a>
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
