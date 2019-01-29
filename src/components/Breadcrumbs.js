import React from "react";
import { Link } from "gatsby";

export default function Breadcrumbs(props) {
  return (
    <section className="page_breadcrumbs ds background_cover section_padding_50">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2>{props.pageTitle}</h2>
            <ol className="breadcrumb divided_content wide_divider">
              {props.pages.map((page, index) =>
                page.href ? (
                  <li key={index}>
                    <Link to={page.href}>{page.title}</Link>
                  </li>
                ) : (
                  <li key={index} className="active">
                    {page.title}
                  </li>
                )
              )}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
