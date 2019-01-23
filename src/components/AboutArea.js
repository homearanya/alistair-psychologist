import React from "react";
import Img from "gatsby-image";

import "../assets/css/aboutArea.css";

import person from "../assets/images/alistair-mork-chadwick.png";

export default function AboutArea(props) {
  return (
    <section
      id="about"
      className="cs parallax darken_gradient page_about section_padding_top_75 columns_margin_bottom_30"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-push-6 text-center">
            <h2 className="section_header">
              {props.aboutMeArea.heading1}
              {props.aboutMeArea.heading2 &&
              props.aboutMeArea.heading2.length > 0 ? (
                <React.Fragment>
                  <br />
                  {props.aboutMeArea.heading2}
                </React.Fragment>
              ) : null}
            </h2>
            <br />
            {props.aboutMeArea.blurb.paragraphs.map((paragraph, index) => (
              <p className="fontsize_18" key={index}>
                {paragraph.paragraph}
              </p>
            ))}
          </div>
          <div className="col-md-6 col-md-pull-6 text-center bottommargin_0">
            <img src={person} alt="" className="top-overlap" />
          </div>
        </div>
      </div>
    </section>
  );
}
