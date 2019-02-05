import React from "react";

import eventImage from "../assets/images/events/08.jpg";

export default function UpcomingCourse() {
  return (
    <article className="post side-item content-padding with_shadow">
      <div className="row">
        {/* <div className="col-md-5">
          <div className="item-media">
            <img src={eventImage} alt="" />
            <div className="media-links">
              <a className="abs-link" title="" href="event-single-full.html" />
            </div>
          </div>
        </div> */}

        {/* <div className="col-md-7"> */}
        {/* <div className="col-sm-8 col-sm-push-2"> */}
        <div>
          <div className="item-content">
            <h3>
              <a href="event-single-full.html">
                Magna aliquyam erased voluptua
              </a>
            </h3>

            <p className="item-meta grey darklinks content-justify fontsize_16">
              <span>
                <i className="fa fa-calendar highlight" /> Feb 12, 2017
              </span>
              <span>
                <i className="fa fa-map-marker highlight" /> Conference Hall
              </span>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              et dolore magna aliquyam erat.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
