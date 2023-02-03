const _ = require("lodash")
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
// const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  console.log("gatsby node, about to create pages")
  return graphql(`
    {
      nonPostsPages: allMarkdownRemark(
        limit: 1000
        filter: {
          fileAbsolutePath: { regex: "/src/pages/" }
          frontmatter: { templateKey: { ne: "post-page" } }
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
      postsPages: allMarkdownRemark(
        limit: 1000
        sort: { frontmatter: { date: DESC } }
        filter: {
          fileAbsolutePath: { regex: "/src/pages/" }
          frontmatter: { templateKey: { eq: "post-page" } }
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              title
              category {
                frontmatter {
                  title
                  slug
                }
                id
              }
              # thumbnailimage {
              #   alt
              #   image {
              #     childImageSharp {
              #       gatsbyImageData(
              #         width: 400
              #         placeholder: BLURRED
              #         layout: CONSTRAINED
              #       )
              #     }
              #   }
              # }
            }
          }
        }
      }
    }
  `).then(result => {
    console.log("gatsby node:", { result })
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const nonPosts = result.data.nonPostsPages.edges
    const posts = result.data.postsPages.edges
    const categories = posts.reduce((acc, { node: post }) => {
      const { category } = post.frontmatter
      if (category) {
        const { id } = category
        const { title, slug } = category.frontmatter
        acc[slug] = {
          title: title,
          id,
        }
      }
      return acc
    }, {})

    nonPosts.forEach(({ node }) => {
      const id = node.id
      createPage({
        path: node.fields.slug,
        component: path.resolve(
          `src/templates/${String(node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
    // Create blog post pages
    posts.forEach(({ node }, index) => {
      const id = node.id
      // Prepare related data
      createPage({
        path: node.fields.slug,
        component: path.resolve(
          `src/templates/${String(node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === posts.length - 1 ? null : posts[index + 1].node,
        },
      })
    })
    // Create blog categories pages
    Object.keys(categories).forEach(category => {
      const { id, title } = categories[category]
      createPage({
        path: `/blog/categories/${category}`,
        component: path.resolve(`src/templates/blog-category-page.js`),
        // additional data can be passed via context
        context: {
          id,
          slug: category,
          title,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // if (!node.frontmatter || !node.frontmatter.menuItems) fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
