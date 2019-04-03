import React, { Component } from "react";
import {hot} from "react-hot-loader";

import ProfileText from './profile_text';

class Profile extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
      results: {}
    }
  }

  render() {
    return (
      <div className={'profile ' + this.props.profile_size + ' ' + this.props.person[0].toLowerCase()}>
          <a className='profile_link' href={this.props.person[1]} target="_blank" />
      </div>
    );
  }
}

export default hot(module)(Profile);
