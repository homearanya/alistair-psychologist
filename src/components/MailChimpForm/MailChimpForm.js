import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import Loader from "react-loader-spinner"
import styled from "styled-components"
import addToMailchimp from "gatsby-plugin-mailchimp"

export const MailChimpForm = props => {
  const [dataForm, setDataForm] = useState({
    fnameaksljf: "",
    lnameaksljf: "",
    emailaksljf: "",
    phone_numberaksljf: "",
    fname: "",
    lname: "",
    email: "",
    phone_number: "",
  })
  const [submissionResult, setSubmissionResult] = useState(null)

  const [loadSpinner, setLoadSpinner] = useState(false)

  const {
    fnameaksljf,
    lnameaksljf,
    emailaksljf,
    phone_numberaksljf,
    fname,
    lname,
    email,
    phone_number,
  } = dataForm

  const handleChange = event => {
    let newDataForm = {}
    switch (event.target.name) {
      // real fields
      case "fnameaksljf":
        newDataForm = { fnameaksljf: event.target.value }
        break
      case "lnameaksljf":
        newDataForm = { lnameaksljf: event.target.value }
        break
      case "emailaksljf":
        newDataForm = { emailaksljf: event.target.value }
        break
      case "phone_numberaksljf":
        newDataForm = { phone_numberaksljf: event.target.value }
        break
      // Honeypot fields
      case "fname":
        newDataForm = { fname: event.target.value }
        break
      case "lname":
        newDataForm = { lname: event.target.value }
        break
      case "email":
        newDataForm = { email: event.target.value }
        break
      case "phone_number":
        newDataForm = { phone_number: event.target.value }
        break
      default:
        console.log("Wrong Case in Switch HandleChange")
    }
    setDataForm(dataForm => ({ ...dataForm, ...newDataForm }))
  }
  const sendMailchimp = async () => {
    // Check is not spam
    if (
      (fname && fname.length > 0) ||
      (lname && lname.length > 0) ||
      (email && email.length > 0) ||
      (phone_number && phone_number.length > 0)
    ) {
      // it's spam but let's pretend it's a successful submission!!!
      setTimeout(() => {
        setDataForm({
          fnameaksljf: "",
          lnameaksljf: "",
          emailaksljf: "",
          phone_numberaksljf: "",
          fname: "",
          lname: "",
          email: "",
          phone_number: "",
          subject: "",
          message: "",
        })
        setSubmissionResult(
          "Thanks for your subscription. I’ll be in touch shortly."
        )
        setLoadSpinner(false)
      }, 2000)
      return
    }
    // It's not spam. Let's send subscription request to Mailchimp

    const { msg } = await addToMailchimp(emailaksljf, {
      FNAME: fnameaksljf,
      LNAME: lnameaksljf,
      PHONE: phone_numberaksljf,
    })
    setDataForm({
      fnameaksljf: "",
      lnameaksljf: "",
      emailaksljf: "",
      phone_numberaksljf: "",
    })
    setSubmissionResult(msg)
    setLoadSpinner(false)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setSubmissionResult(null)
    setLoadSpinner(true)
    sendMailchimp()
  }

  return (
    <React.Fragment>
      <StyledForm className={props.className} onSubmit={handleSubmit}>
        {/* Real Fields */}
        <div className="col-sm-12 col-md-6">
          <div className="contact-form-name">
            <label htmlFor="fnameaksljf">
              First Name
              <span className="required">*</span>
            </label>
            <input
              aria-label="First Name"
              aria-required
              required
              type="text"
              size="30"
              name="fnameaksljf"
              id="fnameaksljf"
              className="form-control"
              placeholder="First Name"
              value={fnameaksljf}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="contact-form-name">
            <label htmlFor="lnameaksljf">
              Last Name
              <span className="required">*</span>
            </label>
            <input
              aria-label="Last Name"
              aria-required
              required
              type="text"
              size="30"
              name="lnameaksljf"
              id="lnameaksljf"
              className="form-control"
              placeholder="Last Name"
              value={lnameaksljf}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="contact-form-email">
            <label htmlFor="emailaksljf">
              Email address
              <span className="required">*</span>
            </label>
            <input
              aria-label="Email Address"
              aria-required
              required
              type="email"
              size="30"
              name="emailaksljf"
              id="emailaksljf"
              className="form-control"
              placeholder="Email Address"
              value={emailaksljf}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="contact-form-phone">
            <label htmlFor="phone_numberaksljf">Phone</label>
            <input
              aria-label="Phone Number"
              type="text"
              size="30"
              name="phone_numberaksljf"
              id="phone_numberaksljf"
              className="form-control"
              placeholder="Cell Phone (optional)"
              value={phone_numberaksljf}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Honey Pots Fields */}
        <HoneypotWrapper>
          <div className="col-sm-12 col-md-6">
            <div className="contact-form-name">
              <label htmlFor="fname">
                First Name
                <span className="required">*</span>
              </label>
              <input
                aria-label="First Name"
                type="text"
                size="30"
                name="fname"
                id="fname"
                className="form-control"
                placeholder="First Name"
                value={fname}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="contact-form-name">
              <label htmlFor="lname">
                Last Name
                <span className="required">*</span>
              </label>
              <input
                aria-label="Last Name"
                type="text"
                size="30"
                name="lname"
                id="lname"
                className="form-control"
                placeholder="Last Name"
                value={lname}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-sm-12 ">
            <div className="contact-form-email">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                size="30"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email Address"
                autoComplete="off"
                value={email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-12 ">
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
        </HoneypotWrapper>
        {/* Button Area */}
        <div className="col-sm-12">
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
              className="theme_button color1 with_shadow"
              loadSpinner={loadSpinner}
              disabled={loadSpinner}
            >
              Subscribe
            </StyledButton>
          </ButtonContainer>
        </div>
      </StyledForm>
      <ResultWrapper>
        <CSSTransition
          in={submissionResult !== null}
          classNames="slideUp"
          timeout={300}
          unmountOnExit
        >
          <ResultMessage>
            <StyledText
              dangerouslySetInnerHTML={{
                __html: submissionResult,
              }}
            />
          </ResultMessage>
        </CSSTransition>
      </ResultWrapper>
    </React.Fragment>
  )
}
export default MailChimpForm

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
    margin-top: 0;
    margin-bottom: -30px;

    .form-control[disabled] {
      background-color: unset;
      font-weight: 500;
    }
  }
`

const ResultWrapper = styled.div`
  height: 140px;
  position: relative;
  @media (min-width: 992px) {
    margin-bottom: -70px;
  }
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

  a {
    color: white;
    font-weight: 500;
    text-decoration: underline;
  }
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
