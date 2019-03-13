import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/profiles.css";

import Profile from './profile'

class Profiles extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
      people: {
        Traci: "http://www.tracihthompson.com",
        Bryan: "http://www.snowboardtechie.com"
      }
    };
  }
  render() {
    return (
      <div className="profiles">
        {Object.entries(this.state.people).map(function(person) {
          return <Profile key={person} person={person} />
        })}
      </div>
    );
  }
}

export default hot(module)(Profiles);
