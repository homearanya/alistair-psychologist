import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import TestimonialsArea from "../components/TestimonialsArea"

export default function MTTestimonials() {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fields: { slug: { eq: "/mindfulness-training/" } }) {
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
  `)

  const { frontmatter } = data.markdownRemark
  return (
    <React.Fragment>
      {frontmatter.testimonialsArea &&
      frontmatter.testimonialsArea.testimonials.length > 0 ? (
        <TestimonialsArea testimonialsArea={frontmatter.testimonialsArea} />
      ) : null}
    </React.Fragment>
  )
}
