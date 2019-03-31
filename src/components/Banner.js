import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/banner.css";

import mountain from '../assets/mountain.png';

class Banner extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
    }
  }

  render() {
    if (!this.props.showBanner) {
      return null;
    }

    return (
      <div className="banner" onClick={this.props.toggleBanner}>
        <span className="title">
        <h1 className="title_name first">THOMPSON</h1>
          <img className="title_image" src={mountain} />
         <h1 className="title_name second">CODES</h1>
         </span>
      </div>
    )
  }
}

export default hot(module)(Banner);
