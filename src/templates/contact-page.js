import React from "react";
import { graphql } from "gatsby";
import Zoom from "react-reveal/Zoom";

import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";
import { ContactForm } from "../components/ContactForm";
import ContactDetails2 from "../components/ContactDetails2";

export default () => {
  return (
    <Layout>
      <Breadcrumbs />
      <Zoom>
        <section className="ls columns_padding_25 section_padding_top_100 section_padding_bottom_100">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h3 className="module-header">Contact Form</h3>
                <ContactForm className="contact-form row columns_margin_bottom_40" />
              </div>

              <div className="col-md-4">
                <ContactDetails2 />
              </div>
            </div>
          </div>
        </section>
      </Zoom>
    </Layout>
  );
};
