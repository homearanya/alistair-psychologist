import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import rehypeReact from "rehype-react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Breadcrumbs from "../components/Breadcrumbs"
import PrevNextPost from "../components/PrevNextPost"
import SEO from "../components/SEO/SEO"
import DynamicAnchor from "../components/DynamicAnchor"

//  Create a render function with references to your custom components in markdown
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {},
}).Compiler

export default function({ data, pageContext }) {
  const { markdownRemark: post } = data
  //   Prepare breadcrumbs
  const pages = [
    { title: "Home", href: "/" },
    { title: "Blog", href: "/blog/" },
    { title: post.frontmatter.title, href: null },
  ]
  // post images
  const postImage =
    post.frontmatter.bodyimage &&
    post.frontmatter.bodyimage.image &&
    post.frontmatter.bodyimage.image.relativePath
  const pageMeta = {
    title: post.frontmatter.title,
    description:
      post.frontmatter.excerpt ||
      post.frontmatter.intro ||
      "Alistair Mork-Chadwick is a Counselling psychologist based in Howick. He offers personal counselling, career guidance, psychological assessments and mindfulness training.",
    postImage: postImage,
    slug: post.fields.slug,
    datePublished: post.frontmatter.date,
  }
  return (
    <Layout currentPageSlug={post.fields.slug}>
      <SEO
        pageData={pageMeta}
        breadcrumbs={JSON.parse(JSON.stringify(pages))}
        pageType="post"
      />
      <Breadcrumbs
        bannerImage={post.frontmatter.bannerimage}
        pageTitle={post.frontmatter.title}
        pages={JSON.parse(JSON.stringify(pages))}
      />
      <section className="ls section_padding_top_130 section_padding_bottom_130 columns_padding_25">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-sm-push-1">
              <DynamicAnchor id="start-content" />
              <div className="vertical-item content-padding with_shadow">
                <div className="entry-thumbnail item-media">
                  {post.frontmatter.bodyimage &&
                    post.frontmatter.bodyimage.image && (
                      <Img
                        fluid={
                          post.frontmatter.bodyimage.image.childImageSharp.fluid
                        }
                        alt={post.frontmatter.bodyimage.alt}
                      />
                    )}
                </div>

                <div className="item-content">
                  <header className="entry-header">
                    <div className="entry-date small-text highlight">
                      <time
                        className="entry-date"
                        // datetime="2017-03-13T08:50:40+00:00"
                      >
                        {post.frontmatter.date}
                      </time>
                    </div>

                    <h1 className="entry-title">{post.frontmatter.title}</h1>

                    <hr className="divider_30_1" />
                  </header>

                  <StyledContent className="entry-content">
                    {renderAst(post.htmlAst)}
                  </StyledContent>
                </div>
              </div>

              <div className="row columns_padding_5 page-nav">
                {pageContext.prev && (
                  <PrevNextPost position="Prev" post={pageContext.prev} />
                )}
                {pageContext.next && (
                  <PrevNextPost position="Next" post={pageContext.next} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const postPageQuery = graphql`
  query PostPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        intro
        excerpt
        bodyimage {
          image {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1170) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          alt
        }
        bannerimage {
          image {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          alt
        }
      }
    }
  }
`

const StyledContent = styled.div`
  h1,
  h2 {
    text-align: center;
  }

  h1 {
    font-size: 50px;
  }

  h2 {
    font-size: 36px;
    letter-spacing: 1px;
  }

  h3 {
    font-size: 28px;
  }

  .center {
    text-align: center;
  }

  a {
    font-weight: 500;
  }

  blockquote {
    font-size: 22px;
    text-transform: none;

    p:last-child {
      font-size: 18px;
    }
  }

  table {
    margin: 30px 0;
    border: 1px solid #6c6c6c;
    border-collapse: collapse;
    border-spacing: 0px;
    th,
    td {
      border: 1px solid #6c6c6c;
      color: #787878;
    }
  }

  .framed {
    border: 1px solid #6c6c6c;
    padding: 20px;
    margin: 30px 0;
  }
`
