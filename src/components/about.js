import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/about.css";

class About extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
    };
  }

  render() {
    return (
      <div className="about">
        <h1>The Thompsons</h1>
        <p>are amazing</p>
      </div>
    );
  }
}

export default hot(module)(About);
