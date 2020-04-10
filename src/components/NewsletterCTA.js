import React from "react"
import styled from "styled-components"

import { MailChimpForm } from "./MailChimpForm"

export default function(props) {
  let sectionClassName
  props.noTopPadding
    ? (sectionClassName = "ls section_padding_bottom_50")
    : (sectionClassName =
        "ls section_padding_top_130 section_padding_bottom_50")
  return (
    <Section className={sectionClassName}>
      <div className="container">
        <Box>
          <ColLeft>
            <Heading>
              Subscribe
              <br />
              to my
              <br />
              Newsletter
            </Heading>
            <Blurb>
              And receive a{" "}
              <span className="underline">free short meditation</span> that will
              help calm you in difficult times.
            </Blurb>
          </ColLeft>
          <ColRight>
            <MailChimpForm className="contact-form row columns_margin_bottom_40 topmargin_60" />
          </ColRight>
        </Box>
      </div>
    </Section>
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
    font-size: 32px;
    line-height: 42px;
    letter-spacing: 0px;
    margin-bottom: 20px;
  }
  span.underline {
    color: #91d0cc;
    text-decoration: underline;
  }
`

const Blurb = styled.p`
  && {
    font-size: 32px;
    line-height: 44px;
    span.underline {
      color: #91d0cc;
      text-decoration: underline;
      text-transform: uppercase;
      font-weight: 500;
    }
    @media (max-width: 767px) {
      font-size: 24px;
      line-height: 36px;
      margin-bottom: 40px;
    }
  }
`

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 50px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.3);
  padding-bottom: 50px;
  @media (max-width: 767px) {
    flex-direction: column;
    box-shadow: none;
    padding: 0;
  }
`
const ColLeft = styled.div`
  text-align: center;
  flex: 1 0 50%;
  height: 100%;
  padding: 50px 30px 50px 0px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 767px) {
    padding: 0;
    border-right: 0;
  }
`
const ColRight = styled.div`
  flex: 1 0 50%;
  height: 100%;
  padding-left: 30px;

  @media (max-width: 767px) {
    padding-left: 0;
  }
`
const Section = styled.section`
  @media (max-width: 767px) {
    .container {
      padding-top: 50px !important;
      padding-bottom: 0px !important;
      margin-bottom: -70px;
    }
  }
`
