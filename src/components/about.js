import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/about.css";

class About extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
    };
  }

  render() {
    const header = React.createElement('h1', {}, 'The Thompsons');
    const body = React.createElement('p', {}, 'Are amazing');
    const content = React.createElement('div', {}, [header, body]);

    return (
      <div className="about_link">
        {this.props.expand ? content : ''}
      </div>
    );
  }
}

export default hot(module)(About);
