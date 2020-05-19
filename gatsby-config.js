module.exports = {
  siteMetadata: {
    title: "Alistair Mork-Chadwick",
    defaultTitle: "Alistair Mork-Chadwick · Counselling Psychologist",
    description: `Alistair Mork-Chadwick is a Counselling psychologist based in Howick. 
      He offers personal counselling, career guidance, 
      psychological assessments and mindfulness training.`,
    canonicalUrl: "https://www.alistairmork-chadwick.co.za",
    image:
      "https://www.alistairmork-chadwick.co.za/img/alistair-mork-chadwick.png",
    author: {
      name: "Alistair Mork-Chadwick",
      minibio: `
            <strong>Alistair Mork-Chadwick</strong> is a Counselling psychologist based in Howick. 
            He offers personal counselling, career guidance, 
            psychological assessments and mindfulness training.
          `,
    },
    organization: {
      name: "Alistair Mork-Chadwick · Counselling Psychologist",
      url: "https://www.alistairmork-chadwick.co.za",
      logo: "https://www.alistairmork-chadwick.co.za/img/logo.png",
    },
    siteUrl: "https://www.alistairmork-chadwick.co.za", // for gatsby plugin sitemap
  },
  plugins: [
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://alistairmork-chadwick.us18.list-manage.com/subscribe/post?u=cadc5e7608830da642a5e13a8&amp;id=87f001310d", // add your MC list endpoint here; see instructions below
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.alistairmork-chadwick.co.za",
        sitemap: "https://www.alistairmork-chadwick.co.za/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-P7T4MLS",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Open Sans"],
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: "auto",
        lang: "en-US",
        background: "#fff",
        theme_color: "#fff",
        display: "standalone",
        orientation: "any",
        start_url: "/?homescreen=1",
        version: "1.0",

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Alistair Mork-Chadwick · Counselling Psychologist",
        short_name: "alistair",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/assets/img/icon.png", // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    // "gatsby-plugin-remove-serviceworker",
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/general`,
        name: "general",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src_images`,
        path: `${__dirname}/src/assets/img/`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 930,
              backgroundColor: "transparent", // required to display blurred image first
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
          "gatsby-remark-component",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    "gatsby-plugin-netlify-identity-widget",
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        cachePublic: true,
      },
    },
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
  mapping: {
    "MarkdownRemark.frontmatter.servicesArea.services.service": `MarkdownRemark.frontmatter.title`,
    "MarkdownRemark.frontmatter.courseName": `MarkdownRemark.frontmatter.title`,
    "MarkdownRemark.frontmatter.category": `MarkdownRemark.frontmatter.slug`,
  },
}
