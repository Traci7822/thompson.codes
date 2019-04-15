import React, { Component } from "react";
import {hot} from "react-hot-loader";

import ProfileText from './profile_text';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      results: {}
    }
  }

  render() {
    return (
      <div className={'profile active_' + this.props.profileStatus + ' ' + this.props.person[0].toLowerCase()}>
        <a className='profile_link' href={this.props.person[1]} target="_blank" />
      </div>
    );
  }
}

export default hot(module)(Profile);
