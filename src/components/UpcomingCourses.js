import React from "react";
import { StaticQuery, graphql } from "gatsby";

import UpcomingCourse from "./UpcomingCourse";

export default function UpcomingCourses() {
  return (
    <StaticQuery
      query={graphql`
        query UpcomingCoursesQuery {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
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
        const today = new Date();
        const { edges: upcomingCourses } = data.allMarkdownRemark;
        return (
          // <section className="ls section_padding_top_100 section_padding_bottom_100 columns_padding_25">
          <section>
            <div className="container">
              <div className="row">
                {/* <div className="col-sm-10 col-sm-push-1"> */}
                <div>
                  {upcomingCourses.reduce(
                    (upcomingCourses, upcomingCourse, index) => {
                      const { fields, html, frontmatter } = upcomingCourse.node;
                      const courseDate = new Date(
                        upcomingCourse.node.frontmatter.dateStart
                      );
                      // filter out expired courses
                      if (courseDate > today) {
                        upcomingCourses.push(
                          <UpcomingCourse
                            key={index}
                            frontmatter={frontmatter}
                            html={html}
                            courseSlug={fields.uCourseMTCourses.fields.slug}
                          />
                        );
                      }
                      return upcomingCourses;
                    },
                    []
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      }}
    />
  );
}
