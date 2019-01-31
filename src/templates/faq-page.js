import React from "react";

import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";

export default function() {
  //   Prepare breadcrumbs
  const pages = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/#services" },
    { title: "Home", href: "/services/mindfulness-training/" },
    { title: "FAQ", href: null }
  ];
  return (
    <Layout>
      <Breadcrumbs pageTitle="Mindfulness Training - FAQ" pages={pages} />
      <section class="ls section_padding_100 columns_padding_25">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12">
              <div class="panel-group" id="accordion1">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion1"
                        href="#collapse1"
                        class="collapsed"
                      >
                        What can I expect in the first session when I see a
                        psychologist?
                      </a>
                    </h4>
                  </div>
                  <div id="collapse1" class="panel-collapse collapse">
                    <div class="panel-body">
                      Exercitation cupim ex, short ribs cow in ullamco corned
                      beef veniam kevin. Eu frankfurter ham hock ball tip
                      reprehenderit adipisicing ipsum jerky tenderloin.
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion1"
                        href="#collapse2"
                        class="collapsed"
                      >
                        What are the sings of being abused by your partner?
                      </a>
                    </h4>
                  </div>
                  <div id="collapse2" class="panel-collapse collapse">
                    <div class="panel-body">
                      Exercitation cupim ex, short ribs cow in ullamco corned
                      beef veniam kevin. Eu frankfurter ham hock ball tip
                      reprehenderit adipisicing ipsum jerky tenderloin.
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion1"
                        href="#collapse3"
                        class="collapsed"
                      >
                        What specific qualities are you looking for?
                      </a>
                    </h4>
                  </div>
                  <div id="collapse3" class="panel-collapse collapse">
                    <div class="panel-body">
                      Exercitation cupim ex, short ribs cow in ullamco corned
                      beef veniam kevin. Eu frankfurter ham hock ball tip
                      reprehenderit adipisicing ipsum jerky tenderloin.
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion1"
                        href="#collapse4"
                        class="collapsed"
                      >
                        How much money do psychologists make?
                      </a>
                    </h4>
                  </div>
                  <div id="collapse4" class="panel-collapse collapse">
                    <div class="panel-body">
                      Exercitation cupim ex, short ribs cow in ullamco corned
                      beef veniam kevin. Eu frankfurter ham hock ball tip
                      reprehenderit adipisicing ipsum jerky tenderloin.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
