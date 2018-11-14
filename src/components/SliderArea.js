import React from 'react'
import Slider from "react-slick";

import MyContext from './Context'

import '../assets/css/slick-theme.css'
import '../assets/css/slick.css'
import '../assets/css/sliderArea.css'

import slide01 from '../assets/images/slide01.jpg'

export default function SliderArea() {
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
    return (
        <section className="intro_section page_mainslider ds">
            <Slider {...settings}>
                <div>
                    <MyContext.Consumer>
                        {({ data, set }) => (
                            <img src={slide01} alt=""
                                onLoad={() => set({ loadSpinner: false })}
                            />
                        )}
                    </MyContext.Consumer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <div className="slide_description_wrapper">
                                    <div className="slide_description">
                                        <div className="intro-layer" data-animation="fadeInRight">
                                            <h3>
                                                Rita Solomou
    													</h3>
                                        </div>
                                        <div className="intro-layer" data-animation="fadeInLeft">
                                            <p className="small-text grey">
                                                Premium HTML Template
    													</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={slide01} alt="" />
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <div className="slide_description_wrapper">
                                    <div className="slide_description">
                                        <div className="intro-layer" data-animation="fadeInRight">
                                            <h3>
                                                Rita Solomou
    													</h3>
                                        </div>
                                        <div className="intro-layer" data-animation="fadeInLeft">
                                            <p className="small-text grey">
                                                Premium HTML Template
    													</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    )
}
