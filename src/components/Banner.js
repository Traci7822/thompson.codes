import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/Banner.css";

class Banner extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
      results: {}
    }
  }
  render() {
    return (
      <div className="banner">
      </div>
    )
  }
}

export default hot(module)(Banner);
