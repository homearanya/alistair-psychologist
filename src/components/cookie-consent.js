import React, { useState, useEffect } from "react"
import CookieConsent from "react-cookie-consent"
import styled from "styled-components"
import { rgba } from "polished"

const CookieConsentModal = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setShow(true), 3000)
    return () => clearTimeout(id)
  }, [])

  return (
    <Wrapper show={show}>
      <CookieConsent
        buttonText="ACCEPT"
        containerClasses="cookie-container"
        contentClasses="cookie-text"
        buttonClasses="cookie-button"
        disableStyles={true}
        expires={150}
      >
        <Text>
          Some cookies are being used on this site to improve your user
          experience.
        </Text>
      </CookieConsent>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  transition: all 0.5s;

  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? "1" : "0")};

  .cookie-container {
    display: flex;
    align-items: center;

    background-color: ${rgba("#91d0cc", 1)};
    border-radius: 6px;
    position: fixed;
    bottom: 2rem !important;
    padding: 2rem 3rem;
    left: 50%;
    transform: translate(-50%);
    z-index: 999;
    transition: all 0.5s;

    @media (max-width: 767px) {
      border-radius: 0;
      bottom: 0 !important;
      left: 0;
      transform: none;
      width: 100vw;
      justify-content: center;
    }
  }

  .cookie-button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    color: #91d0cc;
    border-radius: 6px;
    border: none;
    transition: 0.2s all;
    text-transform: uppercase;
    font-size: 1.3rem;
    font-style: medium;
    line-height: 1.8rem;
    margin-left: 3rem;
    padding: 1.5rem 2.5rem;

    :hover {
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
    }
  }
`

const Text = styled.p`
  color: white;
  font-size: 1.3rem;
  font-style: medium;
  line-height: 1.8rem;
  line-height: 1.8rem;

  @media (max-width: 767px) {
    font-size: 1rem;
    line-height: 1.6rem;
  }

  a:link,
  a:visited {
    color: white;
    font-weight: 500;
    transition: all 0.2s;
  }

  a:hover,
  a:active {
    text-decoration: none;
  }
`
export default CookieConsentModal
