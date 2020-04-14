import React, { useState, useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import CookieConsentModal from "./cookie-consent"

import { CSSTransition } from "react-transition-group"
import { useCookies } from "react-cookie"
import { addDays } from "../utils/helpers"
import useOnClickOutside from "../utils/hooks/useOnClickOutside"
import CoursesPopup from "./CoursesPopup"

import "../assets/css/bootstrap.min.css"
import "../assets/css/main.css"
import "../assets/css/custom.css"

import HeaderTop from "./HeaderTop"
import { Header } from "./Header"
import FooterBottom from "./FooterBottom"
import ScrollUp from "./ScrollUp"

export default function Layout(props) {
  const [showPopup, setShowPopup] = useState(false)
  const outsideRef = useRef(null)
  const [cookies, setCookie] = useCookies(["alistairNewsletter"])

  useOnClickOutside(outsideRef, () => setShowPopup(false))
  useEffect(() => {
    // Disable scrolling on popup
    if (showPopup) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [showPopup])

  useEffect(() => {
    const mouseOutHanler = e => {
      if (
        e.toElement === null &&
        e.relatedTarget === null &&
        !cookies.alistairNewsletter
      ) {
        // An intent to exit has happened
        setShowPopup(true)
        setCookie("alistairNewsletter", true, {
          path: "/",
          expires: addDays(new Date(), 180)
        })
      }
    }

    document.addEventListener("mouseout", mouseOutHanler)
    return () => {
      document.removeEventListener("mouseout", mouseOutHanler)
    }
  }, [cookies])

  const data = useStaticQuery(graphql`
    query LayoutQuery {
      SiteMetaDataQuery: site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle = data.SiteMetaDataQuery.siteMetadata.title
  const titleTemplate = `%s · ${siteTitle}`
  return (
    <React.Fragment>
      <Helmet
        key="app-head"
        titleTemplate={titleTemplate}
        defaultTitle={siteTitle}
      >
        <html lang="en" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.7.1/js/solid.js"
          integrity="sha384-6FXzJ8R8IC4v/SKPI8oOcRrUkJU8uvFK6YJ4eDY11bJQz4lRw5/wGthflEOX8hjL"
          crossorigin="anonymous"
        />
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.7.1/js/brands.js"
          integrity="sha384-zJ8/qgGmKwL+kr/xmGA6s1oXK63ah5/1rHuILmZ44sO2Bbq1V3p3eRTkuGcivyhD"
          crossorigin="anonymous"
        />
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.7.1/js/fontawesome.js"
          integrity="sha384-Qmms7kHsbqYnKkSwiePYzreT+ufFVSNBhfLOEp0sEEfEVdORDs/aEnGaJy/l4eoy"
          crossorigin="anonymous"
        />

        <meta
          name="norton-safeweb-site-verification"
          content="6vlf59y1-8x6et5qfhdovjmulyw5qbv0w88u98yq1wbbt2n9npbw2do006rbggzlrl6bc7r4gzxeienwowz3714rvo69q4ka8ww0pwe-mhqm734ksz5yp544uk2o1wnr"
        />
      </Helmet>

      <div id="canvas">
        <div id="box_wrapper">
          <HeaderTop appointmentButton={props.appointmentButton} />
          <Header currentPageSlug={props.currentPageSlug} />
          {props.children}
          <FooterBottom />
          <CookieConsentModal />
          <ScrollUp />
          <CSSTransition
            in={showPopup}
            classNames="showUp"
            timeout={500}
            unmountOnExit
          >
            <CoursesPopup ref={outsideRef} setShowPopup={setShowPopup} />
          </CSSTransition>
        </div>
      </div>
    </React.Fragment>
  )
}
