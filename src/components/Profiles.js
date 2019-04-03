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
      expand: false
    };
  }

  expandAbout = () => {
    this.setState({
      expand: !this.state.expand
    });
  }

  render() {
    if (!this.props.showProfiles) {
      return null;
    }

    const about_size = this.state.expand ? "large_about" : "small_about";
    const profile_size = this.state.expand ? "small_profile" : "large_profile";

    return (
      <div className='profiles'>
        {Object.entries(this.state.people).map(function(person) {
          return <Profile key={person} person={person} profile_size={profile_size}/>
        })}
        <div className={'about_us ' + about_size} onClick={this.expandAbout}>
          <About expand={this.state.expand}/>
        </div>
      </div>
    );
  }
}

export default hot(module)(Profiles);