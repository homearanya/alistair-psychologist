import React from 'react'

import '../assets/css/aboutArea.css'

import signature from '../assets/images/signature.png'
import person from '../assets/images/person.png'

export default function AboutArea() {
    return (
        <section id="about" className="cs parallax darken_gradient page_about section_padding_top_75 columns_margin_bottom_30">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-push-6 text-center">
                        <h2 className="section_header">Welcome to Psychologist &amp; Family Consulting</h2>
                        <br />
                        <p className="bold fontsize_18">It's my goal to create a comfortable, safe environment, where we'll work to achieve the goal together.</p>
                        <p className="fontsize_18">
                            I am a certified specialist in the branch of psychology concerned with the assessment and treatment of mental illness and behavioural problems. My other passion is publishing. You can find and purchase all my books within this site.
							</p>
                        <div className="with_icon topmargin_60">
                            <h5 className="small-text text-uppercase inline-block">Ronda Solomou</h5>
                            <span className="lightgrey">Psychologist</span>
                        </div>
                        <img src={signature} alt="" />
                    </div>
                    <div className="col-md-6 col-md-pull-6 text-center bottommargin_0">
                        <img src={person} alt="" className="top-overlap" />
                    </div>
                </div>
            </div>
        </section>
    )
}
