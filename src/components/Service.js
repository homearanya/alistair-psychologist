import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledDiv = styled.div`
  .service-article {
    flex: 1 0 auto;
  }
`

const ServiceIcon = styled.div`
  margin: 0 auto 20px;
  height: 90px;
  width: 80px;
`
const ServiceHeading = styled.h4`
  &&& {
    font-size: 14px;
    color: #444444;
    line-height: 1.25;
  }
`

const ServiceText = styled.p`
  &&& {
    color: #787878;
  }
`

export default function Service(props) {
  const serviceSlug = props.service.fields.slug
  return (
    <StyledDiv className="col-sm-6 col-md-4 service-article">
      <Link to={`${serviceSlug}#start-content`}>
        <div className="with_padding text-center teaser hover_shadow">
          <ServiceIcon>
            {props.service.frontmatter.thumbnailimage.image.childImageSharp ? (
              <Img
                fixed={
                  props.service.frontmatter.thumbnailimage.image.childImageSharp
                    .fixed
                }
                alt={props.service.frontmatter.thumbnailimage.alt}
                title={props.service.frontmatter.thumbnailimage.alt}
              />
            ) : (
              <img
                src={props.service.frontmatter.thumbnailimage.image}
                alt={props.service.frontmatter.thumbnailimage.alt}
                title={props.service.frontmatter.thumbnailimage.alt}
              />
            )}
          </ServiceIcon>
          <ServiceHeading dangerouslySetInnerHTML={{__html:props.service.frontmatter.title}}/>
          <ServiceText>{props.service.frontmatter.intro}</ServiceText>
        </div>
      </Link>
    </StyledDiv>
  )
}
