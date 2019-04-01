import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/about.css";

class About extends Component {
  constructor(props) {
    super(props); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
    };
  }

  render() {
    if (!this.props.showAbout) {
      return null;
    }

    return (
      <div className="about" onClick={this.props.toggleAbout}>
        Blurb about us
      </div>
    );
  }
}

export default hot(module)(About);
