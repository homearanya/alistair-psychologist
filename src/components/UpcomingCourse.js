import React from "react";
import Img from "gatsby-image";
import dateformat from "dateformat";
import styled from "styled-components";

const StyledArticle = styled.article`
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.3);
`;

const StyledContet = styled.div`
  &&& {
    text-align: center;
  }
`;

const StyledHeading = styled.h2`
  font-size: 24px;
`;

const StyledBody = styled.div`
  margin-top: 20px;

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 18px;
  }
`;

const StyledDateVenu = styled.p`
  display: ${props => (props.venue ? "flexbox" : "block")};
`;

const StyledDate = styled.span`
  font-size: 20px;
`;

export default function UpcomingCourse({ frontmatter: courseInfo, html }) {
  let contentClassName;
  if (courseInfo.thumbnailimage && courseInfo.thumbnailimage.image) {
    contentClassName = "col-md-7";
  } else {
    // contentClassName = "col-md-10 col-md-push-1";
    contentClassName = "";
  }

  let courseDate;
  if (courseInfo.dateStart) {
    const courseDateStart = new Date(courseInfo.dateStart);
    courseDate = dateformat(courseDateStart, "dd mmmm yyyy");
  }
  if (courseInfo.dateEnd) {
    const courseDateEnd = new Date(courseInfo.dateEnd);
    courseDate += ` - ${dateformat(courseDateEnd, "dd mmmm yyyy")}`;
  }
  return (
    <StyledArticle className="post side-item content-padding with_shadow">
      <div className="row">
        {courseInfo.thumbnailimage && courseInfo.thumbnailimage.image && (
          <div className="col-md-5">
            <div className="item-media">
              <Img
                fluid={courseInfo.thumbnailimage.image.childImageSharp.fluid}
                alt={courseInfo.thumbnailimage.alt}
              />
            </div>
          </div>
        )}

        <StyledContet className={contentClassName}>
          <div className="item-content">
            <StyledHeading> {courseInfo.heading}</StyledHeading>

            <StyledDateVenu
              className="item-meta grey darklinks content-justify fontsize_16"
              venue={courseInfo.venue}
            >
              <StyledDate>
                <i className="fa fa-calendar highlight" /> {courseDate}
              </StyledDate>
              {courseInfo.venue && (
                <span>
                  <i className="fa fa-map-marker highlight" />{" "}
                  {courseInfo.venue}
                </span>
              )}
            </StyledDateVenu>
            <StyledBody dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </StyledContet>
      </div>
    </StyledArticle>
  );
}
