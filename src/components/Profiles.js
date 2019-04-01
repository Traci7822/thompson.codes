import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/profiles.css";

import Profile from './profile'
import About from './about'

class Profiles extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
      // turn people into props
      people: {
        Traci: "http://www.tracihthompson.com",
        Bryan: "http://www.snowboardtechie.com"
      },
    };
  }

  render() {
    if (!this.props.showProfiles) {
      return null;
    }

    return (
      <div className="profiles">
        {Object.entries(this.state.people).map(function(person) {
          return <Profile key={person} person={person} />
        })}
        <div className="about_us">
          <About />
        </div>
      </div>
    );
  }
}

export default hot(module)(Profiles);