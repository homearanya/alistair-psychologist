import path from "path";
import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import SchemaOrg from "./SchemaOrg";

const SEO = ({ pageData, articleImage, pageType }) => (
  <StaticQuery
    query={graphql`
      {
        SEOQuery: site {
          siteMetadata {
            title
            defaultTitle
            description
            canonicalUrl
            image
            author {
              name
            }
            organization {
              name
              url
              logo
            }
          }
        }
        PhoneDetailsQuery: file(relativePath: { eq: "contact-details.md" }) {
          childMarkdownRemark {
            frontmatter {
              contact_details {
                phone {
                  phonedisplay
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      // data for SEO & schemaOrg
      const { siteMetadata: seo } = data.SEOQuery;
      const {
        phonedisplay: phone
      } = data.PhoneDetailsQuery.childMarkdownRemark.frontmatter.contact_details.phone;
      // data for organization schemaOrg
      let organization = seo.organization;
      organization.phone = phone;

      const pageMeta = pageData || {};

      const metaTitle = pageMeta.title || seo.title;
      const metaDescription =
        pageMeta.description || pageData.excerpt || seo.description;
      const url = pageMeta.slug
        ? `${seo.canonicalUrl}${path.sep}${pageMeta.slug}`
        : seo.canonicalUrl;
      // service data for schemaOrg
      let service = {};
      if (pageType === "service") {
        service.name = pageMeta.serviceName;
        service.description = pageMeta.description;
        service.images = pageMeta.serviceImages;
        service.price = pageMeta.servicePrice;
        service.url = `${seo.canonicalUrl}${path.sep}${pageMeta.slug}`;
      }
      // article data for schemaOrg
      let article = {};
      if (pageType === "article") {
        article.name = pageMeta.name;
        article.alternateName = seo.defaultTitle;
        article.description = pageMeta.description;
        article.image = articleImage
          ? `${seo.canonicalUrl}${articleImage}`
          : seo.image;
        article.dataPublished = pageMeta.datePublished;
        article.url = `${seo.canonicalUrl}${path.sep}${pageMeta.slug}`;
        article.author = seo.author;
      }

      // Meta image
      let metaImage = seo.image;
      if (pageType === "article") {
        metaImage = articleImage
          ? `${seo.canonicalUrl}${articleImage}`
          : seo.image;
      } else if (pageType === "service") {
        metaImage =
          pageMeta.serviceImages.length > 0
            ? `${seo.canonicalUrl}/img${pageMeta.serviceImages[0]}`
            : seo.image;
      }
      return (
        <React.Fragment>
          <Helmet>
            {/* General tags */}
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="image" content={metaImage} />

            {/* Establish canonical url */}
            <link rel="canonical" href={url} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={url} />
            {pageType === "article" ? (
              <meta property="og:type" content="article" />
            ) : (
              <meta property="og:type" content="website" />
            )}
            <meta property="og:site_name" content={seo.title} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}

            {/* Twitter Card tags */}
            {/* <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={seo.social.twitter} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} /> */}
          </Helmet>
          <SchemaOrg
            pageType={pageType}
            canonicalUrl={seo.canonicalUrl}
            organization={organization}
            service={service}
            article={article}
          />
        </React.Fragment>
      );
    }}
  />
);

export default SEO;
