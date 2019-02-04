import React, { Component } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import "./menu.css";
import SubMenu from "./SubMenu";
import NonClickableMenuItem from "./NonClickableMenuItem";

const StyledLink = styled(Link)`
  margin: 0;

  :hover,
  &&&.active {
    color: #91d0cc;
  }

  @media (min-width: 992px) {
    &&& {
      padding: ${props => (props.$isSticky ? "25px 0" : "25px 0")};
      margin: 0 15px;
    }
  }
`;

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubMenu: false
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleHover = () => {
    this.setState({ showSubMenu: true });
    this.props.toggleTransform();
  };

  handleLeave = () => {
    this.setState({ showSubMenu: false });
    this.props.toggleTransform();
  };

  render() {
    return (
      <StaticQuery
        query={graphql`
          query MenuQuery {
            markdownRemark(fields: { slug: { eq: "/main-menu/" } }) {
              frontmatter {
                menuItems {
                  link
                  name
                  subMenu {
                    subMenuItems {
                      link
                      name
                      subMenu {
                        subMenuItems {
                          link
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const { menuItems } = data.markdownRemark.frontmatter;
          return (
            <div className="col-md-6 text-center">
              <nav className="mainmenu_wrapper">
                <ul className="mainmenu nav sf-menu sf-arrows">
                  {menuItems.map((menuItem, index) => (
                    <li
                      key={index}
                      onMouseLeave={menuItem.subMenu && this.handleLeave}
                      onMouseEnter={menuItem.subMenu && this.handleHover}
                    >
                      {menuItem.link ? (
                        <StyledLink
                          to={menuItem.link}
                          activeClassName="active"
                          $isSticky={this.props.isSticky}
                        >
                          {menuItem.name}
                        </StyledLink>
                      ) : (
                        <NonClickableMenuItem
                          servicePage={this.props.servicePage}
                          className="withArrow"
                          $isSticky={this.props.isSticky}
                        >
                          {menuItem.name}
                        </NonClickableMenuItem>
                      )}
                      {/* Sub Menu */}

                      <SubMenu
                        subMenu={menuItem.subMenu}
                        in={this.state.showSubMenu}
                        isSticky={this.props.isSticky}
                      />
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          );
        }}
      />
    );
  }
}
