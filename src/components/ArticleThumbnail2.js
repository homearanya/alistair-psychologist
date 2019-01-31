import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import Button from "./Button";

export default function ArticleThumbnail2(props) {
  return (
    <div className="col-md-4 text-center">
      <article className="vertical-item content-padding post format-standard with_shadow">
        {props.article.thumbnailimage && props.article.thumbnailimage.image && (
          <div className="item-media entry-thumbnail">
            <Img
              fluid={props.article.thumbnailimage.image.childImageSharp.fluid}
              alt={props.article.thumbnailimage.alt}
            />
          </div>
        )}
        <div className="item-content entry-content">
          <header className="entry-header">
            <div className="entry-date small-text highlight">
              <Link to={props.article.fields.slug} rel="bookmark">
                <time
                  className="entry-date"
                  dateTime="2017-03-13T08:50:40+00:00"
                >
                  {props.article.frontmatter.date}
                </time>
              </Link>
            </div>

            <h4 className="entry-title">
              <Link to={props.article.fields.slug} rel="bookmark">
                {props.article.frontmatter.title}
              </Link>
            </h4>

            <hr className="divider_30_1" />
          </header>

          <p className="bottommargin_40 fontsize_18">{props.article.excerpt}</p>

          <Button whereTo={props.article.fields.slug} text="Read article" />
        </div>
      </article>
    </div>
  );
}
