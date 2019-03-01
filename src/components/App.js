import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/app.css";

import Banner from './banner'
import Profiles from './profiles'

class App extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
      results: {}
    }
  }
  render() {
    return (
      <div className="app">
        <div className="row">
          <Banner />
          <Profiles />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
