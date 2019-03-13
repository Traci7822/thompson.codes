import React, { Component } from "react";
import {hot} from "react-hot-loader";

class Profile extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
      results: {}
    }
  }

  render() {
    return (
      <div>
        <h1 className="name"><a href={this.props.person[1]} target="_blank">{this.props.person[0]}</a></h1>
        <img className="profile_image" src={require(`../assets/${this.props.person[0].toLowerCase()}.jpg`)}/>
      </div>
    );
  }
}

export default hot(module)(Profile);
