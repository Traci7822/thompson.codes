import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/profiles.css";

import Profile from './profile'

class Profiles extends Component {
  constructor() {
    super();
    this.state = {
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

    const profile_size = this.state.expand ? "small_profile" : "large_profile";

    return (
      <div className='profiles'>
        {Object.entries(this.state.people).map(function(person) {
          return <Profile key={person} person={person} profile_size={profile_size}/>
        })}
      </div>
    );
  }
}

export default hot(module)(Profiles);