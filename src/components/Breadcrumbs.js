import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { getSrc } from "gatsby-plugin-image"

const StyledSection = styled.section`
  background-image: ${props =>
    props.backgroundImage
      ? `url("${props.backgroundImage}")`
      : `url("/img/breadcrumbs.jpg")`};
  background-position: center;
`

export default function Breadcrumbs(props) {
  return (
    <StyledSection
      className="page_breadcrumbs ds background_cover section_padding_50"
      backgroundImage={getSrc(
        props.bannerImage.image.childImageSharp.gatsbyImageData
      )}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2 dangerouslySetInnerHTML={{ __html: props.pageTitle }} />
            <ol className="breadcrumb divided_content wide_divider">
              {props.pages.map((page, index) =>
                page.href ? (
                  <li key={index}>
                    <Link to={page.href}>
                      {page.title.replace("<br/>", " - ")}
                    </Link>
                  </li>
                ) : (
                  <li key={index} className="active">
                    {page.title.replace("<br/>", " - ")}
                  </li>
                )
              )}
            </ol>
          </div>
        </div>
      </div>
    </StyledSection>
  )
}
