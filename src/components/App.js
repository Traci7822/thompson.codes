import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/app.css";

import Banner from './banner'
import About from './about'
import Profiles from './profiles'

class App extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
      showBanner: true,
      showProfiles: false,
      expand: false,
    }
  }

  toggleBanner = () => {
    this.setState({
      showProfiles: !this.state.showProfiles,
      showBanner: !this.state.showBanner
    })
  }

  expandAbout = () => {
    this.setState({
      expand: !this.state.expand
    });
  }

  render() {
    const about_size = this.state.expand ? "large_about" : "small_about";

    return (
      <div>
        <Banner toggleBanner={this.toggleBanner} showBanner={this.state.showBanner} />
        <div className="content">
          <div className={'about_us ' + about_size} onClick={this.expandAbout}>
            <About expand={this.state.expand}/>
          </div>
          <Profiles showProfiles={this.state.showProfiles} />
        </div>
      </div>
    )
  }
}

export default hot(module)(App);
