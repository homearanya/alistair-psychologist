import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import useMedia from "use-media"
import { useInView } from "react-intersection-observer"
import { useCookies } from "react-cookie"

import { addDays } from "../utils/helpers"
import useOnClickOutside from "../utils/hooks/useOnClickOutside"
import UpcomingCourse from "./UpcomingCourse2"
import FilteredCourses from "./FilteredCourses"
import CoursesPopup from "./CoursesPopup"

const StyledSection = styled.section`
  &&& {
    margin-bottom: -30px;
  }
`

export default function CoursessArea(props) {
  const outsideRef = useRef(null)
  const [showPopup, setShowPopup] = useState(false)
  const [cookies, setCookie] = useCookies(["alistairNewsletter"])
  const isMobile = useMedia({ maxWidth: 767 })
  useOnClickOutside(outsideRef, () => setShowPopup(false))
  const [ref, inView] = useInView(
    isMobile
      ? {
          /* Optional options */
          threshold: 0.15,
          triggerOnce: true
        }
      : {
          /* Optional options */
          threshold: 0.6,
          triggerOnce: true
        }
  )

  useEffect(() => {
    if (inView && !cookies.alistairNewsletter) {
      setShowPopup(true)
      setCookie("alistairNewsletter", true, {
        path: "/",
        expires: addDays(new Date(), 180)
      })
    }
    // Update the document title using the browser API
    if (showPopup) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  })

  return (
    <>
      <StyledSection
        ref={ref}
        className="ls section_padding_top_130 columns_margin_top_0 columns_margin_bottom_30"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 className="section_header ">{props.coursesArea.heading}</h2>
              <p>{props.coursesArea.blurb}</p>
            </div>
          </div>
          <div className="row mosaic-post">
            <FilteredCourses
              upcomingCourse={UpcomingCourse}
              columns="col-md-4"
              limit={3}
            />
          </div>
        </div>
      </StyledSection>
      <CSSTransition
        in={showPopup}
        classNames="showUp"
        timeout={500}
        unmountOnExit
      >
        <CoursesPopup ref={outsideRef} setShowPopup={setShowPopup} />
      </CSSTransition>
    </>
  )
}
