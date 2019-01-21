import React from "react";

import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import Social from "./Social";

import "../assets/css/header.css";

export default function Header() {
  return (
    <header className="page_header header_white table_section columns_padding_0 toggler-sm-right">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <a href="./" className="logo">
              Psychologist
            </a>
            <MenuMobile />
          </div>
          <MenuDesktop />
          <Social
            classes="text-right hidden-xs hidden-sm"
            inputColor="#91d0cc"
          />
        </div>
      </div>
    </header>
  );
}
