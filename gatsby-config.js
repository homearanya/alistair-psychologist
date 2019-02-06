var netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`
  }
};

module.exports = {
  siteMetadata: {
    title: "Alistair Mork-Chadwick · Counselling Psychologist",
    defaultTitle: "Alistair Mork-Chadwick · Counselling Psychologist",
    description:
      "Hello, I am a Counselling psychologist based in Howick. I offer personal counselling, career guidance, psychological assessments and mindfulness training.",
    canonicalUrl: "https://alistairmork-chadwick.co.za/",
    image: "https://www.trails.co.za/img/meander-hike-gallery_2.jpg",
    author: {
      name: "Alistair Mork-Chadwick",
      minibio: `
            <strong>Alistair Mork-Chadwick</strong> is a front-end web developer specialised in ReactJS/Gatsby.
            He lives in Howick, KZN, South Africa.
          `
    },
    organization: {
      name: "Alistair Mork-Chadwick · Counselling Psychologist",
      url: "https://alistairmork-chadwick.co.za",
      logo: "https://www.trails.co.za/img/new-trails-logo-new-colors.png"
    },
    siteUrl: "https://alistairmork-chadwick.co.za" // for gatsby plugin sitemap
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/general`,
        name: "general"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "staticimages"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src_images`,
        path: `${__dirname}/src/assets/img/`
      }
    },
    netlifyCmsPaths, // Including in your Gatsby plugins will transform any paths in your frontmatter
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          netlifyCmsPaths, // Including in your Remark plugins will transform any paths in your markdown body
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 930,
              backgroundColor: "transparent" // required to display blurred image first
            }
          },
          "gatsby-remark-component"
        ]
      }
    },
    `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-netlify-identity-widget",
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ],
  mapping: {
    "MarkdownRemark.fields.homeservices": `MarkdownRemark`,
    "MarkdownRemark.fields.mtCoursesUCourses": `MarkdownRemark`,
    "MarkdownRemark.fields.uCourseMTCourses": `MarkdownRemark`
  }
};
