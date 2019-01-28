import React, { Component } from "react";
import Recaptcha from "react-recaptcha";

export default class SpamFilter extends Component {
  constructor(props) {
    super(props);
    this.callback = this.callback.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  callback = function() {
    console.log("Done!!!!");
  };

  verifyCallback = function(response) {
    console.log(response);
  };

  render() {
    return (
      <Recaptcha
        sitekey="6LceKI0UAAAAAIotNqsmM-FQt9KbvpnVuTFp-5pj"
        render="explicit"
        verifyCallback={this.verifyCallback}
        onloadCallback={this.callback}
      />
    );
  }
}
