module.exports = {
    plugins: [
        `gatsby-plugin-netlify-cms`,
        'gatsby-plugin-netlify-identity-widget',
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/Layout`)
            }
        }
    ]
};