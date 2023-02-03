import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Button from "./Button"
import SocialFooter from "./SocialFooter"

const StyledPost = styled.article`
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.2);
`
export default function PostThumbnail2(props) {
  const postUrl = `${props.siteUrl}${props.post.fields.slug}`
  return (
    <div className="col-md-4 text-center">
      <StyledPost className="vertical-item content-padding post format-standard with_shadow">
        {props.post.frontmatter.thumbnailimage &&
          props.post.frontmatter.thumbnailimage.image && (
            <div className="item-media entry-thumbnail">
              <GatsbyImage
                image={
                  props.post.frontmatter.thumbnailimage.image.childImageSharp
                    .gatsbyImageData
                }
                alt={props.post.frontmatter.thumbnailimage.alt}
              />
            </div>
          )}
        <div className="item-content entry-content">
          <header className="entry-header">
            <div className="entry-date small-text highlight">
              <Link
                to={`${props.post.fields.slug}#start-content`}
                rel="bookmark"
              >
                <time
                  className="entry-date"
                  dateTime="2017-03-13T08:50:40+00:00"
                >
                  {props.post.frontmatter.date}
                </time>
              </Link>
            </div>

            <h4 className="entry-title">
              <Link
                to={`${props.post.fields.slug}#start-content`}
                rel="bookmark"
              >
                {props.post.frontmatter.title}
              </Link>
            </h4>

            <hr className="divider_30_1" />
          </header>

          <p className="bottommargin_40 fontsize_18">
            {props.post.frontmatter.intro
              ? props.post.frontmatter.intro > 250
                ? props.post.frontmatter.intro.substring(0, 250) + "..."
                : props.post.frontmatter.intro
              : props.post.excerpt > 250
              ? props.post.frontmatter.excerpt.substring(0, 250) + "..."
              : props.post.frontmatter.excerpt}
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
