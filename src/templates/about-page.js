import React from "react";
import { graphql } from "gatsby";
import YouTube from "react-youtube";
import styled from "styled-components";

import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";
import Content, { HTMLContent } from "../components/Content";

const YouTubeWrapper = styled.div`
  text-align: center;
`;

const YouTubeContainer = styled.div`
  display: inline-block;
  margin-bottom: 50px;
  @media (min-width: 992px) {
    margin-top: 100px;
    margin-bottom: 0;
  }
`;

export default function({ data }) {
  const AboutContent = HTMLContent || Content;
  //   Prepare breadcrumbs
  const pages = [
    { title: "Home", href: "/" },
    { title: "About Me", href: null }
  ];
  return (
    <Layout>
      <Breadcrumbs pageTitle="About Me" pages={pages} />
      <section className="ls section_padding_100 columns_padding_25">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-push-6">
              <YouTubeWrapper>
                <YouTubeContainer>
                  <YouTube videoId="hQ0NfHQ3moY" />
                </YouTubeContainer>
              </YouTubeWrapper>
            </div>
            <div className="col-md-6 col-md-pull-6">
              <h2 className="section_header">About me</h2>
              <hr className="divider_30_1" />
              <AboutContent content={data.markdownRemark.html} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`;
