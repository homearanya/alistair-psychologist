import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Accordion from "../components/Accordion"
import Tab from "../components/Tab"
import TabHeading from "../components/TabHeading"
import TabContent from "../components/TabContent"

export default function FAQ() {
  const data = useStaticQuery(graphql`
    query FAQQuery {
      markdownRemark(
        fields: {
          slug: { eq: "/mindfulness-training/frequently-asked-questions/" }
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
