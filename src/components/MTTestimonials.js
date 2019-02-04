import React from "react";
import { StaticQuery, graphql } from "gatsby";

import TestimonialsArea from "../components/TestimonialsArea";

export default function MTTestimonials() {
  <StaticQuery
    query={graphql`
      query MenuQuery {
        markdownRemark(
          fields: { slug: { eq: "/services/mindfulness-training/" } }
        ) {
          frontmatter {
            testimonialsArea {
              testimonials {
                quote
                author
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { frontmatter } = data.markdownRemark;
      return (
        <React.Fragment>
          {frontmatter.testimonialsArea &&
          frontmatter.testimonialsArea.testimonials.length > 0 ? (
            <TestimonialsArea testimonialsArea={frontmatter.testimonialsArea} />
          ) : null}
        </React.Fragment>
      );
    }}
  />;
}
