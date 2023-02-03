import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
// import SliderArea from "../components/SliderArea"
import ServicesArea from "../components/ServicesArea"
import AboutArea from "../components/AboutArea"
import CoursesArea from "../components/CoursesArea"
import PostsArea from "../components/PostsArea"
import TestimonialsArea from "../components/TestimonialsArea"
import OnlineTherapyCTA from "../components/OnlineTherapyCTA"
import NewsletterCTA from "../components/NewsletterCTA"
import AppointmentArea from "../components/AppointmentArea"
import Seo from "../components/Seo/Seo"

const HomePage = ({ data, location }) => {
  //   Prepare breadcrumbs
  const pages = [{ title: "Home", href: null }]
  const { fields, frontmatter } = data.homePageQuery
  const pageMeta = {
    title: `Counselling Psychologist in Howick`,
    description:
      frontmatter.excerpt ||
      "Alistair Mork-Chadwick is a Counselling psychologist based in Howick. He offers personal counselling, career guidance, psychological assessments and mindfulness training.",
    slug: fields.slug,
  }
  return (
    <Layout currentPageSlug={fields.slug} appointmentButton>
      <Seo
        pageData={pageMeta}
        breadcrumbs={JSON.parse(JSON.stringify(pages))}
      />
      {/* <SliderArea slider={frontmatter.slider} /> */}
      <ServicesArea id="services" servicesArea={frontmatter.servicesArea} />
      <OnlineTherapyCTA />
      <AboutArea aboutMeArea={frontmatter.aboutMeArea} />
      <NewsletterCTA />
      <CoursesArea
        coursesArea={frontmatter.coursesArea}
        siteUrl={location.origin}
      />
      <PostsArea postsArea={frontmatter.postsArea} siteUrl={location.origin} />
      {frontmatter.testimonialsArea &&
        frontmatter.testimonialsArea.testimonials.length > 0 && (
          <TestimonialsArea testimonialsArea={frontmatter.testimonialsArea} />
        )}
      <AppointmentArea />
    </Layout>
  )
}

export const query = graphql`
  fragment ContactDetailsFragment on File {
    childMarkdownRemark {
      frontmatter {
        contact_details {
          address
          email
          phone {
            phonedisplay
            phonenumber
          }
        }
      }
    }
  }
  query HomePage($id: String!) {
    homePageQuery: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        excerpt
        slider {
          heading1
          heading2
          subheading
          image {
            alt
            image {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
          }
        }
        servicesArea {
          heading
          blurb
          services {
            service {
              id
              fields {
                slug
              }
              frontmatter {
                title
                intro
                thumbnailimage {
                  image {
                    childImageSharp {
                      gatsbyImageData(
                        width: 80
                        height: 90
                        layout: FIXED
                        placeholder: BLURRED
                      )
                    }
                  }
                  alt
                }
              }
            }
          }
        }
        aboutMeArea {
          heading1
          heading2
          blurb {
            paragraphs {
              paragraph
            }
          }
          personPicture {
            alt
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
              }
            }
          }
          backgroundImage {
            alt
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
              }
            }
          }
        }
        coursesArea {
          heading
          blurb
        }
        postsArea {
          heading
          blurb
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
export default HomePage
