import React from "react";
import Img from "gatsby-image";
import dateformat from "dateformat";
import styled from "styled-components";

const StyledContent = styled.div`
  text-align: center;
`;

export default function UpcomingCourse({ frontmatter: courseInfo, html }) {
  let contentClassName = "col-md-7";
  if (courseInfo.thumbnailimage && courseInfo.thumbnailimage.image) {
    contentClassName = "col-sm-8 col-sm-push-2";
  }
  let courseDate = dateformat(courseInfo.dateStart, "dddd mmmm yyyy");
  if (courseInfo.dateEnd) {
    courseDate += `- ${dateformat(courseInfo.dateEnd, "dddd mmmm yyyy")}`;
  }

  return (
    <article className="post side-item content-padding with_shadow">
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

        <div className={contentClassName}>
          <div className="item-content">
            <h3> {courseInfo.heading}</h3>

            <p className="item-meta grey darklinks content-justify fontsize_16">
              <span>
                <i className="fa fa-calendar highlight" />
                {courseDate}
              </span>
              {courseInfo.venu && (
                <span>
                  <i className="fa fa-map-marker highlight" /> {courseInfo.venu}
                </span>
              )}
            </p>
            <StyledContent dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </article>
  );
}
