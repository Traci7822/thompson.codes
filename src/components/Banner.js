import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/banner.css";

import mountain from '../assets/mountain.png';

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
        <span className="title">
        <h1 className="name">THOMPSON</h1>
          <img className="title_image" src={mountain} />
         <h1 className="name">CODES</h1>
         </span>
      </div>
    )
  }
}

export default hot(module)(Banner);
