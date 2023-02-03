import React from "react"
import { graphql } from "gatsby"
import YouTube from "react-youtube"
import styled from "styled-components"

import Layout from "../components/Layout"
import Breadcrumbs from "../components/Breadcrumbs"
import Content, { HTMLContent } from "../components/Content"
import Seo from "../components/Seo/Seo"

const YouTubeWrapper = styled.div`
  text-align: center;
`

const YouTubeContainer = styled.div`
  display: inline-block;
  margin-bottom: 50px;
  @media (min-width: 992px) {
    margin-top: 100px;
    margin-bottom: 0;
  }
`

const AboutPageTemplate = ({ content, contentComponent }) => {
  const AboutContent = contentComponent || Content
  return (
    <section className="ls section_padding_100 columns_padding_25">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-push-6">
            <YouTubeWrapper>
              <YouTubeContainer>
                <YouTube videoId="hQ0NfHQ3moY" />
              </YouTubeContainer>
            </YouTubeWrapper>
          </div>
          <div className="col-md-6 col-md-pull-6">
            <h2 className="section_header">About me</h2>
            <hr className="divider_30_1" />
            <AboutContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function AboutPage({ data }) {
  const { fields, frontmatter } = data.markdownRemark

  //   Prepare breadcrumbs
  const pages = [
    { title: "Home", href: "/" },
    { title: "About Me", href: null },
  ]
  const pageMeta = {
    title: `About Me · Counselling Psychologist in Howick`,
    description:
      frontmatter.excerpt ||
      "Alistair Mork-Chadwick is a Counselling psychologist based in Howick. He offers personal counselling, career guidance, psychological assessments and mindfulness training.",
    slug: fields.slug,
    datePublished: false,
  }

  return (
    <Layout currentPageSlug={fields.slug}>
      <Seo
        pageData={pageMeta}
        breadcrumbs={JSON.parse(JSON.stringify(pages))}
      />
      <Breadcrumbs
        bannerImage={frontmatter.bannerimage}
        pageTitle="About Me"
        pages={JSON.parse(JSON.stringify(pages))}
      />
      <AboutPageTemplate
        contentComponent={HTMLContent}
        content={data.markdownRemark.html}
      />
      {/* <section className="ls section_padding_100 columns_padding_25">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-push-6">
              <YouTubeWrapper>
                <YouTubeContainer>
                  <YouTube videoId="hQ0NfHQ3moY" />
                </YouTubeContainer>
              </YouTubeWrapper>
            </div>
            <div className="col-md-6 col-md-pull-6">
              <h2 className="section_header">About me</h2>
              <hr className="divider_30_1" />
              <AboutContent content={data.markdownRemark.html} />
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  )
}

export const query = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      html
      frontmatter {
        excerpt
        bannerimage {
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
          alt
        }
      }
    }
  }
`
