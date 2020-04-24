import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { ContactForm } from "./ContactForm"
import ContactDetails2 from "./ContactDetails2"

import DynamicAnchor from ".//DynamicAnchor"

export default function AppointmentArea(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "appointment-area.md" }) {
            childMarkdownRemark {
              frontmatter {
                heading
                blurb
              }
            }
          }
        }
      `}
      render={(data) => {
        const { frontmatter } = data.file.childMarkdownRemark
        let sectionClassName
        props.noTopPadding
          ? (sectionClassName = "ls section_padding_bottom_100")
          : (sectionClassName =
              "ls section_padding_top_130 section_padding_bottom_100")
        return (
          <section className={sectionClassName}>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 text-center">
                  <DynamicAnchor id="appointment" />
                  <h2 className="section_header  highlight">
                    {frontmatter.heading}
                  </h2>
                </div>
                <div className="col-md-6 text-center">
                  <div className="fontsize_16">{frontmatter.blurb}</div>
                  <ContactForm className="contact-form row columns_margin_bottom_40 topmargin_60" />
                </div>
                <div className="col-md-5 col-md-offset-1">
                  <ContactDetails2 />
                </div>
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
