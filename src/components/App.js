import React, { Component } from "react";
import {hot} from "react-hot-loader";
import { BrowserRouter } from 'react-router-dom';
import "../styles/app.css";

import Banner from './banner'
import About from './about'
import Profiles from './profiles'

class App extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
      showBanner: true,
      showAbout: false,
      // showProfiles: false,
      // expand: false,
      // active: false,
      // fields: ['About', 'Contact', 'Third Thing', 'Fourth Thing'],
    }
  }

  // TODO: Make these dynamic so toggles right page on and all others off
  showAbout = () => {
    this.setState({
      showAbout: true,
      showBanner: false,
      showProfiles: false,
    });
  }

  showBanner = () => {
    this.setState({
      showAbout: false,
      showBanner: true,
      showProfiles: false,
    })
  }

  showProfiles = () => {
    this.setState({
      showAbout: false,
      showBanner: false,
      showProfiles: true,
    })
  }


  render() {
    return (
      <BrowserRouter>
        <div className="front">
          <Banner showBanner={this.state.showBanner} showAbout={this.showAbout} />
          <About showAbout={this.state.showAbout} showBanner={this.showBanner} showProfiles={this.showProfiles}/>
          <Profiles showProfiles={this.state.showProfiles} />
        </div>
      </BrowserRouter>
    )
  }
}

export default hot(module)(App);
