import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const SVGWrapper = styled.div`
  color: #91d0cc;
  position: absolute;
  font-size: 18px;
  line-height: 60px;
  text-align: center;
  right: 0;
  top: 0;
  bottom: 0;
  width: 60px;
  letter-spacing: 0;

  a:hover &,
  a.active & {
    color: #ffffff;
  }
`

export default function MTMenu() {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fields: { slug: { eq: "/mindfulness-training-menu/" } }) {
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
        {menuItems &&
          menuItems.map((menuItem, index) => (
            <li key={index}>
              {/^\/(?!\/)/.test(menuItem.link) ? (
                <Link
                  to={menuItem.link}
                  getProps={({ href, location }) => {
                    return location.pathname === href.split("#")[0]
                      ? { className: "active" }
                      : null
                  }}
                >
                  {menuItem.name}
                  <SVGWrapper>
                    <i className="fas fa-angle-right" />
                  </SVGWrapper>
                </Link>
              ) : (
                <a href={menuItem.link} target="_blank" rel="noreferrer">
                  {menuItem.name}
                  <SVGWrapper>
                    <i className="fas fa-angle-right" />
                  </SVGWrapper>
                </a>
              )}
            </li>
          ))}
      </ul>
    </div>
  )
}
