import React from "react";

export default function Breadcrumbs() {
  return (
    <section className="page_breadcrumbs ds background_cover section_padding_50">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2>Contact</h2>
            <ol className="breadcrumb divided_content wide_divider">
              <li>
                <a href="./">Home</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li className="active">Contact</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
