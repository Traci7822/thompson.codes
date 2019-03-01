import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/bryan.css";

class Bryan extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
      results: {}
    }
  }
  render() {
    return (
      <div><p>Bryan</p></div>
    );
  }
}

export default hot(module)(Bryan);
