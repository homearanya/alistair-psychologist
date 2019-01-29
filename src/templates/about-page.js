import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";

export default function() {
  return (
    <Layout>
      <Breadcrumbs />
      <section className="ls section_padding_100 columns_padding_25">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-push-6">
              <img src="images/about.jpg" alt="" />
            </div>
            <div className="col-md-6 col-md-pull-6">
              <h2 className="section_header">About us</h2>
              <hr className="divider_30_1" />
              <p>
                Ribeye pork chop spare ribs, short loin cupim shoulder beef ribs
                pig shank corned beef boudin fatback ham. Biltong sausage short
                ribs fatback turducken frankfurter swine chicken. Capicola
                brisket venison picanha fatback pastrami, short ribs sirloin
              </p>
              <p>
                Corned beef boudin landjaeger prosciutto kielbasa. Prosciutto
                brisket drumstick sausage pork chop landjaeger corne beef chuck
                filet mignon ham hock fatback.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
