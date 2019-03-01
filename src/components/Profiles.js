import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/profiles.css";

import Bryan from './bryan'
import Traci from './traci'

class Profiles extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
      results: {}
    }
  }
  render() {
    return (
      <div className="profiles">
        <div className="traci">
          <Traci />
        </div>
        <div className="bryan">
          <Bryan />
        </div>
      </div>
    );
  }
}

export default hot(module)(Profiles);
