import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Button from "../Button"

import { Wrapper, List, ListItem } from "./BlogSidebar.styled"

const BlogSidebar = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/general/categories/" } }
        sort: { order: ASC, fields: [frontmatter___order] }
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
            <Button
              whereTo={`/blog${category.fields.slug}`}
              text={category.frontmatter.title}
            />
          </ListItem>
        ))}
      </List>
    </Wrapper>
  )
}

export default BlogSidebar
