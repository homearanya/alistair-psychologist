import React from "react";
import { graphql } from "gatsby";
import Zoom from "react-reveal/Zoom";

import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";
import { ContactForm } from "../components/ContactForm";
import ContactDetails2 from "../components/ContactDetails2";

export default ({ data }) => {
  // const { frontmatter } = data.CPageQuery;

  return (
    <Layout>
      <Breadcrumbs />

      {/* <section id="map" className="ls" data-address="sydney, australia, Liverpool street">
				<div className="map_marker_description">
					<h3>Map Title</h3>
					<p>Map description text</p>
					<img className="map_marker_icon" src="images/map_marker_icon.png" alt=""/>
				</div>
			</section> */}

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

// export const homePageQuery = graphql`
//   query HomePage($id: String!) {
//     homePageQuery: markdownRemark(id: { eq: $id }) {
//       fields {
//         slug
//       }
//       frontmatter {
//         slider {
//           heading1
//           heading2
//           subheading
//           image {
//             alt
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 1920, maxHeight: 850) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//         servicesArea {
//           heading
//           blurb
//           services {
//             heading
//             blurb
//             serviceIcon {
//               alt
//               image {
//                 childImageSharp {
//                   fluid(maxWidth: 80) {
//                     ...GatsbyImageSharpFluid
//                   }
//                 }
//               }
//             }
//           }
//         }
//         aboutMeArea {
//           heading1
//           heading2
//           blurb {
//             paragraphs {
//               paragraph
//             }
//           }
//           personPicture {
//             alt
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 786) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//         articlesArea {
//           heading
//           blurb
//         }
//         testimonialsArea {
//           testimonials {
//             quote
//             author
//           }
//         }
//       }
//     }
//   }
// `;
