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
      showAbout: false,
      showProfiles: false
    }
  }

  toggleBanner = () => {
    this.setState({
      showAbout: !this.state.showAbout,
      showBanner: !this.state.showBanner,
    })
  }

  toggleAbout = () => {
    this.setState({
      showAbout: !this.state.showAbout,
      showProfiles: !this.state.showProfiles
    })
  }

  toggleProfiles = () => {
    this.setState({
      showBanner: !this.state.showBanner,
      showProfiles: !this.state.showProfiles
    })
  }

  render() {
    return (
      <div>
        <Banner toggleBanner={this.toggleBanner} showBanner={this.state.showBanner} />
        <About toggleAbout={this.toggleAbout} showAbout={this.state.showAbout} />
        <Profiles toggleProfiles={this.toggleProfiles} showProfiles={this.state.showProfiles} />
      </div>
    )
  }
}

export default hot(module)(App);
