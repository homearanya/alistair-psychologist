import React from "react";

import Social from "./Social";
import ContactDetails from "./ContactDetails";

import "../assets/css/headerTop.css";

export default function HeaderTop() {
  return (
    <section className="page_topline cs table_section table_section_md columns_padding_0">
      <div className="container-fluid">
        <div className="row">
          <ContactDetails />
          <Social
            classes="text-center visible-xs visible-sm"
            inputColor="#4bb0a9"
          />

          <div className="col-md-3 text-center text-md-right bottommargin_0">
            <a href="#appointment" className="theme_button color1 margin_0">
              Make an appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
