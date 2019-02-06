import React, { Component } from "react";
import { Link } from "gatsby";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

import NonClickableMenuItem from "./NonClickableMenuItem";
// import SubMenu from "./SubMenu";

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

export default class SubMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubMenu: false,
      currentWidth: null,
      currentRight: null,
      moveLeft: null,
      subMenu: this.transformSubMenu(this.props.subMenu)
    };
    this.myRef = React.createRef();
    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  transformSubMenu = subMenu => {
    // on mobile menu check if there are linkable menu items which sub menu items.
    // We unlink the menu item and add it to the beginning (unshift) of the sub menu items
    let transformedSubMenu = subMenu;
    if (
      this.props.viewPortWidth < 992 &&
      subMenu &&
      subMenu.subMenuItems.length > 0
    ) {
      transformedSubMenu.subMenuItems.map(subMenuItem => {
        if (
          subMenuItem.link &&
          subMenuItem.subMenu &&
          subMenuItem.subMenu.subMenuItems.length > 0
        ) {
          const newSubMenuItem = {
            name: subMenuItem.name,
            link: subMenuItem.link
          };
          subMenuItem.subMenu.subMenuItems.unshift(newSubMenuItem);
          subMenuItem.link = null;
        }
        return subMenuItem;
      });
    }
    return transformedSubMenu;
  };

  handleHover = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ showSubMenu: true });
    // this.props.toggleTransform();
  };

  handleLeave = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      showSubMenu: false,
      currentWidth: null,
      currentRight: null,
      moveLeft: null
    });
    // this.props.toggleTransform();
  };

  handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState(prevState => {
      return { showSubMenu: !prevState.showSubMenu };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.viewPortWidth < 992) return;
    if (this.state.moveLeft) return;
    if (this.props.in) {
      if (!this.state.currentWidth) {
        let subMenuDimensions;
        if (this.myRef && this.myRef.current) {
          const subMenu = this.myRef.current;
          subMenuDimensions = subMenu.getBoundingClientRect();
          this.setState({
            currentWidth: subMenuDimensions.width,
            currentRight: subMenuDimensions.right
          });
        }
      }
    }
    if (
      this.state.currentWidth &&
      this.state.currentWidth > 0 &&
      this.props.parentWidth &&
      this.props.parentWidth > 0
    ) {
      if (this.state.currentRight > this.props.viewPortWidth) {
        this.setState({ moveLeft: true });
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <CSSTransition
          in={
            this.state.subMenu &&
            this.state.subMenu.subMenuItems.length > 0 &&
            this.props.in
          }
          classNames="fade-dropdown-menu"
          timeout={300}
          unmountOnExit
        >
          <StyledSubMenu
            $isSticky={this.props.isSticky}
            top={this.props.top}
            moveLeft={this.state.moveLeft}
            ref={this.myRef}
          >
            {this.state.subMenu &&
              this.state.subMenu.subMenuItems.map((subMenuItem, index) => (
                <li
                  key={index}
                  onMouseLeave={
                    this.props.viewPortWidth > 991 &&
                    subMenuItem.subMenu &&
                    subMenuItem.subMenu.subMenuItems.length > 0
                      ? this.handleLeave
                      : undefined
                  }
                  onMouseEnter={
                    this.props.viewPortWidth > 991 &&
                    subMenuItem.subMenu &&
                    subMenuItem.subMenu.subMenuItems.length > 0
                      ? this.handleHover
                      : undefined
                  }
                  onClick={
                    this.props.viewPortWidth < 992 &&
                    subMenuItem.subMenu &&
                    subMenuItem.subMenu.subMenuItems.length > 0
                      ? this.handleClick
                      : undefined
                  }
                >
                  {subMenuItem.link ? (
                    <StyledLinkSub
                      to={
                        this.props.viewPortWidth < 992
                          ? subMenuItem.link
                          : undefined
                      }
                      className={subMenuItem.subMenu && "sf-with-ul"}
                      activeClassName="active"
                      onClick={this.props.menuHandleClick}
                    >
                      {subMenuItem.name}
                    </StyledLinkSub>
                  ) : (
                    <StyledNonClickableMenuItem
                      servicePage={this.props.servicePage}
                      className={subMenuItem.subMenu && "sf-with-ul"}
                      $isSticky={this.props.isSticky}
                    >
                      {subMenuItem.name}
                    </StyledNonClickableMenuItem>
                  )}
                  {/* Sub Menu */}
                  {this.state.showSubMenu &&
                    subMenuItem.subMenu &&
                    subMenuItem.subMenu.subMenuItems.length > 0 && (
                      <SubMenu
                        subMenu={subMenuItem.subMenu}
                        in={this.state.showSubMenu}
                        isSticky={this.props.isSticky}
                        top
                        viewPortWidth={this.props.viewPortWidth}
                        parentWidth={this.state.currentWidth}
                        menuHandleClick={this.props.menuHandleClick}
                      />
                    )}
                </li>
              ))}
          </StyledSubMenu>
        </CSSTransition>
      </React.Fragment>
    );
  }
}
