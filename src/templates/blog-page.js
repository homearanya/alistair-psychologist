import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Breadcrumbs from "../components/Breadcrumbs"
import PostThumbnail from "../components/PostThumbnail"
import SEO from "../components/SEO/SEO"

export default function({ location, data }) {
  const { fields, frontmatter } = data.blogPageQuery
  const { edges: posts } = data.postsQuery
  //   Prepare breadcrumbs
  const pages = [
    { title: "Home", href: "/" },
    { title: "Blog", href: null },
  ]
  const pageMeta = {
    title: `Blog · Counselling Psychologist in Howick`,
    description:
      frontmatter.excerpt ||
      frontmatter.blurb ||
      "Alistair Mork-Chadwick is a Counselling psychologist based in Howick. He offers personal counselling, career guidance, psychological assessments and mindfulness training.",
    slug: fields.slug,
    datePublished: false,
  }
  return (
    <Layout currentPageSlug={fields.slug}>
      <SEO
        pageData={pageMeta}
        breadcrumbs={JSON.parse(JSON.stringify(pages))}
      />
      <Breadcrumbs
        bannerImage={frontmatter.bannerimage}
        pageTitle="Blog"
        pages={JSON.parse(JSON.stringify(pages))}
      />
      <section className="ls page_portfolio section_padding_top_100 section_padding_bottom_75">
        <div className="container">
          <div className="row mosaic-post">
            <div className="col-sm-12">
              <div className="isotope_container isotope row masonry-layout columns_bottom_margin_30">
                {posts.map(({ node: post }) => (
                  <PostThumbnail
                    siteUrl={location.origin}
                    post={post}
                    key={post.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const blogPageQuery = graphql`
  query BlogQuery($id: String!) {
    blogPageQuery: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        blurb
        excerpt
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
    postsQuery: allMarkdownRemark(
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
`
