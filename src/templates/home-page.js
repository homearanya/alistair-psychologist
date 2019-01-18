import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SliderArea from "../components/SliderArea";
import ServicesArea from "../components/ServicesArea";
import AboutArea from "../components/AboutArea";
import BlogArea from "../components/BlogArea";
import TestimonialsArea from "../components/TestimonialsArea";
import FaqArea from "../components/FaqArea";
import PricesArea from "../components/PricesArea";
import AppointmentArea from "../components/AppointmentArea";

export default () => (
  <Layout>
    <SliderArea />
    <ServicesArea />
    <AboutArea />
    <BlogArea />
    <TestimonialsArea />
    {/* <FaqArea />
    <PricesArea /> */}
    <AppointmentArea />
  </Layout>
);

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    homePageQuery: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
    }
  }
`;
