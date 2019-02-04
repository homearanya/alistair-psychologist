import React from "react";
import { StaticQuery, graphql } from "gatsby";

import ArticleThumbnail2 from "../components/ArticleThumbnail2";

export default function ArticlesArea(props) {
  return (
    <StaticQuery
      query={graphql`
        query ArticleQuery {
          allMarkdownRemark(
            limit: 3
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "article-page" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 200)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  intro
                  date(formatString: "MMMM DD, YYYY")
                  thumbnailimage {
                    alt
                    image {
                      childImageSharp {
                        fluid(maxWidth: 400) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { edges: articles } = data.allMarkdownRemark;
        return (
          <section className="ls section_padding_top_130 section_padding_bottom_100 columns_margin_top_0 columns_margin_bottom_30">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 text-center">
                  <h2 className="section_header with_icon">
                    {props.articlesArea.heading}
                  </h2>
                  <p>{props.articlesArea.blurb}</p>
                </div>
              </div>
              <div className="row">
                {articles.map(({ node: article }) => (
                  <ArticleThumbnail2 article={article} key={article.id} />
                ))}
              </div>
            </div>
          </section>
        );
      }}
    />
  );
}