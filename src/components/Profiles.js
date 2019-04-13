import React, { Component } from "react";
import PropTypes from "prop-types";
import {hot} from "react-hot-loader";
import "../styles/profiles.css";

import Profile from './profile'

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

  static propTypes = {
    showProfiles: PropTypes.bool,
    showIndex: PropTypes.func.isRequired,
  }
  render() {
    if (!this.props.showProfiles) {
      return null;
    }

    const profile_size = this.state.expand ? "small_profile" : "large_profile";

    return (
      <div className="profiles_container">
        <div className="header">
          <button className="top_button" onClick={this.props.showIndex}>
            <img src={require('../assets/down-arrow.png')}></img>
          </button>
        </div>
        <div className='profiles'>
          {Object.entries(this.state.people).map(function(person) {
            return <Profile key={person} person={person} profile_size={profile_size}/>
          })}
        </div>
      </div>
    );
  }
}

export default hot(module)(Profiles);
