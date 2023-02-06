import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import ContactForm from "./ContactForm"

export default function OnlineTherapyCTA(props) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "online-therapy-cta.md" }) {
        childMarkdownRemark {
          frontmatter {
            heading
            blurb
            buttonCourse {
              text
              link
            }
          }
        }
      }
    }
  `)

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
              <StyledButton
                href={frontmatter.buttonCourse.link}
                target="_blank"
                rel="noreferrer"
              >
                {frontmatter.buttonCourse.text}
              </StyledButton>
              {/* <Blurb>{frontmatter.blurb}</Blurb> */}
              <ContactForm
                buttonMessage="Book Now!"
                subject="Online Therapy / Counselling"
                message={`Hi Alistair,\n\nI'm interested in your online services`}
                submissionResult="Thanks for your booking! I'll come back to you shortly"
                className="contact-form row columns_margin_bottom_40 topmargin_40"
              />
            </Wrapper>
          </div>
        </div>
      </div>
    </Section>
  )
}

const Heading = styled.h2`
  line-height: 1.5;
  letter-spacing: 2px;
  font-size: 30px !important;
  margin-bottom: 30px;
  @media (max-width: 991px) {
    font-size: 25px !important;
  }
  @media (max-width: 767px) {
    font-size: 22px !important;
    letter-spacing: 0px;
  }
  span.underline {
    color: #91d0cc;
    text-decoration: underline;
  }
`

const Blurb = styled.p`
  && {
    font-size: 26px;
    @media (max-width: 767px) {
      font-size: 22px;
    }
  }
`

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.3);
  padding-bottom: 20px;

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
const StyledButton = styled.a`
  &&& {
    display: inline-block;
    color: ${props => (props.loadSpinner ? "#91d0cc" : "#ffffff")};
    padding: 10px 30px;
    background-color: #91d0cc;
    box-shadow: 0px 2px 30px rgba(145, 208, 204, 0.5);
    :link,
    :visited {
      color: ${props => (props.loadSpinner ? "#91d0cc" : "#ffffff")};
      background-color: #91d0cc;
    }
    :hover,
    :active {
      color: ${props => (props.loadSpinner ? "#d9be93" : "#ffffff")};
      background-color: #d9be93;
      box-shadow: 0px 2px 30px rgba(217, 190, 147, 0.5);
    }
  }
`
