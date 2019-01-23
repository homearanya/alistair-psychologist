import React from "react";

import "../assets/css/blogArea.css";

import blog_post1 from "../assets/images/blog_post1.jpg";
import blog_post2 from "../assets/images/blog_post2.jpg";
import blog_post3 from "../assets/images/blog_post3.jpg";

export default function ArticlesArea() {
  return (
    <section className="ls section_padding_top_130 section_padding_bottom_100 columns_margin_top_0 columns_margin_bottom_30">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2 className="section_header with_icon">Recent Articles</h2>
            <p>
              Exercitation cupim ex, short ribs cow in ullamco corned beef
              veniam kevin. Eu frankfurter ham hock ball tip reprehenderit
              adipisicing ipsum jerky tenderloin aliquip.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center">
            <article className="vertical-item content-padding post format-standard with_shadow">
              <div className="item-media entry-thumbnail">
                <img src={blog_post1} alt="" />
              </div>

              <div className="item-content entry-content">
                <header className="entry-header">
                  <div className="entry-date small-text highlight">
                    <a href="blog-right.html" rel="bookmark">
                      <time
                        className="entry-date"
                        dateTime="2017-03-13T08:50:40+00:00"
                      >
                        March 13, 2017
                      </time>
                    </a>
                  </div>

                  <h4 className="entry-title">
                    <a href="blog-single-right.html" rel="bookmark">
                      How to avoid hostile attitude
                    </a>
                  </h4>

                  <hr className="divider_30_1" />
                </header>

                <p className="bottommargin_40 fontsize_18">
                  Exercitation cupim ex, short ribs cow in ullamco corned beef
                  veniam kevin eu frankfurter...
                </p>

                <a
                  href="blog-single-right.html"
                  className="theme_button color1"
                >
                  Read article
                </a>
              </div>
            </article>
          </div>
          <div className="col-md-4 text-center">
            <article className="vertical-item content-padding post format-standard with_shadow">
              <div className="item-media entry-thumbnail">
                <img src={blog_post2} alt="" />
              </div>

              <div className="item-content entry-content">
                <header className="entry-header">
                  <div className="entry-date small-text highlight">
                    <a href="blog-right.html" rel="bookmark">
                      <time
                        className="entry-date"
                        dateTime="2017-03-13T08:50:40+00:00"
                      >
                        March 13, 2017
                      </time>
                    </a>
                  </div>

                  <h4 className="entry-title">
                    <a href="blog-single-right.html" rel="bookmark">
                      How to avoid hostile attitude
                    </a>
                  </h4>

                  <hr className="divider_30_1" />
                </header>

                <p className="bottommargin_40 fontsize_18">
                  Exercitation cupim ex, short ribs cow in ullamco corned beef
                  veniam kevin eu frankfurter...
                </p>

                <a
                  href="blog-single-right.html"
                  className="theme_button color1"
                >
                  Read article
                </a>
              </div>
            </article>
          </div>
          <div className="col-md-4 text-center">
            <article className="vertical-item content-padding post format-standard with_shadow">
              <div className="item-media entry-thumbnail">
                <img src={blog_post3} alt="" />
              </div>

              <div className="item-content entry-content">
                <header className="entry-header">
                  <div className="entry-date small-text highlight">
                    <a href="blog-right.html" rel="bookmark">
                      <time
                        className="entry-date"
                        dateTime="2017-03-13T08:50:40+00:00"
                      >
                        March 13, 2017
                      </time>
                    </a>
                  </div>

                  <h4 className="entry-title">
                    <a href="blog-single-right.html" rel="bookmark">
                      How to avoid hostile attitude
                    </a>
                  </h4>

                  <hr className="divider_30_1" />
                </header>

                <p className="bottommargin_40 fontsize_18">
                  Exercitation cupim ex, short ribs cow in ullamco corned beef
                  veniam kevin eu frankfurter...
                </p>

                <a
                  href="blog-single-right.html"
                  className="theme_button color1"
                >
                  Read article
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
