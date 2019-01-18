import React from "react";

import "../../assets/css/headerTop.css";
import { StaticQuery, graphql } from "gatsby";

export function HeaderTop() {
  return (
    <StaticQuery
      query={graphql`
        query ContactDetailsQuery {
          file(relativePath: { eq: "contact.md" }) {
            childMarkdownRemark {
              frontmatter {
                contact_details {
                  address
                  email
                  phone {
                    phonedisplay
                    phonenumber
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { contact_details } = data.file.childMarkdownRemark.frontmatter;
        return (
          <section className="page_topline cs table_section table_section_md columns_padding_0">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 text-center divided_content">
                  <a href={`tel:${contact_details.phone.phonenumber}`}>
                    <div className="media small-teaser">
                      <div className="media-left">
                        <i className="fa fa-user highlight fontsize_16" />
                      </div>
                      <div className="media-body">
                        {contact_details.phone.phonedisplay}
                      </div>
                    </div>
                  </a>
                  <a
                    href={`https://maps.google.com/?q=${
                      contact_details.address
                    }`}
                    target="_blank"
                  >
                    <div className="media small-teaser">
                      <div className="media-left">
                        <i className="fa fa-map-marker highlight fontsize_16" />
                      </div>
                      <div className="media-body">
                        {contact_details.address}
                      </div>
                    </div>
                  </a>
                  <a href={`mailto:${contact_details.email}`}>
                    <div className="media small-teaser">
                      <div className="media-left">
                        <i className="fa fa-envelope highlight fontsize_16" />
                      </div>
                      <div className="media-body">{contact_details.email}</div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 text-center text-md-right bottommargin_0">
                  <a
                    href="#appointment"
                    className="theme_button color1 margin_0"
                  >
                    Make an appointment
                  </a>
                </div>
              </div>
            </div>
          </section>
        );
      }}
    />
  );
}
