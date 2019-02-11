import React from "react";
import { graphql } from "gatsby";
// import Zoom from "react-reveal/Zoom";
import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";
import { ContactForm } from "../components/ContactForm";
import ContactDetails2 from "../components/ContactDetails2";
import DynamicAnchor from "../components/DynamicAnchor";

export default ({ data }) => {
  const { fields, frontmatter } = data.markdownRemark;

  //   Prepare breadcrumbs
  const pages = [
    { title: "Home", href: "/" },
    { title: "Contact", href: null }
  ];
  return (
    <Layout currentPageSlug={fields.slug}>
      <Breadcrumbs
        bannerImage={frontmatter.bannerimage}
        pageTitle="Contact"
        pages={pages}
      />

      {/* <Zoom> */}
      <section className="ls columns_padding_25 section_padding_top_100 section_padding_bottom_100">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <DynamicAnchor id="contact-page" />
              <h3 className="module-header">Contact Form</h3>
              <ContactForm className="contact-form row columns_margin_bottom_40" />
            </div>

            <div className="col-md-5">
              <ContactDetails2 />
            </div>
          </div>
        </div>
      </section>
      {/* </Zoom> */}
    </Layout>
  );
};

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
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
      }
    }
  }
`;
