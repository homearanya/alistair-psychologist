import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";
import ArticleThumbnail from "../components/ArticleThumbnail";

export default function({ location, data }) {
  const { frontmatter } = data.articlesPageQuery;
  const { edges: articles } = data.articlesQuery;
  //   Prepare breadcrumbs
  const pages = [
    { title: "Home", href: "/" },
    { title: "Articles", href: null }
  ];

  return (
    <Layout>
      <Breadcrumbs
        bannerImage={frontmatter.bannerimage}
        pageTitle="Articles"
        pages={pages}
      />
      <section className="ls page_portfolio section_padding_top_100 section_padding_bottom_75">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="isotope_container isotope row masonry-layout columns_bottom_margin_30">
                {articles.map(({ node: article }, index) => (
                  <ArticleThumbnail
                    key={index}
                    siteUrl={location.origin}
                    article={article}
                    key={article.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const articlesPageQuery = graphql`
  query ArticlesQuery($id: String!) {
    articlesPageQuery: markdownRemark(id: { eq: $id }) {
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
    articlesQuery: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "article-page" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            intro
            date(formatString: "MMMM DD, YYYY")
            thumbnailimage {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
