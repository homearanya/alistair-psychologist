import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Breadcrumbs from "../components/Breadcrumbs"
import PostThumbnail from "../components/PostThumbnail"
import Seo from "../components/Seo/Seo"
import BlogSidebar from "../components/BlogSidebar"

export default function BlogCategoryPage({
  location,
  data,
  pageContext,
  path,
}) {
  const { title: categoryTitle } = pageContext
  const { bannerImage: image, postsQuery } = data
  const { edges: posts } = postsQuery
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
      <Seo
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
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    postsQuery: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
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
                  gatsbyImageData(
                    width: 400
                    layout: CONSTRAINED
                    placeholder: BLURRED
                  )
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
