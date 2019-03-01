import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/Profiles.css";

import Bryan from './Bryan'
import Traci from './Traci'

class Profiles extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
      results: {}
    }
  }
  render() {
    return (
      <div className="Profiles">
        <div className="Traci">
          <Traci />
        </div>
        <div className="Bryan">
          <Bryan />
        </div>
      </div>
    );
  }
}

export default hot(module)(Profiles);
