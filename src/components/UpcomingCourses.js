import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import UpcomingCourse from "./UpcomingCourse2"
import FilteredCourses from "./FilteredCourses"

export default function UpcomingCourses() {
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
    <section className="columns_margin_bottom_30">
      <div className="container">
        <div className="row mosaic-post">
          {/* <div className="col-sm-10 col-sm-push-1"> */}
          <div>
            <FilteredCourses
              upcomingCourse={UpcomingCourse}
              columns="col-lg-6"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
