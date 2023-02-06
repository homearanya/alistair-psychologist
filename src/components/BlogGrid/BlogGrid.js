import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Wrapper, List, ListItem, StyledLink } from "./BlogGrid.styled"

const BlogGrid = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/general/categories/" } }
        sort: { frontmatter: { order: ASC } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <List>
        {edges.map(({ node: category }) => (
          <ListItem key={category.id}>
            <StyledLink
              to={`/blog${category.fields.slug}`}
              activeClassName="active"
            >
              {category.frontmatter.title}
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  )
}

export default BlogGrid
