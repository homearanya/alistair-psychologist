import React from "react";
import styled from "styled-components";

const AElement = styled.a`
  &&& {
    color: #444444;
    transition: color 0.2s linear 0s;

    :hover {
      color: #4bb0a9;
      transition: color 0.2s linear 0s;
    }
  }
`;

const H5Styled = styled.h5`
  color: #444444;
  transition: color 0.2s linear 0s;
  ${AElement}:hover & {
    color: #4bb0a9;
    transition: color 0.2s linear 0s;
  }
`;

export default function ContactDetails2Item(props) {
  return (
    <li>
      <AElement
        href={props.href}
        target={props.href.search(/http/g) > -1 ? "_blank" : undefined}
      >
        <div className="media">
          <div className="media-left">
            <i className={`${props.iconClass} highlight fontsize_18`} />
          </div>
          <div className="media-body">
            <H5Styled className="media-heading">{props.heading}</H5Styled>
            {props.content}
          </div>
        </div>
      </AElement>
    </li>
  );
}
