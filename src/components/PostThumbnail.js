import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Button from "./Button"
import SocialFooter from "./SocialFooter"
import { textTruncate } from "../utils/helpers"

const StyledPost = styled.article`
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.2);
`

const PostThumbnail = (props) => {
  const postUrl = `${props.siteUrl}${props.post.fields.slug}`
  return (
    <div className="isotope-item col-lg-4 col-md-6 col-sm-12">
      <StyledPost className="vertical-item content-padding mosaic-post post format-standard text-center">
        {props.post.frontmatter.thumbnailimage &&
          props.post.frontmatter.thumbnailimage.image && (
            <div className="item-media entry-thumbnail">
              <Img
                fluid={
                  props.post.frontmatter.thumbnailimage.image.childImageSharp
                    .fluid
                }
                alt={props.post.frontmatter.thumbnailimage.alt}
              />
              <div className="media-links">
                <Link
                  className="abs-link"
                  to={`${props.post.fields.slug}#start-content`}
                />
              </div>
            </div>
          )}

        <div className="item-content entry-content">
          <header className="entry-header">
            <h3 className="entry-title">
              <Link
                to={`${props.post.fields.slug}#start-content`}
                rel="bookmark"
              >
                {props.post.frontmatter.title}
              </Link>
            </h3>

            <span className="date small-text highlight">
              <time dateTime="2017-01-10T15:05:23+00:00" className="entry-date">
                {props.post.frontmatter.date}
              </time>
            </span>
          </header>

          <p className="bottommargin_40 fontsize_18">
            {props.post.frontmatter.intro
              ? textTruncate(props.post.frontmatter.intro, 110)
              : props.post.frontmatter.excerpt
              ? textTruncate(props.post.frontmatter.excerpt, 110)
              : ""}
          </p>

          <Button
            whereTo={`${props.post.fields.slug}#start-content`}
            text="Read Post"
          />
        </div>
        <SocialFooter url={postUrl} title={props.post.frontmatter.title} />
      </StyledPost>
    </div>
  )
}

export default PostThumbnail
