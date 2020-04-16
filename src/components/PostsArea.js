import React from "react"
import { StaticQuery, graphql } from "gatsby"

import PostThumbnail from "./PostThumbnail"

export default function PostsArea(props) {
  return (
    <StaticQuery
      query={graphql`
        query PostQuery {
          allMarkdownRemark(
            limit: 3
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "post-page" } } }
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
                          ...GatsbyImageSharpFluid_withWebp
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
      render={(data) => {
        const { edges: posts } = data.allMarkdownRemark
        return (
          <section className="ls section_padding_top_130 section_padding_bottom_100 columns_margin_top_0 columns_margin_bottom_30">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 text-center">
                  <h2 className="section_header ">{props.postsArea.heading}</h2>
                  <p> {props.postsArea.blurb} </p>
                </div>
              </div>
              <div className="row mosaic-post">
                {posts.map(({ node: post }) => (
                  <PostThumbnail
                    post={post}
                    key={post.id}
                    siteUrl={props.siteUrl}
                  />
                ))}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
