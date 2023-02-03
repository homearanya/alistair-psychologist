import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import UpcomingCourse from "./UpcomingCourse2"
import FilteredCourses from "./FilteredCourses"

const StyledSection = styled.section`
  &&& {
    margin-bottom: -30px;
  }
`
export default function CoursessArea(props) {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { frontmatter: { dateStart: ASC } }
        filter: { frontmatter: { templateKey: { eq: "upcoming-courses" } } }
      ) {
        totalCount
      }
    }
  `)
  if (!data.allMarkdownRemark?.totalCount) return null
  return (
    <StyledSection className="ls section_padding_top_130 columns_margin_top_0 columns_margin_bottom_30">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2 className="section_header ">{props.coursesArea.heading}</h2>
            <p>{props.coursesArea.blurb}</p>
          </div>
        </div>
        <div className="row mosaic-post">
          <FilteredCourses
            upcomingCourse={UpcomingCourse}
            columns="col-md-4"
            limit={3}
          />
        </div>
      </div>
    </StyledSection>
  )
}
