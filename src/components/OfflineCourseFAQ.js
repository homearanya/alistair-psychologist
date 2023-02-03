import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Accordion from "./Accordion"
import Tab from "./Tab"
import TabHeading from "./TabHeading"
import TabContent from "./TabContent"

export default function OfflineCourseFAQ() {
  const data = useStaticQuery(graphql`
    query {
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
  `)

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
}
