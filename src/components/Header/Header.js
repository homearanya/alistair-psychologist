import React, { Component } from "react";
import Sticky from "react-sticky-el";

import Logo from "../Logo";
import { Menu } from "../Menu";
import Social from "../Social";

import "./header.css";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { togleMenu: false, sticky: false };
    this.togleMenu = this.togleMenu.bind(this);
    this.onFixedToggle = this.onFixedToggle.bind(this);
  }

  togleMenu() {
    this.setState(prevState => {
      return { togleMenu: !prevState.togleMenu };
    });
  }

  onFixedToggle() {
    let isSticky = !this.state.sticky;
    this.setState({ sticky: isSticky });
  }

  render() {
    let headerClassName =
      "page_header header_white table_section columns_padding_0 toggler-sm-right";
    let menuTogleClassName = "toggle_menu visible-xs visible-sm";
    let stickyStyle = {};
    stickyStyle.zIndex = 99;
    if (this.state.togleMenu) {
      headerClassName += " mobile-active";
      menuTogleClassName += " mobile-active";
      stickyStyle.transform = "none";
    }

    if (this.state.sticky) {
      headerClassName += " sticky-menu";
    }

    return (
      <Sticky onFixedToggle={this.onFixedToggle} style={stickyStyle}>
        <header className={headerClassName}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <Logo
                  isSticky={this.state.sticky}
                  togleMenu={this.state.togleMenu}
                />
                <span className={menuTogleClassName} onClick={this.togleMenu}>
                  <span />
                </span>
              </div>
              <Menu sticky={this.state.sticky} />
              <Social
                classes="text-right hidden-xs hidden-sm"
                inputColor="#91d0cc"
              />
            </div>
          </div>
        </header>
      </Sticky>
    );
  }
}
