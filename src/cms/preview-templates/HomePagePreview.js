import React from "react";
import PropTypes from "prop-types";
import { Location } from "@reach/router";
import { slugify } from "../../assets/utils/helpers";

import SliderArea from "../../components/SliderArea";
import ServicesArea from "../../components/ServicesArea";

let servicesObject = new Object();

const HomePagePreview = props => {
  const { entry, widgetsFor, fieldsMetaData } = props;
  const data = entry.getIn(["data"]).toJS();

  data.servicesArea.services.forEach(service => {
    const serviceObject = fieldsMetaData.getIn([
      "servicesArea",
      "services",
      "service",
      "services",
      service.service
    ]);
    servicesObject[service.service] = serviceObject;
  });

  if (data && !Object.values(servicesObject).some(e => !e)) {
    data.servicesArea.services.forEach((service, index) => {
      const serviceName = service.service;
      service.service = {};
      service.service.frontmatter = servicesObject[serviceName].toJS();
      service.service.id = index;
      service.service.fields = {};
      service.service.fields.slug = "/services/" + slugify(serviceName) + "/";
    });
    return (
      <Location>
        {({ location }) => {
          return (
            <React.Fragment>
              <SliderArea slider={data.slider} />;
              <ServicesArea id="services" servicesArea={data.servicesArea} />
            </React.Fragment>
          );
          // return <HomePageTemplate frontmatter={data} location={location} />;
        }}
      </Location>
    );
  } else {
    return <div>Loading...</div>;
  }
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default HomePagePreview;
