import React from "react";
import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";

export default function() {
  //   Prepare breadcrumbs
  const pages = [{ title: "Home", href: "/" }, { title: "Blog", href: null }];
  return (
    <Layout>
      <Breadcrumbs pageTitle="Blog" pages={pages} />
      <section className="ls page_portfolio section_padding_top_100 section_padding_bottom_75">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="isotope_container isotope row masonry-layout columns_bottom_margin_30">
                <div className="isotope-item col-lg-4 col-md-6 col-sm-12">
                  <article className="vertical-item content-padding mosaic-post post format-standard text-center with_border">
                    <div className="item-media entry-thumbnail">
                      <img src="images/gallery/01.jpg" alt="" />
                      <div className="media-links">
                        <a
                          className="abs-link"
                          title=""
                          href="blog-single-right.html"
                        />
                      </div>
                    </div>

                    <div className="item-content entry-content">
                      <header className="entry-header">
                        <h3 className="entry-title">
                          <a href="blog-single-right.html" rel="bookmark">
                            Consetetur elitr tempor
                          </a>
                        </h3>

                        <span className="date small-text highlight">
                          <time
                            datetime="2017-01-10T15:05:23+00:00"
                            className="entry-date"
                          >
                            Jan 10, 2017
                          </time>
                        </span>
                      </header>

                      <p>
                        Duis autem eumre dolor hendrerit vulputate eros et
                        accumsan et iusto odio dignissim.
                      </p>
                    </div>

                    <div className="post-social-links text-center with_border">
                      <a
                        href="#"
                        className="social-icon color-icon soc-twitter"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-facebook"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-google"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-flickr"
                      />
                    </div>
                  </article>
                </div>

                <div className="isotope-item col-lg-4 col-md-6 col-sm-12">
                  <article className="vertical-item content-padding mosaic-post post format-standard text-center with_border">
                    <div className="item-media entry-thumbnail">
                      <img src="images/gallery/02.jpg" alt="" />
                      <div className="media-links">
                        <a
                          className="abs-link"
                          title=""
                          href="blog-single-right.html"
                        />
                      </div>
                    </div>

                    <div className="item-content entry-content">
                      <header className="entry-header">
                        <h3 className="entry-title">
                          <a href="blog-single-right.html" rel="bookmark">
                            Diam nonumy eirmod tempor{" "}
                          </a>
                        </h3>

                        <span className="date small-text highlight">
                          <time
                            datetime="2017-01-10T15:05:23+00:00"
                            className="entry-date"
                          >
                            Jan 10, 2017
                          </time>
                        </span>
                      </header>

                      <p>
                        Duis autem eumre dolor hendrerit vulputate veliesse
                        molestie consequat vel illum dolore at vero eros et
                        accumsan et iusto odio dignissim.
                      </p>
                    </div>

                    <div className="post-social-links text-center with_border">
                      <a
                        href="#"
                        className="social-icon color-icon soc-twitter"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-facebook"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-google"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-flickr"
                      />
                    </div>
                  </article>
                </div>

                <div className="isotope-item col-lg-4 col-md-6 col-sm-12">
                  <article className="vertical-item content-padding mosaic-post post format-standard text-center with_border">
                    <div className="item-media entry-thumbnail">
                      <img src="images/gallery/03.jpg" alt="" />
                      <div className="media-links">
                        <a
                          className="abs-link"
                          title=""
                          href="blog-single-right.html"
                        />
                      </div>
                    </div>

                    <div className="item-content entry-content">
                      <header className="entry-header">
                        <h3 className="entry-title">
                          <a href="blog-single-right.html" rel="bookmark">
                            Eirmod elitr diam nonumy tempor
                          </a>
                        </h3>

                        <span className="date small-text highlight">
                          <time
                            datetime="2017-01-10T15:05:23+00:00"
                            className="entry-date"
                          >
                            Jan 10, 2017
                          </time>
                        </span>
                      </header>

                      <p>
                        Hendrerit vulputate veliesse molestie consequat vel
                        illum dolore at vero eros et accumsan et iusto odio
                        dignissim.
                      </p>
                    </div>

                    <div className="post-social-links text-center with_border">
                      <a
                        href="#"
                        className="social-icon color-icon soc-twitter"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-facebook"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-google"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-flickr"
                      />
                    </div>
                  </article>
                </div>

                <div className="isotope-item col-lg-4 col-md-6 col-sm-12">
                  <article className="vertical-item content-padding mosaic-post post format-standard text-center with_border">
                    <div className="item-media entry-thumbnail">
                      <img src="images/gallery/04.jpg" alt="" />
                      <div className="media-links">
                        <a
                          className="abs-link"
                          title=""
                          href="blog-single-right.html"
                        />
                      </div>
                    </div>

                    <div className="item-content entry-content">
                      <header className="entry-header">
                        <h3 className="entry-title">
                          <a href="blog-single-right.html" rel="bookmark">
                            Tempor elitr diam nonumy
                          </a>
                        </h3>

                        <span className="date small-text highlight">
                          <time
                            datetime="2017-01-10T15:05:23+00:00"
                            className="entry-date"
                          >
                            Jan 10, 2017
                          </time>
                        </span>
                      </header>

                      <p>
                        Duis autem eumre dolor hendrerit vulputate veliesse
                        molestie at vero eros et accumsan et iusto odio
                        dignissim.
                      </p>
                    </div>

                    <div className="post-social-links text-center with_border">
                      <a
                        href="#"
                        className="social-icon color-icon soc-twitter"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-facebook"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-google"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-flickr"
                      />
                    </div>
                  </article>
                </div>

                <div className="isotope-item col-lg-4 col-md-6 col-sm-12">
                  <article className="vertical-item content-padding mosaic-post post format-standard text-center with_border">
                    <div className="item-media entry-thumbnail">
                      <img src="images/gallery/05.jpg" alt="" />
                      <div className="media-links">
                        <a
                          className="abs-link"
                          title=""
                          href="blog-single-right.html"
                        />
                      </div>
                    </div>

                    <div className="item-content entry-content">
                      <header className="entry-header">
                        <h3 className="entry-title">
                          <a href="blog-single-right.html" rel="bookmark">
                            Consetetur elitr diam eirmod tempor{" "}
                          </a>
                        </h3>

                        <span className="date small-text highlight">
                          <time
                            datetime="2017-01-10T15:05:23+00:00"
                            className="entry-date"
                          >
                            Jan 10, 2017
                          </time>
                        </span>
                      </header>

                      <p>
                        Duis autem eumre dolor hendrerit vulputate veliesse
                        molestie consequat vel illum dolore at vero eros et
                        accumsan et iusto odio dignissim.
                      </p>
                    </div>

                    <div className="post-social-links text-center with_border">
                      <a
                        href="#"
                        className="social-icon color-icon soc-twitter"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-facebook"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-google"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-flickr"
                      />
                    </div>
                  </article>
                </div>

                <div className="isotope-item col-lg-4 col-md-6 col-sm-12">
                  <article className="vertical-item content-padding mosaic-post post format-standard text-center with_border">
                    <div className="item-media entry-thumbnail">
                      <img src="images/gallery/06.jpg" alt="" />
                      <div className="media-links">
                        <a
                          className="abs-link"
                          title=""
                          href="blog-single-right.html"
                        />
                      </div>
                    </div>

                    <div className="item-content entry-content">
                      <header className="entry-header">
                        <h3 className="entry-title">
                          <a href="blog-single-right.html" rel="bookmark">
                            Nonumy onsetetur elitr diam eirmod tempor{" "}
                          </a>
                        </h3>

                        <span className="date small-text highlight">
                          <time
                            datetime="2017-01-10T15:05:23+00:00"
                            className="entry-date"
                          >
                            Jan 10, 2017
                          </time>
                        </span>
                      </header>

                      <p>
                        Duis autem eumre dolor hendrerit vulputate veliesse
                        molestie consequat vel illum dolore at vero eros et
                        accumsan et iusto odio dignissim.
                      </p>
                    </div>

                    <div className="post-social-links text-center with_border">
                      <a
                        href="#"
                        className="social-icon color-icon soc-twitter"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-facebook"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-google"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-flickr"
                      />
                    </div>
                  </article>
                </div>

                <div className="isotope-item col-lg-4 col-md-6 col-sm-12">
                  <article className="vertical-item content-padding mosaic-post post format-standard text-center with_border">
                    <div className="item-media entry-thumbnail">
                      <img src="images/gallery/07.jpg" alt="" />
                      <div className="media-links">
                        <a
                          className="abs-link"
                          title=""
                          href="blog-single-right.html"
                        />
                      </div>
                    </div>

                    <div className="item-content entry-content">
                      <header className="entry-header">
                        <h3 className="entry-title">
                          <a href="blog-single-right.html" rel="bookmark">
                            Tempor consetetur elitr diam nonumy eirmod{" "}
                          </a>
                        </h3>

                        <span className="date small-text highlight">
                          <time
                            datetime="2017-01-10T15:05:23+00:00"
                            className="entry-date"
                          >
                            Jan 10, 2017
                          </time>
                        </span>
                      </header>

                      <p>
                        Duis autem eumre dolor hendrerit vulputate veliesse
                        molestie consequat vel illum dolore at vero eros et
                        accumsan et iusto odio dignissim.
                      </p>
                    </div>

                    <div className="post-social-links text-center with_border">
                      <a
                        href="#"
                        className="social-icon color-icon soc-twitter"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-facebook"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-google"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-flickr"
                      />
                    </div>
                  </article>
                </div>

                <div className="isotope-item col-lg-4 col-md-6 col-sm-12">
                  <article className="vertical-item content-padding mosaic-post post format-standard text-center with_border">
                    <div className="item-media entry-thumbnail">
                      <img src="images/gallery/08.jpg" alt="" />
                      <div className="media-links">
                        <a
                          className="abs-link"
                          title=""
                          href="blog-single-right.html"
                        />
                      </div>
                    </div>

                    <div className="item-content entry-content">
                      <header className="entry-header">
                        <h3 className="entry-title">
                          <a href="blog-single-right.html" rel="bookmark">
                            Consetetur elitr diam nonumy eirmod tempor{" "}
                          </a>
                        </h3>

                        <span className="date small-text highlight">
                          <time
                            datetime="2017-01-10T15:05:23+00:00"
                            className="entry-date"
                          >
                            Jan 10, 2017
                          </time>
                        </span>
                      </header>

                      <p>
                        Duis autem eumre dolor hendrerit vulputate veliesse
                        molestie consequat vel illum dolore at vero eros et
                        accumsan et iusto odio dignissim.
                      </p>
                    </div>

                    <div className="post-social-links text-center with_border">
                      <a
                        href="#"
                        className="social-icon color-icon soc-twitter"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-facebook"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-google"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-flickr"
                      />
                    </div>
                  </article>
                </div>

                <div className="isotope-item col-lg-4 col-md-6 col-sm-12">
                  <article className="vertical-item content-padding mosaic-post post format-standard text-center with_border">
                    <div className="item-media entry-thumbnail">
                      <img src="images/gallery/09.jpg" alt="" />
                      <div className="media-links">
                        <a
                          className="abs-link"
                          title=""
                          href="blog-single-right.html"
                        />
                      </div>
                    </div>

                    <div className="item-content entry-content">
                      <header className="entry-header">
                        <h3 className="entry-title">
                          <a href="blog-single-right.html" rel="bookmark">
                            Eirmod tempor consetetur elitr diam nonumy{" "}
                          </a>
                        </h3>

                        <span className="date small-text highlight">
                          <time
                            datetime="2017-01-10T15:05:23+00:00"
                            className="entry-date"
                          >
                            Jan 10, 2017
                          </time>
                        </span>
                      </header>

                      <p>
                        Duis autem eumre dolor hendrerit vulputate veliesse
                        molestie consequat vel illum dolore at vero eros et
                        accumsan et iusto odio dignissim.
                      </p>
                    </div>

                    <div className="post-social-links text-center with_border">
                      <a
                        href="#"
                        className="social-icon color-icon soc-twitter"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-facebook"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-google"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-flickr"
                      />
                    </div>
                  </article>
                </div>

                <div className="isotope-item col-lg-4 col-md-6 col-sm-12">
                  <article className="vertical-item content-padding mosaic-post post format-standard text-center with_border">
                    <div className="item-media entry-thumbnail">
                      <img src="images/gallery/10.jpg" alt="" />
                      <div className="media-links">
                        <a
                          className="abs-link"
                          title=""
                          href="blog-single-right.html"
                        />
                      </div>
                    </div>

                    <div className="item-content entry-content">
                      <header className="entry-header">
                        <h3 className="entry-title">
                          <a href="blog-single-right.html" rel="bookmark">
                            Diam nonumy consetetur elitr eirmod tempor{" "}
                          </a>
                        </h3>

                        <span className="date small-text highlight">
                          <time
                            datetime="2017-01-10T15:05:23+00:00"
                            className="entry-date"
                          >
                            Jan 10, 2017
                          </time>
                        </span>
                      </header>

                      <p>
                        Duis autem eumre dolor hendrerit vulputate dolore at
                        vero eros et accumsan et iusto odio dignissim.
                      </p>
                    </div>

                    <div className="post-social-links text-center with_border">
                      <a
                        href="#"
                        className="social-icon color-icon soc-twitter"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-facebook"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-google"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-flickr"
                      />
                    </div>
                  </article>
                </div>

                <div className="isotope-item col-lg-4 col-md-6 col-sm-12">
                  <article className="vertical-item content-padding mosaic-post post format-standard text-center with_border">
                    <div className="item-media entry-thumbnail">
                      <img src="images/gallery/11.jpg" alt="" />
                      <div className="media-links">
                        <a
                          className="abs-link"
                          title=""
                          href="blog-single-right.html"
                        />
                      </div>
                    </div>

                    <div className="item-content entry-content">
                      <header className="entry-header">
                        <h3 className="entry-title">
                          <a href="blog-single-right.html" rel="bookmark">
                            Consetetur elitr diam nonumy eirmod tempor{" "}
                          </a>
                        </h3>

                        <span className="date small-text highlight">
                          <time
                            datetime="2017-01-10T15:05:23+00:00"
                            className="entry-date"
                          >
                            Jan 10, 2017
                          </time>
                        </span>
                      </header>

                      <p>
                        Duis veliesse molestie consequat vel illum dolore at
                        vero eros et accumsan et iusto odio dignissim.
                      </p>
                    </div>

                    <div className="post-social-links text-center with_border">
                      <a
                        href="#"
                        className="social-icon color-icon soc-twitter"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-facebook"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-google"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-flickr"
                      />
                    </div>
                  </article>
                </div>

                <div className="isotope-item col-lg-4 col-md-6 col-sm-12">
                  <article className="vertical-item content-padding mosaic-post post format-standard text-center with_border">
                    <div className="item-media entry-thumbnail">
                      <img src="images/gallery/12.jpg" alt="" />
                      <div className="media-links">
                        <a
                          className="abs-link"
                          title=""
                          href="blog-single-right.html"
                        />
                      </div>
                    </div>

                    <div className="item-content entry-content">
                      <header className="entry-header">
                        <h3 className="entry-title">
                          <a href="blog-single-right.html" rel="bookmark">
                            Elitr diam nonumy consetetur eirmod tempor{" "}
                          </a>
                        </h3>

                        <span className="date small-text highlight">
                          <time
                            datetime="2017-01-10T15:05:23+00:00"
                            className="entry-date"
                          >
                            Jan 10, 2017
                          </time>
                        </span>
                      </header>

                      <p>
                        Duis autem eumre dolor hendrerit vulputate illum dolore
                        at vero eros et accumsan et iusto odio dignissim.
                      </p>
                    </div>

                    <div className="post-social-links text-center with_border">
                      <a
                        href="#"
                        className="social-icon color-icon soc-twitter"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-facebook"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-google"
                      />
                      <a
                        href="#"
                        className="social-icon color-icon soc-flickr"
                      />
                    </div>
                  </article>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12 text-center">
                  <i className="fa fa-circle-o-notch fa-spin loadmore_spinner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
