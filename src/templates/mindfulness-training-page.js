import React from "react";
import rehypeReact from "rehype-react";

import Layout from "../components/Layout";
import MTBreadcrumbs from "../components/MTBreadcrumbs";
import MTMenu from "../components/MTMenu";
import MTTestimonials from "../components/MTTestimonials";
import AppointmentArea from "../components/AppointmentArea";

//  Create a render function with references to your custom components in markdown
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "scroll-to-anchor": ScrollToAnchor,
    "dynamic-anchor": DynamicAnchor,
    "gatsby-link": StyledLink
  }
}).Compiler;

export default function() {
  const { fields, htmlAst, frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <MTBreadcrumbs
        root={fields.slug === "/services/mindfulness-training/"}
        pageTitle={frontmatter.title}
      />
      <section className="ls section_padding_100 columns_padding_25">
        <div className="container">
          <div className="row vertical-tabs">
            <MTMenu />

            <div className="col-sm-7">
              <div className="tab-content no-border">
                <div className="tab-pane fade in active" id="vertical-tab1">
                  <h2>{frontmatter.title}</h2>
                  {renderAst(data.markdownRemark.htmlAst)}
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
  query ServicePage($id: String!) {
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
