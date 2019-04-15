import React from "react";
import Slider from "react-slick";

import Testimonial from "./Testimonial";

export default function TestimonialsArea(props) {
  const settings = {
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 4000
  };

  return (
    <section className="cs main_color2 parallax page_testimonials section_padding_75">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <Slider {...settings}>
              {props.testimonialsArea.testimonials.map((testimonial, index) => {
                return (
                  <Testimonial
                    key={index}
                    quote={testimonial.quote}
                    author={testimonial.author}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
