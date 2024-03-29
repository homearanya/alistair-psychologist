import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import SchemaOrg from "./SchemaOrg"

const SEO = ({ pageData, breadcrumbs, postImage, pageType }) => (
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
                  phonenumber
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      // data for SEO & schemaOrg
      const { siteMetadata: seo } = data.SEOQuery
      const {
        phonenumber: phone,
      } = data.PhoneDetailsQuery.childMarkdownRemark.frontmatter.contact_details.phone
      // data for organization schemaOrg
      let organization = seo.organization
      organization.phone = phone

      const pageMeta = pageData || {}

      const metaTitle = pageMeta.title || seo.title
      const metaDescription =
        pageMeta.description || pageData.excerpt || seo.description
      const url = pageMeta.slug
        ? `${seo.canonicalUrl}${pageMeta.slug}`
        : seo.canonicalUrl
      // prepare breadcrumbs for schemar.org
      breadcrumbs.forEach((item, index) => {
        if (item.href) {
          item.href = `${seo.canonicalUrl}${item.href}`
        } else {
          item.href = `${seo.canonicalUrl}${pageMeta.slug}`
        }
      })
      // Course data for schemaOrg
      let course = {}
      if (pageType === "course") {
        course.name = pageMeta.name
        course.description = pageMeta.description
      }
      // service data for schemaOrg
      let service = {}
      if (pageType === "service") {
        service.name = pageMeta.name
        service.description = pageMeta.description
        service.images = pageMeta.serviceImages
        service.price = pageMeta.servicePrice
        service.url = `${seo.canonicalUrl}/${pageMeta.slug}`
      }
      // post data for schemaOrg
      let post = {}
      if (pageType === "post") {
        post.name = pageMeta.title
        post.alternateName = seo.defaultTitle
        post.description = pageMeta.description
        post.images = postImage ? `${seo.canonicalUrl}${postImage}` : seo.image
        if (pageMeta.datePublished) {
          post.datePublished = new Date(pageMeta.datePublished)
        } else {
          post.datePublished = new Date()
        }
        post.url = `${seo.canonicalUrl}${pageMeta.slug}`
        post.author = seo.author
      }

      // Meta image
      let metaImage = seo.image
      if (pageType === "post") {
        metaImage = postImage ? `${seo.canonicalUrl}${postImage}` : seo.image
      } else if (pageType === "service") {
        metaImage =
          pageMeta.serviceImages.length > 0
            ? `${seo.canonicalUrl}/img${pageMeta.serviceImages[0]}`
            : seo.image
      } else if (pageType === "course") {
        metaImage =
          pageMeta.courseImages.length > 0
            ? `${seo.canonicalUrl}/img${pageMeta.courseImages[0]}`
            : seo.image
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
            {pageType === "post" ? (
              <meta property="og:type" content="post" />
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
            breadcrumbs={breadcrumbs}
            service={service}
            post={post}
            course={course}
          />
        </React.Fragment>
      )
    }}
  />
)

export default SEO
