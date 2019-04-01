import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/app.css";

import Banner from './banner'
import Profiles from './profiles'

class App extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
      showBanner: true,
      showProfiles: false
    }
  }

  toggleBanner = () => {
    this.setState({
      showProfiles: !this.state.showProfiles,
      showBanner: !this.state.showBanner
    })
  }

  render() {
    return (
      <div>
        <Banner toggleBanner={this.toggleBanner} showBanner={this.state.showBanner} />
        <Profiles showProfiles={this.state.showProfiles} />
      </div>
    )
  }
}

export default hot(module)(App);
