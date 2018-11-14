import React from 'react'

import '../assets/css/headerTop.css'

export default function HeaderTop() {
    return (
        <section className="page_topline cs table_section table_section_md columns_padding_0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 text-center text-md-left">
                        <ul className="inline-dropdown inline-block divided_content">

                            <li className="dropdown login-dropdown">
                                <a className="header-button" data-target="#" href="./" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
                                    <i className="fa fa-user"></i>
                                    <span className="header-button-text">Login</span>
                                </a>

                                <div className="dropdown-menu ls with_padding">

                                    <p>
                                        <strong className="grey">If you have an account, please log in:</strong>
                                    </p>
                                    <form role="form" action="/">

                                        <div className="form-group">
                                            <label for="login_email" className="sr-only">Email address</label>
                                            <input type="email" className="form-control" id="login_email" placeholder="Email Address" />
                                        </div>
                                        <div className="form-group">
                                            <label for="login_password" className="sr-only">Password</label>
                                            <input type="password" className="form-control" id="login_password" placeholder="Password" />
                                        </div>
                                        <div className="checkbox">
                                            <input type="checkbox" id="remember_checkbox" />
                                            <label for="remember_checkbox">
                                                Remember Me
												</label>
                                        </div>

                                        <button type="button" className="theme_button color1 block_button">
                                            Log in
											</button>

                                    </form>
                                    <div className="topmargin_20 darklinks">
                                        <a href="#">Forgot Your Password?</a>
                                    </div>

                                </div>
                            </li>


                            <a className="header-button" href="#">
                                <i className="fa fa-lock"></i>
                                <span className="header-button-text">Register</span>
                            </a>
                        </ul>

                    </div>

                    <div className="col-md-6 text-center divided_content">

                        <div>
                            <div className="media small-teaser">
                                <div className="media-left">
                                    <i className="fa fa-user highlight fontsize_16"></i>
                                </div>
                                <div className="media-body">
                                    0 (800) 337 25 25
									</div>
                            </div>
                        </div>

                        <div>
                            <div className="media small-teaser">
                                <div className="media-left">
                                    <i className="fa fa-map-marker highlight fontsize_16"></i>
                                </div>
                                <div className="media-body">
                                    350 Leverton Cove Road Springfield, MA
									</div>
                            </div>
                        </div>

                        <div>
                            <div className="media small-teaser">
                                <div className="media-left">
                                    <i className="fa fa-envelope highlight fontsize_16"></i>
                                </div>
                                <div className="media-body">
                                    support@psychologist.com
									</div>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-3 text-center text-md-right bottommargin_0">
                        <a href="#appointment" className="theme_button color1 margin_0">Make an appointment</a>
                    </div>

                </div>
            </div>
        </section>
    )
}
