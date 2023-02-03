import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import rehypeReact from "rehype-react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Breadcrumbs from "../components/Breadcrumbs"
import MTOfflineCourseMenu from "../components/MTOfflineCourseMenu"
import MTTestimonials from "../components/MTTestimonials"
import AppointmentArea from "../components/AppointmentArea"
import DynamicAnchor from "../components/DynamicAnchor"
import OfflineCourseFAQ from "../components/OfflineCourseFAQ"
import UpcomingCourses from "../components/UpcomingCourses"
import Seo from "../components/Seo/Seo"

const ImageBlock = styled.div`
  margin-bottom: 50px;
`

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

//  Create a render function with references to your custom components in markdown
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "faq-container": OfflineCourseFAQ,
    "upcoming-courses": UpcomingCourses,
    "dynamic-anchor": DynamicAnchor,
    "gatsby-link": StyledLink,
  },
}).Compiler

export default function OfflineCoursePage({ data, location }) {
  const { fields, htmlAst, frontmatter } = data.mindfulnessTrainingQuery
  const { frontmatter: frontmatter2 } = data.mindfulnessTrainingRoot
  let pages
  if (fields.slug.includes("/mindfulness-training/offline-course/overview/")) {
    pages = [
      { title: "Home", href: "/" },
      { title: "Mindfulness Training ", href: "/mindfulness-training/" },
      { title: "Offline Course", href: null },
      { title: frontmatter.title, href: null },
    ]
  } else {
    pages = [
      { title: "Home", href: "/" },
      { title: "Mindfulness Training ", href: "/mindfulness-training/" },
      {
        title: "Offline Course",
        href: "/mindfulness-training/offline-course/overview/",
      },
      { title: frontmatter.title, href: null },
    ]
  }
  // course images
  let courseImages = []
  if (
    frontmatter.bodyimage &&
    frontmatter.bodyimage.image &&
    frontmatter.bodyimage.image.relativePath
  ) {
    courseImages.push(frontmatter.bodyimage.image.relativePath)
  }
  const pageMeta = {
    title: `${frontmatter.title} · ${frontmatter2.title}`,
    name: `${frontmatter.title}`,
    description:
      frontmatter.excerpt ||
      frontmatter.intro ||
      `Alistair Mork-Chadwick is a Counselling psychologist based in Howick. 
    He offers personal counselling, career guidance, 
    psychological assessments and mindfulness training.`,
    courseImages: courseImages,
    slug: fields.slug,
    datePublished: false,
  }
  const type =
    (fields.slug.includes("/minfulness-training/") && "service") ||
    (fields.slug.includes("course") && "course") ||
    null
  return (
    <Layout currentPageSlug={fields.slug} appointmentButton>
      <Seo
        pageData={pageMeta}
        breadcrumbs={JSON.parse(JSON.stringify(pages))}
        pageType={type}
      />
      <Breadcrumbs
        bannerImage={frontmatter.bannerimage}
        pageTitle={frontmatter.title}
        pages={JSON.parse(JSON.stringify(pages))}
      />
      <section className="ls section_padding_100 columns_padding_25">
        <div className="container">
          <div className="row vertical-tabs">
            <MTOfflineCourseMenu />

            <div className="col-sm-8">
              <DynamicAnchor id="start-content" />
              {frontmatter.bodyimage && frontmatter.bodyimage.image && (
                <ImageBlock className="entry-thumbnail item-media">
                  <GatsbyImage
                    image={
                      frontmatter.bodyimage.image.childImageSharp
                        .gatsbyImageData
                    }
                    alt={frontmatter.bodyimage.alt}
                  />
                </ImageBlock>
              )}
              <div className="tab-content no-border">
                <div className="tab-pane fade in active" id="vertical-tab1">
                  {/* <StyledH1>{frontmatter.title}</StyledH1> */}
                  {renderAst(htmlAst)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MTTestimonials />
      <AppointmentArea />
    </Layout>
  )
}

export const query = graphql`
  query OfflineCoursePage($id: String!) {
    mindfulnessTrainingQuery: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      htmlAst
      frontmatter {
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
                width: 800
                layout: CONSTRAINED
                placeholder: BLURRED
              )
            }
          }
          alt
        }
      }
    }
    mindfulnessTrainingRoot: markdownRemark(
      fields: { slug: { eq: "/mindfulness-training/" } }
    ) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
