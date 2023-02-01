import React from "react"
import Service from "./Service"
import styled from "styled-components"

const StyledSection = styled.section`
  .services-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`

export default function ServicesArea(props) {
  return (
    <StyledSection id="services" className="ls section_padding_top_130">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2 className="section_header ">{props.servicesArea.heading}</h2>
            <p>{props.servicesArea.blurb}</p>
          </div>
        </div>
        <div className="row columns_padding_0 columns_margin_0 fontsize_16">
          <div className="col-md-offset-2 col-md-8 services-wrapper">
            {props.servicesArea.services.map((service) => (
              <Service key={service.service.id} service={service.service} />
            ))}
          </div>
        </div>
      </div>
    </StyledSection>
  )
}
