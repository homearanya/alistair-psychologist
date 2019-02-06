import React from "react";

import { ContactForm } from "./ContactForm";

import "../assets/css/appointmentArea.css";

export default function AppointmentArea(props) {
  let sectionClassName;
  props.noTopPadding
    ? (sectionClassName = "ls section_padding_bottom_100")
    : (sectionClassName =
        "ls section_padding_top_130 section_padding_bottom_100");
  return (
    <section id="appointment" className={sectionClassName}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
            <h2 className="section_header with_icon highlight">
              {props.appointmentArea.heading}
            </h2>
            <div className="fontsize_16">{props.appointmentArea.blurb}</div>
            <ContactForm className="contact-form row columns_margin_bottom_40 topmargin_60" />
          </div>
        </div>
      </div>
    </section>
  );
}
