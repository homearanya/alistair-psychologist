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
                html
                frontmatter {
                  heading
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
        const { edges: upcomingCourses } = data.allMarkdownRemark;
        return (
          // <section className="ls section_padding_top_100 section_padding_bottom_100 columns_padding_25">
          <section>
            <div className="container">
              <div className="row">
                {/* <div className="col-sm-10 col-sm-push-1"> */}
                <div>
                  {upcomingCourses.map((upcomingCourse, index) => {
                    const { html, frontmatter } = upcomingCourse.node;
                    return (
                      <UpcomingCourse frontmatter={frontmatter} html={html} />
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        );
      }}
    />
  );
}
