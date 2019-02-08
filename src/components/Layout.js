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
              <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.7.1/css/solid.css"
                integrity="sha384-r/k8YTFqmlOaqRkZuSiE9trsrDXkh07mRaoGBMoDcmA58OHILZPsk29i2BsFng1B"
                crossorigin="anonymous"
              />
              <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.7.1/css/brands.css"
                integrity="sha384-BKw0P+CQz9xmby+uplDwp82Py8x1xtYPK3ORn/ZSoe6Dk3ETP59WCDnX+fI1XCKK"
                crossorigin="anonymous"
              />
              <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.7.1/css/fontawesome.css"
                integrity="sha384-4aon80D8rXCGx9ayDt85LbyUHeMWd3UiBaWliBlJ53yzm9hqN21A+o1pqoyK04h+"
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
