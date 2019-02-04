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
      moveLeft: null
    };
    this.myRef = React.createRef();
    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleHover = () => {
    this.setState({ showSubMenu: true });
    // this.props.toggleTransform();
  };

  handleLeave = () => {
    this.setState({
      showSubMenu: false,
      currentWidth: null,
      currentRight: null,
      moveLeft: null
    });
    // this.props.toggleTransform();
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.moveLeft) return;
    if (this.props.in && !prevProps.in) {
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
    } else {
      if (
        this.state.currentWidth &&
        this.state.currentWidth > 0 &&
        this.props.parentWidth &&
        this.props.parentWidth > 0 &&
        (this.props != prevProps || this.state != prevState)
      ) {
        const viewportWidth =
          window.innerWidth || document.documentElement.clientWidth;
        if (this.state.currentRight > viewportWidth) {
          this.setState({ moveLeft: true });
        }
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.props.subMenu && (
          <CSSTransition
            in={this.props.in}
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
              {this.props.subMenu &&
                this.props.subMenu.subMenuItems.map((subMenuItem, index) => (
                  <li
                    key={index}
                    onMouseLeave={subMenuItem.subMenu && this.handleLeave}
                    onMouseEnter={subMenuItem.subMenu && this.handleHover}
                  >
                    {subMenuItem.link ? (
                      <StyledLinkSub
                        to={subMenuItem.link}
                        className={subMenuItem.subMenu && "sf-with-ul"}
                        activeClassName="active"
                      >
                        {subMenuItem.name}
                      </StyledLinkSub>
                    ) : (
                      <NonClickableMenuItem
                        servicePage={this.props.servicePage}
                        className={subMenuItem.subMenu && "sf-with-ul"}
                        $isSticky={this.props.isSticky}
                      >
                        {subMenuItem.name}
                      </NonClickableMenuItem>
                    )}
                    {/* Sub Menu */}
                    <SubMenu
                      subMenu={subMenuItem.subMenu}
                      in={this.state.showSubMenu}
                      isSticky={this.props.isSticky}
                      top
                      parentWidth={this.state.currentWidth}
                    />
                  </li>
                ))}
            </StyledSubMenu>
          </CSSTransition>
        )}
      </React.Fragment>
    );
  }
}
