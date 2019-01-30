import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";
import Content, { HTMLContent } from "../components/Content";

export default function({ data }) {
  const ServiceContent = HTMLContent || Content;
  //   Prepare breadcrumbs
  const pages = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/#services" },
    { title: "Service", href: null }
  ];
  return (
    <Layout>
      <Breadcrumbs pageTitle="Service" pages={pages} />
      <section className="ls section_padding_top_130 section_padding_bottom_130">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-lg-push-8 col-sm-5 col-sm-push-7">
              <img src="images/service.jpg" alt="" />
            </div>
            <div className="col-lg-8 col-lg-pull-4 col-sm-7 col-sm-pull-5">
              <h2 className="section_header small">Relationship</h2>
              <hr className="divider_30_1" />>
              <p>
                Sausage andouille turkey ham hock, cow shankle doner fatback
                pork spare ribs flank turducken. Ball tip shoulder burgdoggen
                chuck picanha flank chicken filet mignon biltong pastrami
                sausage.
              </p>
              <p>
                Shankle venison tri-tip leberkas filet mignon ham hock meatball
                beef ribs alcatra. Beef sausage landjaeger tenderloin ball tip.
                Brisket rump bresaola beef chuck, andouille swine. Tenderloin
                ham hock pastrami ground round.
              </p>
              <ul className="list2 grey">
                <li>Eaque blanditiis nemo</li>
                <li>Amet, consectetur adipisicing</li>
                <li>Blanditiis nemo quaerat</li>
                <li>Blanditiis nemo quaerat</li>
              </ul>
              <p>
                T-bone chicken beef ribs, jowl tri-tip sirloin shankle. Doner
                rump porchetta boudin tail biltong ham ribeye pancetta. Fatback
                pork chop burgdoggen pork. Tenderloin cow venison pork picanha
                biltong bresaola flank tongue chuck.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const servicePageQuery = graphql`
  query ServicePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`;
