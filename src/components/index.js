import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/banner.css";

import Banner from './banner'
import Profiles from './profiles'

class Index extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
      showBanner: true
    }
    this.showBanner = this.showBanner.bind(this);
  }

  showBanner() {
    this.setState(state => ({
      showBanner: !state.showBanner
    }));
  }
  render() {
    if (this.state.showBanner) {
        return (
          <div className="row">
            <button onClick={this.showBanner}>
              <Banner />
            </button>
          </div>
        )
      }
  
      if (this.state.showAbout) {
        return (
          <div className="row">
            <Profiles />
          </div>
        )
      }
  }
}

export default hot(module)(Banner);
