import React from "react";

import { ContactForm } from "./ContactForm";

import "../assets/css/appointmentArea.css";

export default function AppointmentArea() {
  return (
    <section
      id="appointment"
      className="ls section_padding_top_130 section_padding_bottom_100"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
            <h2 className="section_header with_icon highlight">
              Make an Appointment
            </h2>
            <div className="fontsize_16">
              Exercitation cupim ex, short ribs cow in ullamco corned beef
              veniam kevin. Eu frankfurter ham hock ball tip reprehenderit
              adipisicing ipsum
            </div>
            <ContactForm className="contact-form row columns_margin_bottom_40 topmargin_60" />
            {/* <form
              className="contact-form row columns_margin_bottom_40 topmargin_60"
              method="post"
            >
              <div className="col-sm-6">
                <div className="contact-form-name">
                  <label htmlFor="name">
                    Your Name
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    aria-required="true"
                    size="30"
                    value=""
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="contact-form-email">
                  <label htmlFor="email">
                    Email Address
                    <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    aria-required="true"
                    size="30"
                    value=""
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="contact-form-subject">
                  <label htmlFor="subject">
                    Subject
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    aria-required="true"
                    size="30"
                    value=""
                    name="subject"
                    id="subject"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="contact-form-phone">
                  <label htmlFor="phone">
                    Phone
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    aria-required="true"
                    size="30"
                    value=""
                    name="phone"
                    id="phone"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="contact-form-date select-group">
                  <label htmlFor="date" className="sr-only">
                    Date
                    <span className="required">*</span>
                  </label>
                  <div className="input-group">
                    <select
                      aria-required="true"
                      id="date"
                      name="date"
                      className="choice empty form-control"
                    >
                      <option value="" disabled selected data-default>
                        Date
                      </option>
                      <option value="14.03.2017">14.03.2017</option>
                      <option value="15.03.2017">15.03.2017</option>
                      <option value="16.03.2017">16.03.2017</option>
                      <option value="17.03.2017">17.03.2017</option>
                      <option value="18.03.2017">18.03.2017</option>
                      <option value="19.03.2017">19.03.2017</option>
                      <option value="20.03.2017">20.03.2017</option>
                      <option value="21.03.2017">21.03.2017</option>
                      <option value="22.03.2017">22.03.2017</option>
                      <option value="23.03.2017">23.03.2017</option>
                      <option value="24.03.2017">24.03.2017</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="contact-form-time select-group">
                  <label htmlFor="time" className="sr-only">
                    Date
                    <span className="required">*</span>
                  </label>
                  <div className="input-group">
                    <select
                      aria-required="true"
                      id="time"
                      name="time"
                      className="choice empty form-control"
                    >
                      <option value="" disabled selected data-default>
                        Time
                      </option>
                      <option value="14.03.2017">9:00</option>
                      <option value="15.03.2017">10:00</option>
                      <option value="16.03.2017">11:00</option>
                      <option value="17.03.2017">12:00</option>
                      <option value="18.03.2017">13:00</option>
                      <option value="19.03.2017">14:00</option>
                      <option value="20.03.2017">15:00</option>
                      <option value="21.03.2017">16:00</option>
                      <option value="22.03.2017">17:00</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="contact-form-message">
                  <label htmlFor="message">Message</label>
                  <textarea
                    aria-required="true"
                    rows="1"
                    cols="45"
                    name="message"
                    id="message"
                    className="form-control"
                    placeholder="Message"
                  />
                </div>
              </div>

              <div className="col-sm-12">
                <div className="contact-form-submit topmargin_20">
                  <button
                    type="submit"
                    id="contact_form_submit"
                    name="contact_submit"
                    className="theme_button color1 with_shadow"
                  >
                    Send message
                  </button>
                </div>
              </div>
            </form> */}
          </div>
        </div>
      </div>
    </section>
  );
}
