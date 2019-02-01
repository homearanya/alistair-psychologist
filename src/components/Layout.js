import React from "react";

import "../assets/css/bootstrap.min.css";
import "../assets/css/animations.css";
import "../assets/css/fonts.css";
import "../assets/css/main.css";

import HeaderTop from "./HeaderTop";
import { Header } from "./Header";
// import Footer from "./Footer";
import FooterBottom from "./FooterBottom";
import ScrollUp from "./ScrollUp";

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
          <ScrollUp />
        </div>
      </div>
    </div>
  );
}
