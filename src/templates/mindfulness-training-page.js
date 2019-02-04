import React from "react";
import { graphql, Link } from "gatsby";
import rehypeReact from "rehype-react";
import styled from "styled-components";

import Layout from "../components/Layout";
import MindfulnessTrainingBreadcrumbs from "../components/MindfulnessTrainingBreadcrumbs";
import MTMenu from "../components/MTMenu";
import MTTestimonials from "../components/MTTestimonials";
import AppointmentArea from "../components/AppointmentArea";
import DynamicAnchor from "../components/DynamicAnchor";
import FAQ from "../components/FAQ";

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

const StyledH1 = styled.h1`
  margin-top: 0px;
  font-size: 28px;
`;
//  Create a render function with references to your custom components in markdown
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "faq-container": FAQ,
    "dynamic-anchor": DynamicAnchor,
    "gatsby-link": StyledLink
  }
}).Compiler;

export default function({ data }) {
  const { fields, htmlAst, frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <MindfulnessTrainingBreadcrumbs
        root={fields.slug === "/services/mindfulness-training/"}
        pageTitle={frontmatter.title}
      />
      <section className="ls section_padding_100 columns_padding_25">
        <div className="container">
          <div className="row vertical-tabs">
            <MTMenu />

            <div className="col-sm-8">
              <div className="tab-content no-border">
                <div className="tab-pane fade in active" id="vertical-tab1">
                  <DynamicAnchor id="start-content" />
                  <StyledH1>{frontmatter.title}</StyledH1>
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
  );
}

export const servicePageQuery = graphql`
  query MindfulnessTrainingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      htmlAst
      frontmatter {
        title
      }
    }
  }
`;
