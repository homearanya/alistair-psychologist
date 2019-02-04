import React from "react";

import ScrollToAnchor from "../components/ScrollToAnchor";
import DynamicAnchor from "../components/DynamicAnchor";

export default function TabHeading(props) {
  console.log("Tab Heading", props.index, props.activeIndex, props.heading);
  let idSelector = `collapse${props.index}`;
  let className = "";
  if (props.index !== props.activeIndex) {
    className += "collapsed";
  }
  return (
    <React.Fragment>
      <DynamicAnchor id={idSelector} />
      <div
        className="panel-heading"
        onClick={() => props.toggleTab(props.index)}
      >
        <h4 className="panel-title">
          <ScrollToAnchor
            to={idSelector}
            className={className}
            onClick={() => props.toggleTab(props.index)}
          >
            {props.heading}
          </ScrollToAnchor>
        </h4>
      </div>
    </React.Fragment>
  );
}
