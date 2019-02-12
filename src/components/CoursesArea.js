import React from "react";
import { StaticQuery, graphql } from "gatsby";

import UpcomingCourse from "./UpcomingCourse2";

export default function CoursessArea(props) {
  return (
    <StaticQuery
      query={graphql`
        query UpcomingCoursesAreaQuery {
          allMarkdownRemark(
            limit: 3
            sort: { order: ASC, fields: [frontmatter___dateStart] }
            filter: { frontmatter: { templateKey: { eq: "upcoming-courses" } } }
          ) {
            edges {
              node {
                fields {
                  uCourseMTCourses {
                    fields {
                      slug
                    }
                  }
                }
                html
                frontmatter {
                  courseName
                  dateStart
                  dateEnd
                  venue
                  thumbnailimage {
                    image {
                      childImageSharp {
                        fluid(maxWidth: 500) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                    alt
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { edges: courses } = data.allMarkdownRemark;
        return (
          // <section className="ls section_padding_top_130 section_padding_bottom_100 columns_margin_top_0 columns_margin_bottom_30">
          <section className="ls section_padding_top_130 columns_margin_top_0 columns_margin_bottom_30">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 text-center">
                  <h2 className="section_header ">
                    {props.coursesArea.heading}
                  </h2>
                  <p>{props.coursesArea.blurb}</p>
                </div>
              </div>
              <div className="row mosaic-post">
                {courses.map(({ node: course }, index) => (
                  <UpcomingCourse
                    key={index}
                    frontmatter={course.frontmatter}
                    html={course.html}
                    courseSlug={`${
                      course.fields.uCourseMTCourses.fields.slug
                    }#start-content`}
                    siteUrl={props.siteUrl}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      }}
    />
  );
}
