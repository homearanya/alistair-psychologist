import React, { Component } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import NonClickableMenuItem from "./NonClickableMenuItem";

import "./menu.css";
import SubMenu from "./SubMenu";

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

const windowGlobal = typeof window !== "undefined" && window;
const documentElementGlobal =
  typeof document !== "undefined" &&
  document &&
  typeof document.documentElement !== "undefined" &&
  document.documentElement;

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubMenu: false,
      viewPortWidth:
        windowGlobal.innerWidth || documentElementGlobal.clientWidth
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  handleHover = e => {
    e.preventDefault();
    this.setState({ showSubMenu: true });
    this.props.toggleTransform();
  };

  handleLeave = e => {
    e.preventDefault();
    this.setState({ showSubMenu: false });
    this.props.toggleTransform();
  };

  handleClick = e => {
    e.preventDefault();
    this.setState(prevState => {
      return { showSubMenu: !prevState.showSubMenu };
    });
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      viewPortWidth: window.innerWidth || document.documentElement.clientWidth
    });
  }

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
                      onMouseLeave={
                        this.state.viewPortWidth > 991 &&
                        menuItem.subMenu &&
                        menuItem.subMenu.subMenuItems.length > 0
                          ? this.handleLeave
                          : undefined
                      }
                      onMouseEnter={
                        this.state.viewPortWidth > 991 &&
                        menuItem.subMenu &&
                        menuItem.subMenu.subMenuItems.length > 0
                          ? this.handleHover
                          : undefined
                      }
                      onClick={
                        this.state.viewPortWidth < 992 &&
                        menuItem.subMenu &&
                        menuItem.subMenu.subMenuItems.length > 0
                          ? this.handleClick
                          : undefined
                      }
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

                      {this.state.showSubMenu &&
                        menuItem.subMenu &&
                        menuItem.subMenu.subMenuItems.length > 0 && (
                          <SubMenu
                            subMenu={menuItem.subMenu}
                            in={this.state.showSubMenu}
                            isSticky={this.props.isSticky}
                            viewPortWidth={this.state.viewPortWidth}
                            menuHandleClick={this.handleClick}
                          />
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
