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
      padding: ${props => (props.isSticky ? "25px 0" : "36px 0")};
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
    z-index: 99;
  }

  @media (min-width: 992px) {
    &&& {
      background-color: #ffffff;
      box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
      padding: 10px 0 10px;
      margin-top: ${props => (props.isSticky ? "-2px" : undefined)};
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
    padding: ${props => (props.isSticky ? "25px 0" : "36px 0")};

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
            servicesMenu: markdownRemark(
              fields: { slug: { eq: "/services-menu/" } }
            ) {
              fields {
                menuservices {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                  }
                }
              }
              frontmatter {
                services {
                  service
                }
              }
            }
          }
        `}
        render={data => {
          const { services } = data.servicesMenu.frontmatter;
          const { menuservices } = data.servicesMenu.fields;
          const servicesObject = menuservices.reduce((obj, service) => {
            obj[service.frontmatter.title.trim().toLowerCase()] = service;
            return obj;
          }, {});
          services.forEach((service, index) => {
            if (servicesObject[service.service.trim().toLowerCase()]) {
              services[index]["slug"] =
                servicesObject[
                  service.service.trim().toLowerCase()
                ].fields.slug;
            } else {
              console.log("issue with service:", service.trim().toLowerCase());
            }
          });
          return (
            <div className="col-md-6 text-center">
              <nav className="mainmenu_wrapper">
                <ul className="mainmenu nav sf-menu">
                  <li>
                    <StyledLink
                      to="/"
                      activeClassName="active"
                      isSticky={this.props.isSticky}
                    >
                      Home
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink
                      to="/about/"
                      activeClassName="active"
                      isSticky={this.props.isSticky}
                    >
                      About Me
                    </StyledLink>
                  </li>
                  <li
                    onMouseLeave={this.handleLeave}
                    onMouseEnter={this.handleHover}
                  >
                    <NonClickableItem
                      servicePage={this.props.servicePage}
                      className="withArrow"
                      isSticky={this.props.isSticky}
                    >
                      Services
                    </NonClickableItem>
                    {services && services.length > 0 && (
                      <CSSTransition
                        in={this.state.showSubMenu}
                        classNames="fade-dropdown-menu"
                        timeout={300}
                        unmountOnExit
                      >
                        <StyledSubMenu isSticky={this.props.isSticky}>
                          {services.map((service, index) => (
                            <li key={index}>
                              <StyledLinkSub
                                to={service.slug}
                                activeClassName="active"
                              >
                                {service.service}
                              </StyledLinkSub>
                            </li>
                          ))}
                        </StyledSubMenu>
                      </CSSTransition>
                    )}
                  </li>
                  {/* <li>
                    <StyledLink to="/rates/" activeClassName="active">
                      Rates
                    </StyledLink>
                  </li> */}
                  <li>
                    <StyledLink
                      to="/articles/"
                      activeClassName="active"
                      isSticky={this.props.isSticky}
                    >
                      Articles
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink
                      to="/contact/"
                      activeClassName="active"
                      isSticky={this.props.isSticky}
                    >
                      Contact
                    </StyledLink>
                  </li>
                </ul>
              </nav>
            </div>
          );
        }}
      />
    );
  }
}
