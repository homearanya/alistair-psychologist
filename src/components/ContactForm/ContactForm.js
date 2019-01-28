import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import Recaptcha from "react-recaptcha";

import "./contactForm.css";

const StyledForm = styled.form`
  && {
    margin-bottom: -30px;
  }
`;

const ResultWrapper = styled.div`
  height: 60px;
  position: relative;
  @media (min-width: 992px) {
    margin-bottom: -70px;
  }
`;
const ResultMessage = styled.div`
  background: rgba(145, 208, 204, 0.9);
  bottom: 0;
  height: 100%;
  position: absolute;
  width: 100%;
`;

const StyledText = styled.div`
  color: white;
  top: 50%;
  left: 50%;
  padding: 0 10px;
  position: absolute;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;

const LoaderContainer = styled.div`
  color: white;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
`;

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
`;

const ButtonContainer = styled.div`
  position: relative;
  text-align: center;
`;

const RecaptchaContainer = styled.div`
  text-align: center;
`;
const StyledRecaptcha = styled.div`
  display: inline-block;
  margin-top: 10px;
`;

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    let subject = "";
    if (this.props.subject) {
      subject = this.props.subject;
    }
    this.state = {
      name: "",
      reply_to: "",
      phone_number: "",
      subject: subject,
      message: "",
      submissionResult: null,
      verified: false,
      loadSpinner: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.callback = this.callback.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  handleChange(event) {
    switch (event.target.name) {
      case "name":
        this.setState({ name: event.target.value });
        break;
      case "reply_to":
        this.setState({ reply_to: event.target.value });
        break;
      case "subject":
        this.setState({ subject: event.target.value });
        break;
      case "phone_number":
        this.setState({ phone_number: event.target.value });
        break;
      case "message":
        this.setState({ message: event.target.value });
        break;
      default:
        console.log("Wrong Case in Switch HandleChange");
    }
  }
  handleSubmit = event => {
    event.preventDefault();
    // confirmation not a robot
    if (!this.state.verified) {
      this.setState({
        submissionResult: "Please, confirm you are not a robot"
      });
      return;
    }

    this.setState({ loadSpinner: true, submissionResult: null }, () => {
      // Construct an HTTP request
      var xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        "https://lcs4ob7vu4.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer-alistair",
        true
      );
      xhr.setRequestHeader("Accept", "application/json; charset=utf-8");
      xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

      // Send the collected data as JSON
      xhr.send(JSON.stringify(this.state));

      // Callback function
      xhr.onloadend = response => {
        if (response.target.status === 200) {
          // The form submission was successful
          this.setState({
            name: "",
            reply_to: "",
            phone_number: "",
            subject: "",
            message: "",
            submissionResult:
              "Thanks for the message. I’ll be in touch shortly.",
            loadSpinner: false
          });
        } else {
          // The form submission failed
          this.setState({
            submissionResult: "Something went wrong",
            loadSpinner: false
          });
          console.error(response);
          // console.error(JSON.parse(response.target.response));
        }
      };
    });
  };

  callback = function() {
    console.log("Done!!!!");
  };

  verifyCallback = function(response) {
    if (response) {
      this.setState({ verified: true, submissionResult: null });
    }
  };

  render() {
    return (
      <React.Fragment>
        <StyledForm
          className={this.props.className}
          onSubmit={this.handleSubmit}
        >
          <div className="col-sm-6">
            <div className="contact-form-name">
              <label htmlFor="name">
                Your Name
                <span className="required">*</span>
              </label>
              <input
                aria-label="Name"
                aria-required
                required
                type="text"
                size="30"
                name="name"
                id="name"
                className="form-control"
                placeholder="Your Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="contact-form-email">
              <label htmlFor="reply_to">
                Email address
                <span className="required">*</span>
              </label>
              <input
                aria-label="Email Address"
                aria-required
                required
                type="email"
                size="30"
                name="reply_to"
                id="reply_to"
                className="form-control"
                placeholder="Email Address"
                value={this.state.reply_to}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="contact-form-subject">
              <label htmlFor="subject">
                Subject
                <span className="required">*</span>
              </label>
              <input
                aria-label="Subject"
                aria-required
                required
                type="text"
                size="30"
                name="subject"
                id="subject"
                className="form-control"
                placeholder="Subject"
                value={this.state.subject}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="contact-form-phone">
              <label htmlFor="phone_number">
                Phone
                <span className="required">*</span>
              </label>
              <input
                aria-label="Phone Number"
                aria-required
                type="text"
                size="30"
                name="phone_number"
                id="phone_number"
                className="form-control"
                placeholder="Phone"
                value={this.state.phone_number}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="contact-form-message">
              <label htmlFor="message">Message</label>
              <textarea
                aria-label="Message"
                aria-required
                required
                rows="1"
                cols="45"
                name="message"
                id="message"
                className="form-control"
                placeholder="Message"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="col-sm-12" stle={{ marginBottom: "-40px" }}>
            <ButtonContainer className="contact-form-submit topmargin_20">
              {this.state.loadSpinner && (
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
                loadSpinner={this.state.loadSpinner}
                disabled={this.state.loadSpinner}
              >
                Send Message
              </StyledButton>
            </ButtonContainer>
            <RecaptchaContainer>
              <StyledRecaptcha>
                <Recaptcha
                  sitekey="6LdnNI0UAAAAAMLQD49oKbMVsol9W9uWMm4AgA3t"
                  render="explicit"
                  verifyCallback={this.verifyCallback}
                  onloadCallback={this.callback}
                />
              </StyledRecaptcha>
            </RecaptchaContainer>
          </div>
        </StyledForm>
        <ResultWrapper>
          <CSSTransition
            in={this.state.submissionResult !== null}
            classNames="slideUp"
            timeout={300}
            unmountOnExit
          >
            <ResultMessage>
              <StyledText>{this.state.submissionResult}</StyledText>
            </ResultMessage>
          </CSSTransition>
        </ResultWrapper>
      </React.Fragment>
    );
  }
}
