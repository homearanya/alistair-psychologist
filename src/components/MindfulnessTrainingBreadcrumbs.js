import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Breadcrumbs from "./Breadcrumbs";

export default function MindfulnessTrainingBreadcrumbs(props) {
  return (
    <StaticQuery
      query={graphql`
        query MindfulnessTrainingBreadcrumbsQuery {
          markdownRemark(
            fields: { slug: { eq: "/services/mindfulness-training/" } }
          ) {
            fields {
              slug
            }
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
            }
          }
        }
      `}
      render={data => {
        // const ServiceContent = HTMLContent || Content;
        const { fields, frontmatter } = data.markdownRemark;
        //   Prepare breadcrumbs
        let pages;
        if (props.root) {
          pages = [
            { title: "Home", href: "/" },
            { title: "Services", href: "/#services" },
            { title: frontmatter.title, href: null }
          ];
        } else {
          pages = [
            { title: "Home", href: "/" },
            { title: "Services", href: "/#services" },
            { title: frontmatter.title, href: fields.slug },
            { title: props.pageTitle, href: null }
          ];
        }
        return (
          <Breadcrumbs
            bannerImage={frontmatter.bannerimage}
            pageTitle={props.pageTitle}
            pages={pages}
          />
        );
      }}
    />
  );
}
