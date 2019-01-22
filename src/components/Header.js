import React, { Component } from "react";
import styled from "styled-components";

import Menu from "./Menu";
import Social from "./Social";

import "../assets/css/header.css";

import logo from "../assets/images/logo.png";

const Logo = styled.div`
  height: 80px;
  width: auto;
`;

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { togleMenu: false };
    this.togleMenu = this.togleMenu.bind(this);
  }

  togleMenu() {
    this.setState(prevState => {
      return { togleMenu: !prevState.togleMenu };
    });
  }

  render() {
    let headerClassName =
      "page_header header_white table_section columns_padding_0 toggler-sm-right";
    let menuTogleClassName = "toggle_menu visible-xs visible-sm";
    if (this.state.togleMenu) {
      headerClassName += " mobile-active";
      menuTogleClassName += " mobile-active";
    }
    return (
      <header className={headerClassName}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <a href="./" className="logo">
                <Logo>
                  <img src={logo} alt={logo} />
                </Logo>
              </a>
              <span className={menuTogleClassName} onClick={this.togleMenu}>
                <span />
              </span>
            </div>
            <Menu />
            <Social
              classes="text-right hidden-xs hidden-sm"
              inputColor="#91d0cc"
            />
          </div>
        </div>
      </header>
    );
  }
}
