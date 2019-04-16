import React from "react";
import PropTypes from "prop-types";
import { Location } from "@reach/router";

import SliderArea from "../../components/SliderArea";

const HomePagePreview = props => {
  const { entry, widgetsFor, fieldsMetaData } = props;
  console.log("fieldsMetaData", fieldsMetaData);
  const data = entry.getIn(["data"]).toJS();
  data.servicesArea.services.forEach(service => {
    console.log("service", service.service);
    const serviceObject = fieldsMetaData.getIn(["services", service.service]);
    console.log("serviceObject", serviceObject);
  });

  if (data) {
    return (
      <Location>
        {({ location }) => {
          return (
            <React.Fragment>
              <SliderArea slider={data.slider} />;
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
