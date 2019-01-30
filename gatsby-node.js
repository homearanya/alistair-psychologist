const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

// variables to collect information for homepage/services & servicemenu/services relation
let homeServicesTitles = [];
let homeServicesIds = [];
let menuServicesTitles = [];
let menuServicesIds = [];
let servicesObject = new Object();
let homeNodeId, servicesMenuNodeId;

exports.createPages = ({ actions, graphql, getNode }) => {
  const { createPage, createNodeField } = actions;
  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/src/pages/" } }
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
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(edge => {
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id
        }
      });
    });

    // create node fields for homepage/services & servicemenu/services relations
    homeServicesTitles.forEach(service => {
      if (servicesObject[service]) {
        homeServicesIds.push(servicesObject[service]);
      }
    });

    if (homeServicesIds.length > 0) {
      createNodeField({
        node: getNode(homeNodeId),
        name: `homeservices`,
        value: homeServicesIds
      });
    }

    menuServicesTitles.forEach(service => {
      if (servicesObject[service]) {
        menuServicesIds.push(servicesObject[service]);
      }
    });

    if (menuServicesIds.length > 0) {
      createNodeField({
        node: getNode(servicesMenuNodeId),
        name: `menuservices`,
        value: menuServicesIds
      });
    }
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
    // collect nodes for homepage/services & servicesmenu/services relation
    if (
      node.frontmatter.templateKey &&
      node.frontmatter.templateKey.includes("home-page")
    ) {
      homeNodeId = node.id;
      node.frontmatter.servicesArea.services.forEach(service =>
        homeServicesTitles.push(service.service.trim().toLowerCase())
      );
    } else if (
      node.fileAbsolutePath &&
      node.fileAbsolutePath.includes("/src/general/services-menu.md")
    ) {
      servicesMenuNodeId = node.id;
      node.frontmatter.services.forEach(service =>
        menuServicesTitles.push(service.service.trim().toLowerCase())
      );
    } else if (
      node.frontmatter.templateKey &&
      node.frontmatter.templateKey.includes("service-page")
    ) {
      servicesObject[node.frontmatter.title.trim().toLowerCase()] = node.id;
    }
  }
};
