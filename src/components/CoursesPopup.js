import React from "react"
import styled from "styled-components"

import ContactForm from "./ContactForm"

const CoursesPopup = React.forwardRef((props, ref) => {
  // let sectionClassName
  // props.noTopPadding
  //   ? (sectionClassName = "ls section_padding_bottom_150")
  //   : (sectionClassName =
  //       "ls section_padding_top_130 section_padding_bottom_150")

  return (
    <Wrapper>
      <Container ref={ref}>
        <ColLeft>
          <Heading>
            Receive a
            <br />
            <span className="underline">free VIDEO</span>
          </Heading>
          <Blurb>
            on the latest research findings{" "}
            <span>
              on Identifying, Treating and Preventing{" "}
              <span className="underline">Depression.</span>
            </span>
            <br />
          </Blurb>
          <ContactText>
            <strong>Contact me Now!</strong>
          </ContactText>
        </ColLeft>
        <ColRight>
          <ContactForm
            buttonMessage="Get Video!"
            subject="Free Video"
            hideSubject={true}
            message={`Hi Alistair,\n\nI'd love to receive that video`}
            hideMessage={true}
            submissionResult="Thanks for your submission! I'll come back to you with that video shortly"
            oneColumn={true}
            className="contact-form row columns_margin_bottom_40 topmargin_60"
            setShowPopup={props.setShowPopup}
          />
        </ColRight>
        <StyledButton
          type="button"
          className="theme_button color1 with_shadow"
          onClick={() => props.setShowPopup(false)}
        >
          No, Thanks
        </StyledButton>
      </Container>
    </Wrapper>
  )
})

const Heading = styled.h2`
  text-align: center;
  line-height: 65px;
  letter-spacing: 2px;
  font-size: 50px;
  margin-bottom: 20px;
  @media (max-width: 991px) {
    font-size: 45px;
    line-height: 60px;
  }
  @media (max-width: 767px) {
    font-size: 27px;
    line-height: 42px;
    letter-spacing: 0px;
    margin-bottom: 5px;
  }
  span.underline {
    font-size: 60px;
    color: #91d0cc;
    text-decoration: underline;

    @media (max-width: 767px) {
      font-size: 36px;
    }
  }
`

const Blurb = styled.p`
  && {
    text-align: center;
    font-size: 24px;
    line-height: 36px;
    font-weight: 600;
    margin-bottom: 40px;
    @media (max-width: 767px) {
      font-size: 16px;
      line-height: 28px;
      margin-bottom: 20px;
    }
    span {
      font-size: 40px;
      font-weight: 600;
      @media (max-width: 767px) {
        font-size: 18px;
      }
      &.underline {
        text-decoration: underline;
      }
    }
  }
`
const ContactText = styled.p`
  font-size: 30px;
  @media (max-width: 767px) {
    display: none;
    font-size: 22px;
  }
`

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999999;

  overflow: hidden;
`

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;

  width: 90vw;
  height: 70vh;
  max-width: 900px;
  max-height: 600px;
  background-color: white;
  padding: 40px 30px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.3);

  .contact_form_result_wrapper {
    top: 80px;
  }

  @media (max-width: 767px) {
    height: 100vh;
    max-height: 500px;
    flex-direction: column;
    padding: 30px 10px;

    .contact-form {
      margin-top: 0px;
    }

    .columns_margin_bottom_40 [class*="col-"],
    .row.columns_margin_bottom_40 [class*="col-"] {
      margin-bottom: 20px;
    }

    .contact_form_result_wrapper {
      top: -80px;
      height: 80px;
      z-index: 10;
    }

    .contact_form_result_message {
      background-color: #91d0cc;
    }
  }
`
const ColLeft = styled.div`
  flex: 1 0 50%;
  padding-right: 30px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  @media (max-width: 767px) {
    flex: 1 0 auto;
    padding-right: 0;
    border-right: 0;
  }
`
const ColRight = styled.div`
  flex: 1 0 50%;
  padding-left: 30px;

  @media (max-width: 767px) {
    flex: 1 0 auto;
    padding-left: 0;
  }
`
const StyledButton = styled.button`
  position: absolute !important;
  top: 30px;
  right: 30px;

  &&& {
    color: #ffffff;
    background-color: #d9be93;
    box-shadow: 0px 2px 30px rgba(217, 190, 147, 0.5) !important;
    :focus {
      color: #ffffff;
      background-color: #d9be93;
    }
    :hover,
    :active {
      color: #ffffff;
      background-color: #91d0cc;
      box-shadow: 0px 2px 30px rgba(145, 208, 204, 0.5) !important;
      top: 30px;
    }
    @media (max-width: 767px) {
      padding: 7px 14px;
      top: 0px;
      right: unset;
      left: 50%;
      transform: translateX(-50%);
      font-size: 14px;
    }
  }
`
export default CoursesPopup
