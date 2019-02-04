import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import rehypeReact from "rehype-react";
import styled from "styled-components";

import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";
// import Content, { HTMLContent } from "../components/Content";
import TestimonialsArea from "../components/TestimonialsArea";
import AppointmentArea from "../components/AppointmentArea";
import ScrollToAnchor from "../components/ScrollToAnchor";
import DynamicAnchor from "../components/DynamicAnchor";
import Accordion from "../components/Accordion";
import Tab from "../components/Tab";
import TabHeading from "../components/TabHeading";
import TabContent from "../components/TabContent";

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
`;

const StyledImg = styled(Img)`
  margin-bottom: 50px;
  @media (min-width: 992px) {
    margin-top: 100px;
    margin-bottom: 0;
  }
`;

//  Create a render function with references to your custom components in markdown
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "scroll-to-anchor": ScrollToAnchor,
    "dynamic-anchor": DynamicAnchor,
    "gatsby-link": StyledLink,
    "accordion-container": Accordion,
    "tab-container": Tab,
    "tab-heading": TabHeading,
    "tab-content": TabContent
  }
}).Compiler;

export default function({ data }) {
  // const ServiceContent = HTMLContent || Content;
  const { frontmatter } = data.markdownRemark;
  //   Prepare breadcrumbs
  const pages = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/#services" },
    { title: frontmatter.title, href: null }
  ];
  console.log("htmlAst", data.markdownRemark.htmlAst);
  console.log("renderAst(htmlAst)", renderAst(data.markdownRemark.htmlAst));
  return (
    <Layout servicePage appointmentButton>
      <Breadcrumbs
        bannerImage={frontmatter.bannerimage}
        pageTitle={frontmatter.title}
        pages={pages}
      />
      <section className="ls section_padding_top_130 section_padding_bottom_130">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-lg-push-8 col-sm-5 col-sm-push-7">
              {frontmatter.bodyimage && frontmatter.bodyimage.image && (
                <StyledImg
                  fluid={frontmatter.bodyimage.image.childImageSharp.fluid}
                  alt={frontmatter.bodyimage.alt}
                />
              )}
            </div>
            <div className="col-lg-8 col-lg-pull-4 col-sm-7 col-sm-pull-5">
              <h2 className="section_header small">{frontmatter.title}</h2>
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
  );
}

export const servicePageQuery = graphql`
  query ServicePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      htmlAst
      frontmatter {
        title
        bannerimage {
          image {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        bodyimage {
          image {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
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
`;
