import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

import CourseHeader from "./CourseHeader"
import Button from "./Button"
import SocialFooter from "./SocialFooter"

const StyledPost = styled.article`
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.3);
`

const StyledContent = styled.div`
  &&& {
    text-align: center;

    @media (min-width: 992px) and (max-width: 1199px) {
      padding-left: 15px;
      padding-right: 15px;
    }
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

export default function UpcomingCourse({
  frontmatter: courseInfo,
  html,
  siteUrl,
}) {
  const courseSlug = `${courseInfo.courseName.fields.slug}#start-content`
  let contentClassName
  if (courseInfo.thumbnailimage && courseInfo.thumbnailimage.image) {
    contentClassName = "col-md-7"
  } else {
    // contentClassName = "col-md-10 col-md-push-1";
    contentClassName = ""
  }
  const courseUrl = `${siteUrl}/mindfulness-training/in-person/upcoming-courses/`
  return (
    <StyledPost className="post side-item content-padding with_shadow">
      <div className="row">
        {courseInfo.thumbnailimage && courseInfo.thumbnailimage.image && (
          <div className="col-md-5">
            <div className="item-media">
              <GatsbyImage
                image={
                  courseInfo.thumbnailimage.image.childImageSharp
                    .gatsbyImageData
                }
                alt={courseInfo.thumbnailimage.alt}
              />
            </div>
          </div>
        )}

        <StyledContent className={contentClassName}>
          <div className="item-content">
            <CourseHeader
              slug={courseSlug}
              heading={courseInfo.courseName.frontmatter.title}
              venue={courseInfo.venue}
              dateStart={courseInfo.dateStart}
              dateEnd={courseInfo.dateEnd}
            />
            <StyledBody dangerouslySetInnerHTML={{ __html: html }} />
            <br />
            <Button whereTo={courseSlug} text="Course Info" />
          </div>
          <SocialFooter url={courseUrl} title={courseInfo.courseName} />
        </StyledContent>
      </div>
    </StyledPost>
  )
}
