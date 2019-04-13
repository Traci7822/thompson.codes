import React, { Component } from "react";
import PropTypes from "prop-types";
import {hot} from "react-hot-loader";
import "../styles/banner.css";

import mountain from '../assets/mountain.png';

class Banner extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
    }
  }

  static propTypes = {
    showIndex: PropTypes.bool.isRequired,
    showBanner: PropTypes.bool.isRequired,
  }
  render() {
    if (!this.props.showBanner) {
      return null;
    }

    return (
      <div className="front">
        <div className="banner">
          <h1 className="title_name first">THOMPSON</h1>
            <img className="title_image" src={mountain} />
          <h1 className="title_name second">CODES</h1>
        </div>
        <div className="banner_footer">
          <button className="bottom_button" onClick={this.props.showIndex}>
            <img src={require('../assets/down-arrow.png')}></img>
          </button>
        </div>
      </div>
    )
  }
}

export default hot(module)(Banner);
