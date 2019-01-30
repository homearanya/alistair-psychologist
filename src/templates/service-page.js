import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import rehypeReact from "rehype-react";
import styled from "styled-components";

import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";
// import Content, { HTMLContent } from "../components/Content";
import TestimonialsArea from "../components/TestimonialsArea";
import ScrollToAnchor from "../components/ScrollToAnchor";

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

const ImgWrapper = styled.div`
  text-align: center;
`;

const StyledImg = styled(Img)`
  display: inline-block;
  margin-bottom: 50px;
  @media (min-width: 992px) {
    margin-top: 100px;
    margin-bottom: 0;
  }
`;

// Create Dynamic Anchor
const DynamicAnchor = styled.span`
  display: block;
  position: relative;
  visibility: hidden;
  top: -70px;
  @media (min-width: 992px) {
    top: -90px;
  }
`;

//  Create a render function with references to your custom components in markdown
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "scroll-to-anchor": ScrollToAnchor,
    "dynamic-anchor": DynamicAnchor,
    "gatsby-link": StyledLink
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

  return (
    <Layout servicePage>
      <Breadcrumbs
        bannerImage={frontmatter.bodyimage}
        pageTitle={frontmatter.title}
        pages={pages}
      />
      <section className="ls section_padding_top_130 section_padding_bottom_130">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-lg-push-8 col-sm-5 col-sm-push-7">
              <ImgWrapper>
                <StyledImg
                  fluid={frontmatter.bodyimage.image.childImageSharp.fluid}
                  alt={frontmatter.bodyimage.alt}
                />
              </ImgWrapper>
            </div>
            <div className="col-lg-8 col-lg-pull-4 col-sm-7 col-sm-pull-5">
              <h2 className="section_header small">{frontmatter.title}</h2>
              <hr className="divider_30_1" />
              {/* <ServiceContent content={data.markdownRemark.html} /> */}
              {renderAst(data.markdownRemark.htmlAst)}
            </div>
          </div>
        </div>
      </section>
      {frontmatter.testimonialsArea &&
        frontmatter.testimonialsArea.testimonials.length > 0 && (
          <TestimonialsArea testimonialsArea={frontmatter.testimonialsArea} />
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
