import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import { ContactForm } from "./ContactForm"

export default function OnlineTherapyCTA(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "online-therapy-cta.md" }) {
            childMarkdownRemark {
              frontmatter {
                heading
                blurb
              }
            }
          }
        }
      `}
      render={data => {
        const { frontmatter } = data.file.childMarkdownRemark
        let sectionClassName
        props.noTopPadding
          ? (sectionClassName = "ls section_padding_bottom_150")
          : (sectionClassName =
              "ls section_padding_top_130 section_padding_bottom_150")
        return (
          <Section className={sectionClassName}>
            <div className="container">
              <div className="row">
                <div className="col-sm-12 text-center">
                  <Wrapper>
                    <Heading
                      className="section_header"
                      dangerouslySetInnerHTML={{ __html: frontmatter.heading }}
                    />
                    <Blurb>{frontmatter.blurb}</Blurb>
                    <ContactForm
                      buttonMessage="Book Now!"
                      subject="Online Therapy / Counselling"
                      message={`Hi Alistair,\n\nI'm interested in your online services`}
                      submissionResult="Thanks for your booking! I'll come back to you shortly"
                      className="contact-form row columns_margin_bottom_40 topmargin_60"
                    />
                  </Wrapper>
                </div>
              </div>
            </div>
          </Section>
        )
      }}
    />
  )
}

const Heading = styled.h2`
  line-height: 75px;
  letter-spacing: 2px;
  font-size: 60px;
  margin-bottom: 50px;
  @media (max-width: 991px) {
    font-size: 45px;
    line-height: 60px;
  }
  @media (max-width: 767px) {
    font-size: 28px !important;
    line-height: 42px;
    letter-spacing: 0px;
  }
  span.underline {
    color: #91d0cc;
    text-decoration: underline;
  }
`

const Blurb = styled.p`
  && {
    font-size: 32px;
    @media (max-width: 767px) {
      font-size: 26px;
    }
  }
`

const Wrapper = styled.div`
  padding: 50px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.3);
  padding-bottom: 100px;
  @media (max-width: 767px) {
    box-shadow: none;
    padding: 0;
  }
`

const Section = styled.section`
  @media (max-width: 767px) {
    .container {
      padding-top: 50px !important;
      padding-bottom: 50px !important;
    }
  }
`
