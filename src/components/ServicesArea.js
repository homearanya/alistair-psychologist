import React from 'react'

import '../assets/css/servicesArea.css'

import relationship from '../assets/images/service-icons/relationship.png'
import mental from '../assets/images/service-icons/mental.png'
import feelings from '../assets/images/service-icons/feelings.png'
import conflicting from '../assets/images/service-icons/conflicting.png'
import meditation from '../assets/images/service-icons/meditation.png'
import depression from '../assets/images/service-icons/depression.png'
import mind from '../assets/images/service-icons/mind.png'
import relaxation from '../assets/images/service-icons/relaxation.png'

export default function ServicesArea() {
    return (
        <section id="services" className="ls section_padding_top_130 section_padding_bottom_100">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h2 className="section_header with_icon">What We Can Offer</h2>
                        <p>
                            Porchetta dolor magna ipsum. Irure beef ribs chicken dolore, laboris filet mignon ribeye bacon swine pork loin commodo pork chop corned beef hamburger.
							</p>
                    </div>
                </div>
                <div className="row columns_padding_0 columns_margin_0 fontsize_16">
                    <div className="col-md-3 col-sm-6">
                        <div className="with_padding text-center teaser hover_shadow">
                            <img src={relationship} alt="" />
                            <h4>
                                <a href="service-single.html">Relationship</a>
                            </h4>
                            <p>
                                A therapy that helps establish a more profound ground for healthy relationship.
								</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="with_padding text-center teaser hover_shadow">
                            <img src={mental} alt="" />
                            <h4>
                                <a href="service-single.html">Mental health</a>
                            </h4>
                            <p>
                                Improve your focus, relieve stress and anxiety, and develop creativity.
								</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 clear-sm">
                        <div className="with_padding text-center teaser hover_shadow">
                            <img src={feelings} alt="" />
                            <h4>
                                <a href="service-single.html">Feelings</a>
                            </h4>
                            <p>
                                Achieve a better level of your well-being and the ability to manage feelings.
								</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="with_padding text-center teaser hover_shadow">
                            <img src={conflicting} alt="" />
                            <h4>
                                <a href="service-single.html">Conflicting</a>
                            </h4>
                            <p>
                                Invaluable insight into the knowledge of reducing conflict in relationship.
								</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 clear-lg clear-md clear-sm">
                        <div className="with_padding text-center teaser hover_shadow">
                            <img src={meditation} alt="" />
                            <h4>
                                <a href="service-single.html">Meditation</a>
                            </h4>
                            <p>
                                Learn how to deal with difficult emotions and feelings by using healthy strategies.
								</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="with_padding text-center teaser hover_shadow">
                            <img src={depression} alt="" />
                            <h4>
                                <a href="service-single.html">Depression</a>
                            </h4>
                            <p>
                                If your depression is keeping you from living your life don’t hesitate to seek help.
								</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 clear-sm">
                        <div className="with_padding text-center teaser hover_shadow">
                            <img src={mind} alt="" />
                            <h4>
                                <a href="service-single.html">Mind Games</a>
                            </h4>
                            <p>
                                It is crucial to understand how to prevent others from playing such games with you.
								</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="with_padding text-center teaser hover_shadow">
                            <img src={relaxation} alt="" />
                            <h4>
                                <a href="service-single.html">Relaxation</a>
                            </h4>
                            <p>
                                Focus your attention on calmness and increase your personal awareness.
								</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}