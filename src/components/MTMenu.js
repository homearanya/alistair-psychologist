import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

export default function MTMenu() {
  return (
    <StaticQuery
      query={graphql`
        query MindfulnessTrainingMenuQuery {
          markdownRemark(
            fields: { slug: { eq: "/mindfulness-training-menu/" } }
          ) {
            frontmatter {
              menuItems {
                link
                name
              }
            }
          }
        }
      `}
      render={data => {
        const { menuItems } = data.markdownRemark.frontmatter;

        return (
          <div className="col-sm-5">
            <ul className="nav" role="menu">
              {menuItems &&
                menuItems.map((menuItem, index) => (
                  <li key={index}>
                    <Link to={menuItem.link} activeClassName="active">
                      {menuItem.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        );
      }}
    />
  );
}
