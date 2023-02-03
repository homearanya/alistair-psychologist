import React, { useState } from "react"
import Loader from "react-loader-spinner"
import { CSSTransition } from "react-transition-group"
import styled from "styled-components"

const ContactForm = props => {
  const [dataForm, setDataForm] = useState({
    nameaksljf: "",
    reply_toaksljf: "",
    phone_numberaksljf: "",
    subjectaksljf: props.subject ?? "",
    messageaksljf: props.message ?? "",
    name: "",
    reply_to: "",
    phone_number: "",
    subject: "",
    message: "",
  })
  const {
    name,
    reply_to,
    subject,
    phone_number,
    message,
    nameaksljf,
    reply_toaksljf,
    phone_numberaksljf,
    subjectaksljf,
    messageaksljf,
  } = dataForm
  const [submissionResult, setSubmissionResult] = useState(null)

  const [loadSpinner, setLoadSpinner] = useState(false)

  const handleChange = event => {
    let newDataForm = {}
    switch (event.target.name) {
      // real fields
      case "nameaksljf":
        newDataForm = { nameaksljf: event.target.value }
        break
      case "reply_toaksljf":
        newDataForm = { reply_toaksljf: event.target.value }
        break
      case "subjectaksljf":
        newDataForm = { subjectaksljf: event.target.value }
        break
      case "phone_numberaksljf":
        newDataForm = { phone_numberaksljf: event.target.value }
        break
      case "messageaksljf":
        newDataForm = { messageaksljf: event.target.value }
        break
      // Honeypot fields
      case "name":
        newDataForm = { name: event.target.value }
        break
      case "reply_to":
        newDataForm = { reply_to: event.target.value }
        break
      case "subject":
        newDataForm = { subject: event.target.value }
        break
      case "phone_number":
        newDataForm = { phone_number: event.target.value }
        break
      case "message":
        newDataForm = { message: event.target.value }
        break
      default:
        console.log("Wrong Case in Switch HandleChange")
    }
    setDataForm(dataForm => ({ ...dataForm, ...newDataForm }))
  }

  const sendEmail = () => {
    // Check is not spam
    if (
      (name && name.length > 0) ||
      (reply_to && reply_to.length > 0) ||
      (subject && subject.length > 0) ||
      (phone_number && phone_number.length > 0) ||
      (message && message.length > 0)
    ) {
      // it's spam but let's pretend it's a successful submission!!!
      setTimeout(() => {
        setDataForm({
          nameaksljf: "",
          reply_toaksljf: "",
          phone_numberaksljf: "",
          subjectaksljf: props.subject ?? "",
          messageaksljf: props.message ?? "",
          name: "",
          reply_to: "",
          phone_number: "",
          subject: "",
          message: "",
        })
        setSubmissionResult(
          props.submissionResult
            ? props.submissionResult
            : "Thanks for the message. I’ll be in touch shortly."
        )
        setLoadSpinner(false)
      }, 2500)
      return
    }
    // It's not spam. Let's construct an HTTP request
    var xhr = new XMLHttpRequest()
    xhr.open(
      "POST",
      "https://9rrxol8o33.execute-api.us-east-1.amazonaws.com/production/static-site-mailer-alistair",
      true
    )
    xhr.setRequestHeader("Accept", "application/json; charset=utf-8")
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8")

    // Send the collected data as JSON
    xhr.send(JSON.stringify(dataForm))

    // Callback function
    xhr.onloadend = response => {
      if (response.target.status === 200) {
        // The form submission was successful
        setDataForm({
          nameaksljf: "",
          reply_toaksljf: "",
          phone_numberaksljf: "",
          subjectaksljf: props.subject ?? "",
          messageaksljf: props.message ?? "",
          submissionResult: props.submissionResult
            ? props.submissionResult
            : "Thanks for the message. I’ll be in touch shortly.",
          loadSpinner: false,
        })
        setSubmissionResult(
          props.submissionResult
            ? props.submissionResult
            : "Thanks for the message. I’ll be in touch shortly."
        )
        setLoadSpinner(false)
        // if in modal window, close it
        if (props.setShowPopup) {
          setTimeout(() => props.setShowPopup(false), 2000)
        }
      } else {
        // The form submission failed
        setLoadSpinner(false)
        setSubmissionResult("Something went wrong")

        console.error(response)
        // console.error(JSON.parse(response.target.response));
      }
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    setLoadSpinner(true)
    setSubmissionResult(null)
    sendEmail()
  }

  return (
    <React.Fragment>
      <StyledForm className={props.className} onSubmit={handleSubmit}>
        {/* Real Fields */}
        <div className={props.oneColumn ? "col-sm-12" : "col-sm-6"}>
          <div className="contact-form-name">
            <label htmlFor="nameaksljf">
              Your Name
              <span className="required">*</span>
            </label>
            <input
              aria-label="Name"
              aria-required
              required
              type="text"
              size="30"
              name="nameaksljf"
              id="nameaksljf"
              className="form-control"
              placeholder="Your Name"
              value={nameaksljf}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={props.oneColumn ? "col-sm-12" : "col-sm-6"}>
          <div className="contact-form-email">
            <label htmlFor="reply_toaksljf">
              Email address
              <span className="required">*</span>
            </label>
            <input
              aria-label="Email Address"
              aria-required
              required
              type="email"
              size="30"
              name="reply_toaksljf"
              id="reply_toaksljf"
              className="form-control"
              placeholder="Email Address"
              value={reply_toaksljf}
              onChange={handleChange}
            />
          </div>
        </div>
        {props.hideSubject ? null : (
          <div className={props.oneColumn ? "col-sm-12" : "col-sm-6"}>
            <div className="contact-form-subject">
              <label htmlFor="subjectaksljf">
                Subject
                <span className="required">*</span>
              </label>
              <input
                aria-label="Subject"
                aria-required
                required
                type="text"
                size="30"
                name="subjectaksljf"
                id="subjectaksljf"
                className="form-control"
                placeholder="How can I help you?"
                value={subjectaksljf}
                disabled={!!props.subject}
                onChange={handleChange}
              />
            </div>
          </div>
        )}
        <div className={props.oneColumn ? "col-sm-12" : "col-sm-6"}>
          <div className="contact-form-phone">
            <label htmlFor="phone_numberaksljf">
              Phone
              <span className="required">*</span>
            </label>
            <input
              aria-label="Phone Number"
              aria-required
              type="text"
              size="30"
              name="phone_numberaksljf"
              id="phone_numberaksljf"
              className="form-control"
              placeholder="Phone"
              value={phone_numberaksljf}
              onChange={handleChange}
            />
          </div>
        </div>
        {props.hideMessage ? null : (
          <div className="col-sm-12">
            <div className="contact-form-message">
              <label htmlFor="messageaksljf">Message</label>
              <textarea
                aria-label="Message"
                aria-required
                required
                rows="5"
                cols="45"
                name="messageaksljf"
                id="messageaksljf"
                className="form-control"
                placeholder="Message"
                value={messageaksljf}
                onChange={handleChange}
              />
            </div>
          </div>
        )}
        {/* Honey Pots Fields */}
        <HoneypotWrapper>
          <div className="col-sm-6">
            <div className="contact-form-name">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                size="30"
                name="name"
                id="name"
                className="form-control"
                placeholder="Your Name"
                autoComplete="off"
                value={name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6 ">
            <div className="contact-form-email">
              <label htmlFor="reply_to">Email address</label>
              <input
                type="email"
                size="30"
                name="reply_to"
                id="reply_to"
                className="form-control"
                placeholder="Email Address"
                autoComplete="off"
                value={reply_to}
                onChange={handleChange}
              />
            </div>
          </div>
          {props.hideSubject ? null : (
            <div className="col-sm-6 ">
              <div className="contact-form-subject">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  size="30"
                  name="subject"
                  id="subject"
                  className="form-control"
                  placeholder="Subject"
                  autoComplete="off"
                  value={subject}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
          <div className={props.hideSubject ? "col-sm-12" : "col-sm-6"}>
            <div className="contact-form-phone">
              <label htmlFor="phone_number">Phone</label>
              <input
                size="30"
                name="phone_number"
                id="phone_number"
                className="form-control"
                placeholder="Phone"
                autoComplete="off"
                value={phone_number}
                onChange={handleChange}
              />
            </div>
          </div>
          {props.hideMessage ? null : (
            <div className="col-sm-12 ">
              <div className="contact-form-message">
                <label htmlFor="message">Message</label>
                <textarea
                  rows="1"
                  cols="45"
                  name="message"
                  id="message"
                  className="form-control"
                  placeholder="Message"
                  autoComplete="off"
                  value={message}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
        </HoneypotWrapper>
        {/* Button Area */}
        <div className="col-sm-12" style={{ marginBottom: "-40px" }}>
          <ButtonContainer className="contact-form-submit">
            {loadSpinner && (
              <LoaderContainer>
                <Loader
                  type="ThreeDots"
                  color="#ffffff"
                  height={18}
                  width={80}
                />
              </LoaderContainer>
            )}
            <StyledButton
              aria-label="Submit Button"
              type="submit"
              id="contact_form_submit"
              name="contact_submit"
              className="theme_button color1 with_shadow submit_button"
              loadSpinner={loadSpinner}
              disabled={loadSpinner}
            >
              {props.buttonMessage ? props.buttonMessage : "Send Message"}
            </StyledButton>
          </ButtonContainer>
        </div>
      </StyledForm>
      <ResultWrapper className="contact_form_result_wrapper">
        <CSSTransition
          in={submissionResult !== null}
          classNames="slideUp"
          timeout={300}
          unmountOnExit
        >
          <ResultMessage className="contact_form_result_message">
            <StyledText>{submissionResult}</StyledText>
          </ResultMessage>
        </CSSTransition>
      </ResultWrapper>
    </React.Fragment>
  )
}

export default ContactForm

const HoneypotWrapper = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: -1;
`

const StyledForm = styled.form`
  && {
    margin-bottom: -30px;

    .form-control[disabled] {
      background-color: unset;
      font-weight: 500;
    }
  }
`

const ResultWrapper = styled.div`
  height: 60px;
  position: relative;
  margin-top: 70px;
`
const ResultMessage = styled.div`
  background: rgba(145, 208, 204, 0.9);
  bottom: 0;
  height: 100%;
  position: absolute;
  width: 100%;
`

const StyledText = styled.div`
  color: white;
  top: 50%;
  left: 50%;
  padding: 0 10px;
  position: absolute;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`

const LoaderContainer = styled.div`
  color: white;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;

  svg {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`

const StyledButton = styled.button`
  &&& {
    color: ${props => (props.loadSpinner ? "#91d0cc" : "#ffffff")};
    background-color: #91d0cc;
    :focus {
      color: ${props => (props.loadSpinner ? "#91d0cc" : "#ffffff")};
      background-color: #91d0cc;
    }
    :hover,
    :active {
      color: ${props => (props.loadSpinner ? "#d9be93" : "#ffffff")};
      background-color: #d9be93;
    }
  }
`

const ButtonContainer = styled.div`
  position: relative;
  text-align: center;
`
