import React from "react";
import ScrollToTop from "react-scroll-up";

import "../assets/css/bootstrap.min.css";
import "../assets/css/animations.css";
import "../assets/css/fonts.css";
import "../assets/css/main.css";
import "../assets/css/main.css";
import "../assets/css/scrollUp.css";

import Header from "./Header";
import Footer from "./Footer";
import FooterBottom from "./FooterBottom";

const HeaderTop = props => {
  return (
    <section className="page_topline cs table_section table_section_md columns_padding_0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 text-center divided_content">
            <div>
              <div className="media small-teaser">
                <div className="media-left">
                  <i className="fa fa-user highlight fontsize_16" />
                </div>
                <div className="media-body">0 (800) 337 25 25</div>
              </div>
            </div>

            <div>
              <div className="media small-teaser">
                <div className="media-left">
                  <i className="fa fa-map-marker highlight fontsize_16" />
                </div>
                <div className="media-body">
                  350 Leverton Cove Road Springfield, MA
                </div>
              </div>
            </div>

            <div>
              <div className="media small-teaser">
                <div className="media-left">
                  <i className="fa fa-envelope highlight fontsize_16" />
                </div>
                <div className="media-body">support@psychologist.com</div>
              </div>
            </div>
          </div>

          <div className="col-md-3 text-center text-md-right bottommargin_0">
            <a href="#appointment" className="theme_button color1 margin_0">
              Make an appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Layout({ children }) {
  return (
    <div>
      {/* <div
        className="modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="search_modal"
        id="search_modal"
      >
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">
            <i className="rt-icon2-cross2" />
          </span>
        </button>
        <div className="widget widget_search">
          <form
            method="get"
            className="searchform search-form form-inline"
            action="./"
          >
            <div className="form-group">
              <input
                type="text"
                value=""
                name="search"
                className="form-control"
                placeholder="Search keyword"
                id="modal-search-input"
              />
            </div>
            <button type="submit" className="theme_button">
              Search
            </button>
          </form>
        </div>
      </div>

      <div
        className="modal fade"
        tabindex="-1"
        role="dialog"
        id="messages_modal"
      >
        <div className="fw-messages-wrap ls with_padding" />
      </div>

      <div id="canvas">
        <div id="box_wrapper"> */}
      <HeaderTop />
      <Header />
      {children}
      <Footer />
      <FooterBottom />
      <ScrollToTop style={{ position: "static" }} showUnder={160}>
        <i id="scrollUp" className="fa fa-angle-up" />
      </ScrollToTop>
      {/* </div>
      </div> */}
    </div>
  );
}
