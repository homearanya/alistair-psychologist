import React from "react"
import { Link, useStaticQuery, graphql, navigate } from "gatsby"
import styled, { css } from "styled-components"

const svgStyles = css`
  color: #91d0cc;
  position: absolute;
  font-size: 18px;
  line-height: 60px;
  text-align: center;

  top: 0;
  bottom: 0;
  width: 60px;
  letter-spacing: 0;

  a:hover &,
  a.active & {
    color: #ffffff;
  }
`

const SVGWrapper = styled.div`
  ${svgStyles};
  right: 0;
`
const SVGWrapperLeft = styled.div`
  ${svgStyles};
  left: 0;
`

export default function MTMenu() {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fields: { slug: { eq: "/offline-course-menu/" } }) {
        frontmatter {
          menuItems {
            link
            name
          }
        }
      }
    }
  `)

  const { menuItems } = data.markdownRemark.frontmatter

  return (
    <div className="col-sm-4">
      <ul className="nav no-bullets" role="menu">
        <li>
          <a onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
            <SVGWrapperLeft>
              <i className="fas fa-angle-left" />
            </SVGWrapperLeft>
            Back
          </a>
        </li>
        {menuItems &&
          menuItems.map((menuItem, index) => (
            <li key={index}>
              <Link
                to={menuItem.link}
                getProps={({ href, location }) => {
                  return location.pathname === href.split("#")[0]
                    ? { className: "active" }
                    : null
                }}
                replace={true}
              >
                {menuItem.name}
                <SVGWrapper>
                  <i className="fas fa-angle-right" />
                </SVGWrapper>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}
