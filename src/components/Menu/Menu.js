import React, { Component } from "react";
import { Link } from "gatsby";
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
    margin: 0 15px;
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
    margin: 5px 0 0 0;
    padding: 0 0 0 10px;
    min-width: 220px;
    opacity: 1;
    display: block;
    top: 100%;
    z-index: 1000;
  }

  @media (min-width: 992px) {
    &&& {
      background-color: #ffffff;
      box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
      padding: 10px 0 10px;
      margin-top: ${props => props.sticky && "-2px"};
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
    padding: 25px 0;

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
  };

  handleLeave = () => {
    this.setState({ showSubMenu: false });
  };

  render() {
    return (
      <div className="col-md-6 text-center">
        <nav className="mainmenu_wrapper">
          <ul className="mainmenu nav sf-menu">
            <li>
              <StyledLink to="/" activeClassName="active">
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/about/" activeClassName="active">
                About Me
              </StyledLink>
            </li>
            <li onMouseLeave={this.handleLeave} onMouseEnter={this.handleHover}>
              <NonClickableItem
                servicePage={this.props.servicePage}
                className="withArrow"
              >
                Services
              </NonClickableItem>
              <CSSTransition
                in={this.state.showSubMenu}
                classNames="fade-dropdown-menu"
                timeout={300}
                unmountOnExit
              >
                <StyledSubMenu sticky={this.props.sticky}>
                  <li>
                    <StyledLinkSub to="/services1/" activeClassName="active">
                      Service 1
                    </StyledLinkSub>
                  </li>
                  <li>
                    <StyledLinkSub to="/services1/" activeClassName="active">
                      Service 2
                    </StyledLinkSub>
                  </li>
                </StyledSubMenu>
              </CSSTransition>
            </li>
            {/* <li>
            <StyledLink to="/rates/" activeClassName="active">
              Rates
            </StyledLink>
          </li> */}
            <li>
              <StyledLink to="/articles/" activeClassName="active">
                Articles
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/contact/" activeClassName="active">
                Contact
              </StyledLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
