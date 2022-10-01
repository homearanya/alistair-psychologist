import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Accordion from "./Accordion"
import Tab from "./Tab"
import TabHeading from "./TabHeading"
import TabContent from "./TabContent"

export default function FAQ() {
  return (
    <StaticQuery
      query={graphql`
        query OfflineCourseFAQQuery {
          markdownRemark(
            fields: {
              slug: {
                eq: "/mindfulness-training/offline-course/frequently-asked-questions/"
              }
            }
          ) {
            frontmatter {
              qa {
                question
                answer
              }
            }
          }
        }
      `}
      render={(data) => {
        console.log(
          "data.markdownRemark.frontmatter",
          data.markdownRemark.frontmatter
        )
        const { qa } = data.markdownRemark.frontmatter
        return (
          <Accordion>
            {qa.map((qa, index) => (
              <Tab key={index} isOpen={index === 0}>
                <TabHeading heading={qa.question} />
                <TabContent>{qa.answer}</TabContent>
              </Tab>
            ))}
          </Accordion>
        )
      }}
    />
  )
}
