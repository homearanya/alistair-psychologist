import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function FooterBottom() {
  let currentDate = new Date()
  let currentYear = currentDate.getFullYear()
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <section className="cs main_color2 page_copyright section_padding_15">
      <div className="container with_top_border">
        <div className="row">
          <div className="col-sm-12 text-center">
            <p className="small-text">
              &copy;{" "}
              {`${currentYear} ${data.site.siteMetadata.title}. All Rights Reserved`}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
