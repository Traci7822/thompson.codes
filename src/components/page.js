import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/banner.css";

class Page extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
    }
  }

  render() {
    return (
      <div className="page">
        <h1>
          {this.props.field}
        </h1>
      </div>
    );
  }
}

export default hot(module)(Page);
