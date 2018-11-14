module.exports = {
    plugins: [
        `gatsby-plugin-netlify-cms`,
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/Layout`)
            }
        }
    ]
};