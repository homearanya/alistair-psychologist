import React from "react";

import slide01 from "../assets/images/alistair-mork-chadwick-at-work.jpg";

export default function Slide() {
  return (
    <div>
      <img src={slide01} alt="" />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <div className="slide_description_wrapper">
              <div className="slide_description">
                <div className="intro-layer" data-animation="fadeInRight">
                  <h3>
                    Alistair
                    <br />
                    Mork-Chadwick
                  </h3>
                </div>
                <div className="intro-layer" data-animation="fadeInLeft">
                  <p className="small-text grey">
                    Counselling Psychologist in Howick
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
