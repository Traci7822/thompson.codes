import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/app.css";

import Banner from './banner'
import Profiles from './profiles'
import About from './about'

class App extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
      showBanner: true,
      showAbout: true,
      showProfiles: true
    }
    this.displayBanner = this.displayBanner.bind(this);
    this.hideBanner = this.hideBanner.bind(this);
    this.displayProfiles = this.displayProfiles.bind(this);

  }

  displayBanner() {
    this.setState({
      showBanner: true,
      showAbout: false,
      showProfiles: false
    })
  }

  hideBanner() {
    this.setState({
      showBanner: false,
      showAbout: true,
      showProfiles: false
    })
  }

  displayProfiles() {
    this.setState({
      showBanner: false,
      showAbout: false,
      showProfiles: true
    })
  }

  render() {
    // Figure out how to actual do conditional rendering
    if (this.state.showBanner) {
     return (
        <div className="app">
          <div className="row">
            <button className="banner" onClick={this.hideBanner}>
              <Banner />
            </button>
          </div>
        </div>
      )
    }

    if (this.state.showAbout) {
      return (
        <div className="app">
          <div className="row">
            <button className="about" onClick={this.displayProfiles}>
              <About />
            </button>
          </div>
        </div>
      )
    }

    if (this.state.showProfiles) {
      return (
        <div className="app">
          <div className="row">
            <button className="about" onClick={this.displayBanner}>
              <Profiles />
            </button>
          </div>
        </div>
      )
    }
  }
}

export default hot(module)(App);
