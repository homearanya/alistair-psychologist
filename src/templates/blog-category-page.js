import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Breadcrumbs from "../components/Breadcrumbs"
import PostThumbnail from "../components/PostThumbnail"
import SEO from "../components/SEO/SEO"
import BlogSidebar from "../components/BlogSidebar"

export default function({ location, data, pageContext, path, ...rest }) {
  const { title: categoryTitle } = pageContext
  const { bannerImage: image, postsQuery } = data
  const { edges: posts } = postsQuery
  console.log("image: ", image)
  //   Prepare breadcrumbs
  const pages = [
    { title: "Home", href: "/" },
    { title: "Blog", href: "blog" },
    { title: "Categories", href: null },
    { title: categoryTitle, href: null },
  ]
  const pageMeta = {
    title: `Blog · ${categoryTitle} · Counselling Psychologist in Howick`,
    description:
      "Alistair Mork-Chadwick is a Counselling psychologist based in Howick. He offers personal counselling, career guidance, psychological assessments and mindfulness training.",
    slug: path,
    datePublished: false,
  }
  return (
    <Layout currentPageSlug={path}>
      <SEO
        pageData={pageMeta}
        breadcrumbs={JSON.parse(JSON.stringify(pages))}
      />
      <Breadcrumbs
        bannerImage={{ image }}
        pageTitle="Blog"
        pages={JSON.parse(JSON.stringify(pages))}
      />

      <section className="ls page_portfolio section_padding_top_100 section_padding_bottom_75">
        <div className="container">
          <Heading>{`Category: ${categoryTitle}`}</Heading>
          <Row className="row mosaic-post">
            <div className="col-sm-9">
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
            <div className="col-sm-3">
              <BlogSidebar />
            </div>
          </Row>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query BlogCategoryPageQuery($id: String!) {
    bannerImage: file(relativePath: { eq: "about-me-banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    postsQuery: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { id: { eq: $id } } } }
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
            category {
              id
              frontmatter {
                title
              }
            }
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
const Heading = styled.h1`
  margin-bottom: 60px;
  @media (max-width: 992px) {
    margin-bottom: 30px;
  }
`
const Row = styled.div`
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column-reverse;

    div.col-sm-9,
    div.col-sm-3 {
      width: 100%;
    }
  }
`
