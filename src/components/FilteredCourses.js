import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { Location } from "@reach/router"

export default function FilteredCourses({ upcomingCourse, columns, limit }) {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { frontmatter: { dateStart: ASC } }
        filter: { frontmatter: { templateKey: { eq: "upcoming-courses" } } }
      ) {
        edges {
          node {
            html
            id
            frontmatter {
              courseName {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
              dateStart
              dateEnd
              venue
              thumbnailimage {
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 750
                      layout: CONSTRAINED
                      placeholder: BLURRED
                    )
                  }
                }
                alt
              }
            }
          }
        }
      }
    }
  `)

  const today = new Date()
  const { edges: upcomingCourses } = data.allMarkdownRemark
  const UpcomingCourse = upcomingCourse
  return (
    // <section className="ls section_padding_top_100 section_padding_bottom_100 columns_padding_25">
    <Location>
      {({ location }) => (
        <React.Fragment>
          {upcomingCourses.reduce((upcomingCourses, upcomingCourse) => {
            const { html, frontmatter, id } = upcomingCourse.node
            const courseDate = new Date(
              upcomingCourse.node.frontmatter.dateStart
            )
            // filter out expired courses
            if (courseDate > today) {
              if (limit && limit > 0) {
                if (upcomingCourses.length === limit) {
                  return upcomingCourses
                }
              }
              upcomingCourses.push(
                <UpcomingCourse
                  key={id}
                  frontmatter={frontmatter}
                  html={html}
                  siteUrl={location.origin}
                  columns={columns}
                />
              )
            }
            return upcomingCourses.length ? (
              upcomingCourse
            ) : (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <StyledButton to="/contact/">Contact me</StyledButton>
              </div>
            )
          }, [])}
        </React.Fragment>
      )}
    </Location>
  )
}

const StyledButton = styled(Link)`
  &&& {
    display: inline-block;
    color: ${props => (props.loadSpinner ? "#91d0cc" : "#ffffff")};
    padding: 10px 30px;
    background-color: #91d0cc;
    box-shadow: 0px 2px 30px rgba(145, 208, 204, 0.5);
    :link,
    :visited {
      color: ${props => (props.loadSpinner ? "#91d0cc" : "#ffffff")};
      background-color: #91d0cc;
    }
    :hover,
    :active {
      color: ${props => (props.loadSpinner ? "#d9be93" : "#ffffff")};
      background-color: #d9be93;
      box-shadow: 0px 2px 30px rgba(217, 190, 147, 0.5);
    }
  }
`
