import React from "react";

import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";
import Accordion from "../components/Accordion";
import Tab from "../components/Tab";
import TabHeading from "../components/TabHeading";
import TabContent from "../components/TabContent";

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
      <section className="ls section_padding_100 columns_padding_25">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12">
              <Accordion>
                <Tab>
                  <TabHeading
                    heading="What can I expect in the first session when I see a
                        psychologist?"
                  />
                  <TabContent>
                    Exercitation cupim ex, short ribs cow in ullamco corned beef
                    veniam kevin. Eu frankfurter ham hock ball tip reprehenderit
                    adipisicing ipsum jerky tenderloin.
                  </TabContent>
                </Tab>
                <Tab>
                  <TabHeading
                    heading="What can I expect in the first session when I see a
                        psychologist?"
                  />
                  <TabContent>
                    Exercitation cupim ex, short ribs cow in ullamco corned beef
                    veniam kevin. Eu frankfurter ham hock ball tip reprehenderit
                    adipisicing ipsum jerky tenderloin.
                  </TabContent>
                </Tab>
                <Tab>
                  <TabHeading
                    heading="What can I expect in the first session when I see a
                        psychologist?"
                  />
                  <TabContent>
                    Exercitation cupim ex, short ribs cow in ullamco corned beef
                    veniam kevin. Eu frankfurter ham hock ball tip reprehenderit
                    adipisicing ipsum jerky tenderloin.
                  </TabContent>
                </Tab>
              </Accordion>
              {/* <div className="panel-group" id="accordion1">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion1"
                        href="#collapse1"
                        className="collapsed"
                      >
                        What can I expect in the first session when I see a
                        psychologist?
                      </a>
                    </h4>
                  </div>
                  <div id="collapse1" className="panel-collapse collapse">
                    <div className="panel-body">
                      Exercitation cupim ex, short ribs cow in ullamco corned
                      beef veniam kevin. Eu frankfurter ham hock ball tip
                      reprehenderit adipisicing ipsum jerky tenderloin.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion1"
                        href="#collapse2"
                        className="collapsed"
                      >
                        What are the sings of being abused by your partner?
                      </a>
                    </h4>
                  </div>
                  <div id="collapse2" className="panel-collapse collapse">
                    <div className="panel-body">
                      Exercitation cupim ex, short ribs cow in ullamco corned
                      beef veniam kevin. Eu frankfurter ham hock ball tip
                      reprehenderit adipisicing ipsum jerky tenderloin.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion1"
                        href="#collapse3"
                        className="collapsed"
                      >
                        What specific qualities are you looking for?
                      </a>
                    </h4>
                  </div>
                  <div id="collapse3" className="panel-collapse collapse">
                    <div className="panel-body">
                      Exercitation cupim ex, short ribs cow in ullamco corned
                      beef veniam kevin. Eu frankfurter ham hock ball tip
                      reprehenderit adipisicing ipsum jerky tenderloin.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion1"
                        href="#collapse4"
                        className="collapsed"
                      >
                        How much money do psychologists make?
                      </a>
                    </h4>
                  </div>
                  <div id="collapse4" className="panel-collapse collapse">
                    <div className="panel-body">
                      Exercitation cupim ex, short ribs cow in ullamco corned
                      beef veniam kevin. Eu frankfurter ham hock ball tip
                      reprehenderit adipisicing ipsum jerky tenderloin.
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
