import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

export default ({ data }) => {
  // const { frontmatter } = data.CPageQuery;

  return (<Layout>
    <section className="page_breadcrumbs ds background_cover section_padding_50">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 text-center">
							<h2>Contact</h2>
							<ol className="breadcrumb divided_content wide_divider">
								<li>
									<a href="./">
										Home
									</a>
								</li>
								<li>
									<a href="#">Pages</a>
								</li>
								<li className="active">Contact</li>
							</ol>
						</div>
					</div>
				</div>
			</section>

			<section id="map" className="ls" data-address="sydney, australia, Liverpool street">
				<div className="map_marker_description">
					<h3>Map Title</h3>
					<p>Map description text</p>
					<img className="map_marker_icon" src="images/map_marker_icon.png" alt=""/>
				</div>
			</section>

			<section className="ls columns_padding_25 section_padding_top_100 section_padding_bottom_100">
				<div className="container">
					<div className="row">

						<div className="col-md-8 to_animate" data-animation="scaleAppear">

							<h3 className="module-header">Contact Form</h3>

							<form className="contact-form row columns_margin_bottom_40" method="post" action="./">


								<div className="col-sm-6">
									<div className="contact-form-name">
										<label for="name">Your Name
											<span className="required">*</span>
										</label>
										<input type="text" aria-required="true" size="30" value="" name="name" id="name" className="form-control" placeholder="Your Name"/>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="contact-form-email">
										<label for="email">Email address
											<span className="required">*</span>
										</label>
										<input type="email" aria-required="true" size="30" value="" name="email" id="email" className="form-control" placeholder="Email Address"/>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="contact-form-subject">
										<label for="subject">Subject
											<span className="required">*</span>
										</label>
										<input type="text" aria-required="true" size="30" value="" name="subject" id="subject" className="form-control" placeholder="Subject"/>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="contact-form-phone">
										<label for="phone">Phone
											<span className="required">*</span>
										</label>
										<input type="text" aria-required="true" size="30" value="" name="phone" id="phone" className="form-control" placeholder="Phone"/>
									</div>
								</div>
								<div className="col-sm-12">

									<div className="contact-form-message">
										<label for="message">Message</label>
										<textarea aria-required="true" rows="1" cols="45" name="message" id="message" className="form-control" placeholder="Message"></textarea>
									</div>
								</div>

								<div className="col-sm-12">
									<div className="contact-form-submit topmargin_20">
										<button type="submit" id="contact_form_submit" name="contact_submit" className="theme_button color1 with_shadow">Send Message</button>
									</div>
								</div>


							</form>
						</div>

						<div className="col-md-4 to_animate" data-animation="scaleAppear">

							<div className="with_border with_padding_small">
								<ul className="list1 no-bullets no-top-border no-bottom-border">

									<li>
										<div className="media">
											<div className="media-left">
												<i className="rt-icon2-shop highlight fontsize_18"></i>
											</div>
											<div className="media-body">
												<h5 className="media-heading grey">Postal Address:</h5>
												PO Box 97845 Some str. 567, Los Angeles, California, United States
											</div>
										</div>
									</li>
									<li>
										<div className="media">
											<div className="media-left">
												<i className="rt-icon2-phone5 highlight fontsize_18"></i>
											</div>
											<div className="media-body">
												<h5 className="media-heading grey">Phone:</h5>
												8(800) 123-12345
											</div>
										</div>
									</li>
									<li>
										<div className="media">
											<div className="media-left">
												<i className="rt-icon2-stack4 highlight fontsize_18"></i>
											</div>
											<div className="media-body">
												<h5 className="media-heading grey">Fax:</h5>
												8(800) 123-12345
											</div>
										</div>
									</li>
									<li>
										<div className="media">
											<div className="media-left">
												<i className="rt-icon2-mail highlight fontsize_18"></i>
											</div>
											<div className="media-body">
												<h5 className="media-heading grey">Email:</h5>
												mail@company.com
											</div>
										</div>
									</li>
								</ul>
							</div>

						</div>

					</div>
				</div>
			</section>

  </Layout>);
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
