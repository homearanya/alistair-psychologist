import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const ServiceIcon = styled.div`
  margin: 0 auto 20px;
  height: 90px;
  width: 80px;
`;
const ServiceHeading = styled.h4`
  && {
    font-size: 14px;
  }
`;

export default function Service(props) {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="with_padding text-center teaser hover_shadow">
        <ServiceIcon>
          <Img
            fluid={props.service.serviceIcon.image.childImageSharp.fluid}
            alt={props.service.serviceIcon.alt}
            title={props.service.serviceIcon.alt}
          />
        </ServiceIcon>
        <ServiceHeading>
          <a href="service-single.html">{props.service.heading}</a>
        </ServiceHeading>
        <p>{props.service.blurb}</p>
      </div>
    </div>
  );
}
