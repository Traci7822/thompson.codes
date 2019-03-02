import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/profiles.css";

import Profile from './profile'

class Profiles extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
      names: ["Traci", "Bryan"]
    };
  }
  render() {
    return (
      <div className="profiles">
        {this.state.names.map(item => (
          <Profile key={item} name={item} />
        ))}
      </div>
    );
  }
}

export default hot(module)(Profiles);
