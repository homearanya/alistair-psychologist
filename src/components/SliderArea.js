import React from "react";
import Slider from "react-slick";

import Slide from "./Slide";

import "../assets/css/slick-theme.css";
import "../assets/css/slick.css";
import "../assets/css/sliderArea.css";

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  fade: true,
  autoplay: false,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default function SliderArea(props) {
  return (
    <section className="intro_section page_mainslider ds">
      <Slider {...settings}>
        <Slide />
      </Slider>
    </section>
  );
}
