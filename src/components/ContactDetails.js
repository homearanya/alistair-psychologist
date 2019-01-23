import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const AElement = styled.a`
  && {
    :hover {
      color: #4bb0a9;
    }
  }
`;
const IElement = styled.i`
  && {
    ${AElement}:hover & {
      color: #4bb0a9;
      transition: all 0.2s ease-in-out 0s;
    }
  }
`;

export default function ContactDetails() {
  return (
    <StaticQuery
      query={graphql`
        query ContactDetailsQuery {
          file(relativePath: { eq: "contact-details.md" }) {
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
          <div className="col-md-6 text-center divided_content">
            <AElement href={`tel:${contact_details.phone.phonenumber}`}>
              <div className="media small-teaser">
                <div className="media-left">
                  <IElement className="fa fa-user highlight fontsize_16" />
                </div>
                <div className="media-body">
                  {contact_details.phone.phonedisplay}
                </div>
              </div>
            </AElement>
            <AElement
              href={`https://maps.google.com/?q=${contact_details.address}`}
              target="_blank"
            >
              <div className="media small-teaser">
                <div className="media-left">
                  <IElement className="fa fa-map-marker highlight fontsize_16" />
                </div>
                <div className="media-body">{contact_details.address}</div>
              </div>
            </AElement>
            <AElement href={`mailto:${contact_details.email}`}>
              <div className="media small-teaser">
                <div className="media-left">
                  <IElement className="fa fa-envelope highlight fontsize_16" />
                </div>
                <div className="media-body">{contact_details.email}</div>
              </div>
            </AElement>
          </div>
        );
      }}
    />
  );
}
