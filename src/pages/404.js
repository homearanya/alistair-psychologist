import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
export default function() {
  return (
    <Layout>
      <section class="ls section_404 background_cover no_overlay section_padding_top_150 section_padding_bottom_150">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 text-center text-sm-left">
              <div class="inline-block text-center">
                <p class="not_found">
                  <span class="highlight">404</span>
                  <span class="ops playfair grey">Ooops!</span>
                </p>
                <h2>Sorry, page not found!</h2>
                <p>
                  <Button whereTo="/" text="Back to Home" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
