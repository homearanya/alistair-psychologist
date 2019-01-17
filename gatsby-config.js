module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`)
      }
    },
    "gatsby-plugin-netlify-identity-widget",
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};
