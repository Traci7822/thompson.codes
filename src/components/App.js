import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/App.css";

import Banner from './Banner'
import Profiles from './Profiles'

class App extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
      results: {}
    }
  }
  render() {
    return (
      <div className="App">
        <div className="row">
          <Banner />
          <Profiles />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
