import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import SocialFooter from "./SocialFooter"
import Button from "./Button"
import CourseHeader from "./CourseHeader"

const StyledPost = styled.article`
  &&& {
    margin: 0;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.3);
  }
`

const StyledBody = styled.div`
  margin-top: 20px;

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 18px;
  }
`

const StyledContent = styled.div`
  @media (min-width: 992px) and (max-width: 1199px) {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
`

export default function UpcomingCourse({
  frontmatter: courseInfo,
  html,
  siteUrl,
  columns,
}) {
  const courseUrl = `${siteUrl}/mindfulness-training/in-person/upcoming-courses/`
  const courseSlug = `${courseInfo.courseName.fields.slug}#start-content`
  return (
    <div className={`${columns} text-center`}>
      <StyledPost className="vertical-item content-padding post format-standard">
        {courseInfo.thumbnailimage && courseInfo.thumbnailimage.image && (
          <div className="item-media entry-thumbnail">
            <Img
              fluid={courseInfo.thumbnailimage.image.childImageSharp.fluid}
              alt={courseInfo.thumbnailimage.alt}
            />
          </div>
        )}
        <StyledContent className="item-content entry-content">
          <header className="entry-header">
            <StyledContent className="entry-date small-text highlight">
              <CourseHeader
                slug={courseSlug}
                heading={courseInfo.courseName.frontmatter.title}
                venue={courseInfo.venue}
                dateStart={courseInfo.dateStart}
                dateEnd={courseInfo.dateEnd}
              />
            </StyledContent>
          </header>

          <StyledBody dangerouslySetInnerHTML={{ __html: html }} />
          <br />
          <Button whereTo={courseSlug} text="Course Info" />
        </StyledContent>
        <SocialFooter url={courseUrl} title={courseInfo.courseName} />
      </StyledPost>
    </div>
  )
}
