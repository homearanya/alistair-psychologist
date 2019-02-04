import React from "react";
import DynamicAnchor from "../components/DynamicAnchor";
import styled from "styled-components";

const StyledAnchor = styled.a`
  && {
    :focus {
      color: #91d0cc;
    }

    :hover {
      cursor: pointer;
      color: #d9be93;
    }
  }
`;

export default function TabHeading(props) {
  let idSelector = `collapse${props.index}`;
  let className = "";
  if (props.index !== props.activeIndex) {
    className += "collapsed";
  }
  return (
    <React.Fragment>
      <DynamicAnchor id={idSelector} />
      <div className="panel-heading">
        <h4 className="panel-title">
          <StyledAnchor
            className={className}
            onClick={() => props.toggleTab(props.index, idSelector)}
          >
            {props.heading}
          </StyledAnchor>
        </h4>
      </div>
    </React.Fragment>
  );
}
