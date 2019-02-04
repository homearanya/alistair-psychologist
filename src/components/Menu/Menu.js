import React, { Component } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

import "./menu.css";

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

const StyledLinkSub = styled(Link)`
  a + li a {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  :hover,
  &&&.active {
    color: #91d0cc;
  }
`;

const StyledSubMenu = styled.ul`
  &&& {
    text-align: center;
    list-style: none;
    margin: -5px 0 0 0;
    padding: 0 0 0 10px;
    min-width: 220px;
    opacity: 1;
    display: block;
    top: 100%;
  }

  @media (min-width: 992px) {
    &&& {
      background-color: #ffffff;
      box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
      padding: 10px 0 10px;
      margin-top: ${props => (props.$isSticky ? undefined : undefined)};
      position: absolute;
    }
  }
`;
const NonClickableItem = styled.button`
  display: block;
  background: none;
  border: none;
  padding: 10px 3.5em 10px 15px;
  margin: 0;
  text-decoration: none;
  color: ${props => (props.servicePage ? "#91d0cc" : "white")};
  font-family: "Playfair Display", serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  cursor: auto;
  text-align: left;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;

  :hover,
  :focus {
    background: none;
    color: #91d0cc;
  }

  &.withArrow::after {
    font-family: "FontAwesome";
    content: "\f107";
    position: absolute;
    right: 2em;
    height: 0;
    width: 0;
    font-size: 20px;
  }
  @media (min-width: 992px) {
    color: ${props => (props.servicePage ? "#91d0cc" : "#444444")};
    margin: 0 15px;
    padding: ${props => (props.$isSticky ? "25px 0" : "25px 0")};

    &.withArrow::after {
      content: none;
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
                <ul className="mainmenu nav sf-menu">
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
                        <NonClickableItem
                          servicePage={this.props.servicePage}
                          className="withArrow"
                          $isSticky={this.props.isSticky}
                        >
                          {menuItem.name}
                        </NonClickableItem>
                      )}
                      {menuItem.subMenu && (
                        <CSSTransition
                          in={this.state.showSubMenu}
                          classNames="fade-dropdown-menu"
                          timeout={300}
                          unmountOnExit
                        >
                          <StyledSubMenu $isSticky={this.props.isSticky}>
                            {menuItem.subMenu.subMenuItems.map(
                              (subMenuItem, index) => (
                                <li key={index}>
                                  <StyledLinkSub
                                    to={subMenuItem.link}
                                    activeClassName="active"
                                  >
                                    {subMenuItem.name}
                                  </StyledLinkSub>
                                </li>
                              )
                            )}
                          </StyledSubMenu>
                        </CSSTransition>
                      )}
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
