import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

export default function ArticleThumbnail(props) {
  const articleUrl = `${props.siteUrl}${props.article.fields.slug}`;
  return (
    <div className="isotope-item col-lg-4 col-md-6 col-sm-12">
      <article className="vertical-item content-padding mosaic-post post format-standard text-center with_border">
        {props.article.thumbnailimage && props.article.thumbnailimage.image && (
          <div className="item-media entry-thumbnail">
            <Img
              fluid={props.article.thumbnailimage.image.childImageSharp.fluid}
              alt={props.article.thumbnailimage.alt}
            />
            <div className="media-links">
              <Link className="abs-link" to={props.article.fields.slug} />
            </div>
          </div>
        )}

        <div className="item-content entry-content">
          <header className="entry-header">
            <h3 className="entry-title">
              <Link to={props.article.fields.slug} rel="bookmark">
                {props.article.frontmatter.title}
              </Link>
            </h3>

            <span className="date small-text highlight">
              <time datetime="2017-01-10T15:05:23+00:00" className="entry-date">
                {props.article.frontmatter.date}
              </time>
            </span>
          </header>

          <p>{props.article.excerpt}</p>
        </div>

        <div className="post-social-links text-center with_border">
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURI(
              articleUrl
            )}&text=${encodeURI(props.article.frontmatter.title)}`}
            className="social-icon color-icon soc-twitter"
            target="_blank"
          />
          <a
            href={`https://www.facebook.com/sharer.php?u=${encodeURI(
              articleUrl
            )}`}
            className="social-icon color-icon soc-facebook"
            target="_blank"
          />
          <a
            href={`https://getpocket.com/edit?url=${encodeURI(articleUrl)}`}
            className="social-icon color-icon soc-pocket"
            target="_blank"
          />
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURI(
              articleUrl
            )}&title=${encodeURI(props.article.frontmatter.title)}`}
            className="social-icon color-icon soc-linkedin"
            target="_blank"
          />
        </div>
      </article>
    </div>
  );
}
