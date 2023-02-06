import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function PrevNextPost(props) {
  return (
    <div className="col-md-6">
      <div className="with_padding_small text-center cs bg_teaser after_cover color_bg_1">
        {props.post.frontmatter.thumbnailimage &&
          props.post.frontmatter.thumbnailimage.image && (
            <GatsbyImage
              image={
                props.post.frontmatter.thumbnailimage.image.childImageSharp
                  .gatsbyImageData
              }
              alt={props.post.frontmatter.thumbnailimage.alt}
            />
          )}
        <div className="item-content">
          <div className="small-text">
            <Link to={props.post.fields.slug}>{props.position}</Link>
          </div>
          <h4>
            <Link to={props.post.fields.slug} rel="bookmark">
              {props.post.frontmatter.title}
            </Link>
          </h4>
        </div>
      </div>
    </div>
  )
}
