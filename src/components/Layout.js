import React from "react";
import ScrollToTop from "react-scroll-up";
import styled from "styled-components";

import "../assets/css/bootstrap.min.css";
import "../assets/css/animations.css";
import "../assets/css/fonts.css";
import "../assets/css/main.css";
import "../assets/css/main.css";
import "../assets/css/scrollUp.css";

import HeaderTop from "./HeaderTop";
import { Header } from "./Header";
import Footer from "./Footer";
import FooterBottom from "./FooterBottom";

const IStyled = styled.i`
  background: rgba(145, 208, 204, 0.7) none repeat scroll 0 0;
  bottom: 45px;
  color: #ffffff;
  cursor: pointer;
  display: block;
  font-size: 28px;
  height: 45px;
  line-height: 40px;
  position: fixed;
  right: 12px;
  text-align: center;
  width: 45px;
  z-index: 9999;

  :hover {
    background-color: #91d0cc;
  }
`;

export default function Layout(props) {
  return (
    <div>
      <div id="canvas">
        <div id="box_wrapper">
          <HeaderTop appointmentButton={props.appointmentButton} />
          <Header servicePage={props.servicePage} />
          {props.children}
          {/* <Footer /> */}
          <FooterBottom />
          <ScrollToTop style={{ position: "static" }} showUnder={160}>
            <IStyled className="fa fa-angle-up" />
          </ScrollToTop>
        </div>
      </div>
    </div>
  );
}
