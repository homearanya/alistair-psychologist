import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SliderArea from "../components/SliderArea";
import ServicesArea from "../components/ServicesArea";
import AboutArea from "../components/AboutArea";
import ArticlesArea from "../components/ArticlesArea";
import TestimonialsArea from "../components/TestimonialsArea";
import FaqArea from "../components/FaqArea";
import PricesArea from "../components/PricesArea";
import AppointmentArea from "../components/AppointmentArea";

import "../assets/css/custom.css";

export default ({ data }) => {
  const { frontmatter } = data.homePageQuery;

  return (
    <Layout appointmentButton>
      <SliderArea slider={frontmatter.slider} />
      <ServicesArea servicesArea={frontmatter.servicesArea} />
      <AboutArea aboutMeArea={frontmatter.aboutMeArea} />
      <ArticlesArea articlesArea={frontmatter.articlesArea} />
      <TestimonialsArea testimonialsArea={frontmatter.testimonialsArea} />
      {/* <FaqArea />
    <PricesArea /> */}
      <AppointmentArea />
    </Layout>
  );
};

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    homePageQuery: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        slider {
          heading1
          heading2
          subheading
          image {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1920, maxHeight: 850) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        servicesArea {
          heading
          blurb
          services {
            heading
            blurb
            serviceIcon {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 80) {
                    ...GatsbyImageSharpFluid
                  }
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
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        articlesArea {
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
`;
