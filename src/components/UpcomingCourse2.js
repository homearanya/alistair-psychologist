import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import dateformat from "dateformat";
import styled from "styled-components";

import Button from "./Button";

const StyledArticle = styled.article`
  &&& {
    margin: 0;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.3);
  }
`;

const StyledLink = styled(Link)`
  h2:hover {
    color: #91d0cc;
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

const StyledDateVenue = styled.p`
  display: ${props => (props.venue ? "flexbox" : "block")};
`;

const StyledDate = styled.span`
  font-size: ${props => (props.courseDateEnd ? "14px" : "20px")};
  font-weight: 600;
  color: #ff7200;
`;

export default function UpcomingCourse({
  courseSlug,
  frontmatter: courseInfo,
  html
}) {
  const courseDateStart = new Date(courseInfo.dateStart);
  let courseDateEnd;
  if (courseInfo.dateEnd) {
    courseDateEnd = new Date(courseInfo.dateEnd);
  }
  return (
    <div className="col-md-4 text-center">
      <StyledArticle className="vertical-item content-padding post format-standard">
        {courseInfo.thumbnailimage && courseInfo.thumbnailimage.image && (
          <div className="item-media entry-thumbnail">
            <Img
              fluid={courseInfo.thumbnailimage.image.childImageSharp.fluid}
              alt={courseInfo.thumbnailimage.alt}
            />
          </div>
        )}
        <div className="item-content entry-content">
          <header className="entry-header">
            <div className="entry-date small-text highlight">
              <StyledLink to={courseSlug}>
                <StyledHeading> {courseInfo.courseName}</StyledHeading>
              </StyledLink>
              <StyledDateVenue
                className="item-meta grey darklinks content-justify fontsize_16"
                venue={courseInfo.venue}
              >
                <StyledDate courseDateEnd>
                  {!courseDateEnd ? (
                    <React.Fragment>
                      <i className="fa fa-calendar highlight" />{" "}
                      {dateformat(courseDateStart, "dd mmmm yyyy")}
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      {dateformat(courseDateStart, "dd mmmm yyyy")}
                      {" - "}
                      {dateformat(courseDateEnd, "dd mmmm yyyy")}
                    </React.Fragment>
                  )}
                </StyledDate>
                {courseInfo.venue && (
                  <span>
                    <i className="fa fa-map-marker highlight" />{" "}
                    {courseInfo.venue}
                  </span>
                )}
              </StyledDateVenue>
            </div>
          </header>

          <StyledBody dangerouslySetInnerHTML={{ __html: html }} />
          <br />
          <Button whereTo={courseSlug} text="Course Info" />
        </div>
      </StyledArticle>
    </div>
  );
}
