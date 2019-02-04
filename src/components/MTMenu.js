import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

export default function MTMenu() {
  <StaticQuery
    query={graphql`
      query MenuQuery {
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
            {menuItems.map((menuItem, index) => (
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
  />;
}
