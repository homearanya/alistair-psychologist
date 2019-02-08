import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";

import "../assets/css/bootstrap.min.css";
import "../assets/css/animations.css";
// import "../assets/css/fonts.css";
import "../assets/css/main.css";

import HeaderTop from "./HeaderTop";
import { Header } from "./Header";
// import Footer from "./Footer";
import FooterBottom from "./FooterBottom";
import ScrollUp from "./ScrollUp";

export default function Layout(props) {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          SiteMetaDataQuery: site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => {
        const siteTitle = data.SiteMetaDataQuery.siteMetadata.title;
        const titleTemplate = `%s · ${siteTitle}`;
        return (
          <React.Fragment>
            <Helmet
              key="app-head"
              titleTemplate={titleTemplate}
              defaultTitle={siteTitle}
            >
              <html lang="en" />

              <meta charSet="utf-8" />
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />
              {/* google search console */}
              {/* <meta
                name="google-site-verification"
                content="5Fs1mwvNeUdz1y6CfK5miXOOFUra094G_nhpRiVyXXQ"
              /> */}
              {/* Font Awesome */}
              <script
                defer
                src="https://use.fontawesome.com/releases/v5.7.1/js/all.js"
                integrity="sha384-eVEQC9zshBn0rFj4+TU78eNA19HMNigMviK/PU/FFjLXqa/GKPgX58rvt5Z8PLs7"
                crossorigin="anonymous"
              />
            </Helmet>

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
          </React.Fragment>
        );
      }}
    />
  );
}
