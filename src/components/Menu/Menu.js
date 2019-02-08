import React, { Component } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import NonClickableMenuItem from "./NonClickableMenuItem";

import "./menu.css";

import { transformSubMenu } from "../helpers";
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
      showSubMenu: [],
      viewPortWidth:
        windowGlobal.innerWidth || documentElementGlobal.clientWidth
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.hideSubMenu = this.hideSubMenu.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  handleHover = (depthLevel, index) => {
    let updatedArray = this.state.showSubMenu.slice(0);
    updatedArray.push(index);
    this.setState({ showSubMenu: updatedArray });
    if (depthLevel === 0) {
      this.props.toggleTransform();
    }
  };

  handleLeave = depthLevel => {
    let updatedArray = this.state.showSubMenu.slice(0);
    updatedArray = updatedArray.slice(0, depthLevel);
    this.setState({ showSubMenu: updatedArray });
    if (depthLevel === 0) {
      this.props.toggleTransform();
    }
  };

  handleClick = (e, depthLevel, index) => {
    e.stopPropagation();
    let updatedArray = this.state.showSubMenu.slice(0);
    if (updatedArray[depthLevel]) {
      updatedArray = updatedArray.slice(0, depthLevel);
    } else {
      updatedArray.push(index);
    }
    this.setState({ showSubMenu: updatedArray });
  };

  hideSubMenu = e => {
    e.stopPropagation();
    this.setState({ showSubMenu: [] });
    if (this.props.toggleMenu) {
      this.props.handleToggleMenu();
    }
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
          query NewMenuQuery {
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
          const { menuItems: tempMenuItems } = data.markdownRemark.frontmatter;
          const menuItems = transformSubMenu(
            tempMenuItems,
            this.state.viewPortWidth
          );
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
                          ? () => this.handleLeave(0)
                          : undefined
                      }
                      onMouseEnter={
                        this.state.viewPortWidth > 991 &&
                        menuItem.subMenu &&
                        menuItem.subMenu.subMenuItems.length > 0
                          ? () => this.handleHover(0, index)
                          : undefined
                      }
                      onClick={
                        this.state.viewPortWidth < 992 &&
                        menuItem.subMenu &&
                        menuItem.subMenu.subMenuItems.length > 0
                          ? e => this.handleClick(e, 0, index)
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

                      {this.state.showSubMenu[0] === index &&
                        menuItem.subMenu &&
                        menuItem.subMenu.subMenuItems.length > 0 && (
                          <SubMenu
                            depthLevel={0}
                            subMenu={menuItem.subMenu}
                            isSticky={this.props.isSticky}
                            showSubMenu={this.state.showSubMenu}
                            viewPortWidth={this.state.viewPortWidth}
                            handleHover={this.handleHover}
                            handleLeave={this.handleLeave}
                            handleClick={this.handleClick}
                            hideSubMenu={this.hideSubMenu}
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
