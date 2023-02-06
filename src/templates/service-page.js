import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import rehypeReact from "rehype-react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Breadcrumbs from "../components/Breadcrumbs"
// import Content, { HTMLContent } from "../components/Content";
import TestimonialsArea from "../components/TestimonialsArea"
import AppointmentArea from "../components/AppointmentArea"
import DynamicAnchor from "../components/DynamicAnchor"
import Accordion from "../components/Accordion"
import Tab from "../components/Tab"
import TabHeading from "../components/TabHeading"
import TabContent from "../components/TabContent"
import Seo from "../components/Seo/Seo"

const StyledLink = styled(Link)`
  && {
    :focus {
      color: #91d0cc;
    }

    :hover {
      cursor: pointer;
      color: #d9be93;
    }
  }
`

const StyledImg = styled(GatsbyImage)`
  margin-bottom: 50px;
  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`

const Notice = styled.div`
  border: 1px solid #333;
  padding: 30px 20px;
  max-width: 600px;
  margin: 0 auto 30px;

  p {
    color: #333;
    font-size: 15px !important;
  }
  span.underline {
    text-decoration: underline;
  }
`

//  Create a render function with references to your custom components in markdown
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "dynamic-anchor": DynamicAnchor,
    "gatsby-link": StyledLink,
    "accordion-container": Accordion,
    "tab-container": Tab,
    "tab-heading": TabHeading,
    "tab-content": TabContent,
  },
}).Compiler

export default function ServicePage({ data }) {
  // const ServiceContent = HTMLContent || Content;
  const { fields, frontmatter } = data.markdownRemark
  //   Prepare breadcrumbs
  const pages = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/#services" },
    { title: frontmatter.title, href: null },
  ]
  // service images
  let serviceImages = []
  if (
    frontmatter.bodyimage &&
    frontmatter.bodyimage.image &&
    frontmatter.bodyimage.image.relativePath
  ) {
    serviceImages.push(frontmatter.bodyimage.image.relativePath)
  }
  const pageMeta = {
    title: `${frontmatter.title} · services`,
    name: `${frontmatter.title}`,
    description:
      frontmatter.excerpt ||
      frontmatter.intro ||
      `Alistair Mork-Chadwick is a Counselling psychologist based in Howick. 
    He offers personal counselling, career guidance, 
    psychological assessments and mindfulness training.`,
    serviceImages: serviceImages,
    slug: fields.slug,
    datePublished: false,
  }
  return (
    <Layout currentPageSlug={fields.slug} appointmentButton>
      <Seo
        pageData={pageMeta}
        breadcrumbs={JSON.parse(JSON.stringify(pages))}
        pageType="service"
      />

      <Breadcrumbs
        bannerImage={frontmatter.bannerimage}
        pageTitle={frontmatter.title}
        pages={JSON.parse(JSON.stringify(pages))}
      />
      <section className="ls section_padding_top_65 section_padding_bottom_65">
        <div className="container">
          {frontmatter.pageId === "personal-counselling" && (
            <Notice>
              <p>
                Are you on a <strong>Medical Aid Hospital Plan</strong>?
              </p>
              <p>
                If so, the SA government requires all medical aid schemes to{" "}
                <span className="underline">
                  cover the cost of consultations
                </span>{" "}
                with a psychologist for Prescribed Minimum Benefit (PMB)
                conditions. These include Depression and Biploar Disorder
                amongst others. You will be provided with up to{" "}
                <strong>15 consultations</strong> by your medical aid.{" "}
                <Link to="/contact/">
                  <strong>Contact me</strong>
                </Link>{" "}
                for further info.
              </p>
            </Notice>
          )}
          <div className="row">
            <div className="col-lg-4 col-lg-push-8 col-sm-5 col-sm-push-7">
              {frontmatter.bodyimage && frontmatter.bodyimage.image && (
                <StyledImg
                  image={
                    frontmatter.bodyimage.image.childImageSharp.gatsbyImageData
                  }
                  alt={frontmatter.bodyimage.alt}
                />
              )}
            </div>
            <div className="col-lg-8 col-lg-pull-4 col-sm-7 col-sm-pull-5">
              <DynamicAnchor id="start-content" />
              <h2
                className="section_header small"
                dangerouslySetInnerHTML={{ __html: frontmatter.title }}
              />
              <hr className="divider_30_1" />
              {renderAst(data.markdownRemark.htmlAst)}
            </div>
          </div>
        </div>
      </section>
      {frontmatter.testimonialsArea &&
      frontmatter.testimonialsArea.testimonials.length > 0 ? (
        <React.Fragment>
          <TestimonialsArea testimonialsArea={frontmatter.testimonialsArea} />
          <AppointmentArea />
        </React.Fragment>
      ) : (
        <AppointmentArea noTopPadding />
      )}
    </Layout>
  )
}

export const query = graphql`
  query ServicePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      htmlAst
      frontmatter {
        pageId
        title
        intro
        excerpt
        bannerimage {
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
          alt
        }
        bodyimage {
          image {
            childImageSharp {
              gatsbyImageData(
                width: 400
                layout: CONSTRAINED
                placeholder: BLURRED
              )
            }
          }
          alt
        }
        testimonialsArea {
          testimonials {
            quote
            author
          }
        }
      }
    }
  }
`
