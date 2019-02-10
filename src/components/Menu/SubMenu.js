import React, { Component } from "react";
import { Link } from "gatsby";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

import NonClickableMenuItem from "./NonClickableMenuItem";

import { transformSubMenu } from "../helpers";

const StyledLinkSub = styled(Link)`
  a + li a {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  :hover,
  &&&.active {
    color: #91d0cc;
  }
`;

const StyledNonClickableMenuItem = styled(NonClickableMenuItem)`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 16px;
  font-weight: 300;
  padding: 10px;

  ::before {
    content: "-";
    padding-right: 5px;
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
      top: ${props => (props.top ? "0" : undefined)};
      left: ${props => (props.moveLeft ? "auto" : undefined)};
      right: ${props => (props.moveLeft ? "100%" : undefined)};
    }
  }
`;

export class SubMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { moveLeft: false };
    this.subMenuRef = React.createRef();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.viewPortWidth < 992) return;
    if (this.state.moveLeft) return;
    if (this.subMenuRef && this.subMenuRef.current) {
      const subMenu = this.subMenuRef.current;
      const subMenuDimensions = subMenu.getBoundingClientRect();
      if (subMenuDimensions.right > this.props.viewPortWidth) {
        this.setState({ moveLeft: true });
      }
    }
  }
  render() {
    const subMenuItems = this.props.subMenu
      ? transformSubMenu(
          this.props.subMenu.subMenuItems,
          this.props.viewPortWidth
        )
      : null;
    return (
      <React.Fragment>
        <CSSTransition
          in={true}
          classNames="fade-dropdown-menu"
          timeout={300}
          unmountOnExit
        >
          <StyledSubMenu
            $isSticky={this.props.isSticky}
            top={this.props.top}
            moveLeft={this.props.moveLeft}
            ref={this.props.passedRef}
          >
            {subMenuItems &&
              subMenuItems.map((subMenuItem, index) => {
                return (
                  <li
                    key={index}
                    onMouseLeave={
                      this.props.viewPortWidth > 991 &&
                      subMenuItem.subMenu &&
                      subMenuItem.subMenu.subMenuItems.length > 0
                        ? () =>
                            this.props.handleLeave(this.props.depthLevel + 1)
                        : undefined
                    }
                    onMouseEnter={
                      this.props.viewPortWidth > 991 &&
                      subMenuItem.subMenu &&
                      subMenuItem.subMenu.subMenuItems.length > 0
                        ? () =>
                            this.props.handleHover(
                              this.props.depthLevel + 1,
                              index
                            )
                        : undefined
                    }
                    onClick={
                      this.props.viewPortWidth < 992 &&
                      subMenuItem.subMenu &&
                      subMenuItem.subMenu.subMenuItems.length > 0
                        ? e =>
                            this.props.handleClick(
                              e,
                              this.props.depthLevel + 1,
                              index
                            )
                        : undefined
                    }
                  >
                    {subMenuItem.link ? (
                      <StyledLinkSub
                        to={subMenuItem.link}
                        activeClassName="active"
                        onClick={this.props.hideSubMenu}
                      >
                        {subMenuItem.name}
                        {subMenuItem.subMenu ? (
                          <i className="fas fa-angle-down" />
                        ) : null}
                      </StyledLinkSub>
                    ) : (
                      <StyledNonClickableMenuItem
                        servicePage={this.props.servicePage}
                        $isSticky={this.props.isSticky}
                      >
                        {subMenuItem.name}
                        {subMenuItem.subMenu ? (
                          <i className="fas fa-angle-down" />
                        ) : null}
                      </StyledNonClickableMenuItem>
                    )}
                    {/* Sub Menu */}
                    {this.props.showSubMenu[this.props.depthLevel + 1] ===
                      index &&
                      subMenuItem.subMenu &&
                      subMenuItem.subMenu.subMenuItems.length > 0 && (
                        <SubMenu
                          passedRef={this.subMenuRef}
                          depthLevel={this.props.depthLevel + 1}
                          subMenu={subMenuItem.subMenu}
                          isSticky={this.props.isSticky}
                          showSubMenu={this.props.showSubMenu}
                          viewPortWidth={this.props.viewPortWidth}
                          handleHover={this.props.handleHover}
                          handleLeave={this.props.handleLeave}
                          handleClick={this.props.handleClick}
                          hideSubMenu={this.props.hideSubMenu}
                          r
                          top
                          moveLeft={this.state.moveLeft}
                        />
                      )}
                  </li>
                );
              })}
          </StyledSubMenu>
        </CSSTransition>
      </React.Fragment>
    );
  }
}

export default SubMenu;
