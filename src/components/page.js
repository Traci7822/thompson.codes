import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/page.css";
import { Link } from 'react-router-dom';



class Page extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
    }
  }

  lowerProfiles = () => {

  }

  render() {
    return (
      <div className="page">
        <h1>
          <Link to={`./${this.props.field}`} onClick={this.lowerProfiles}>{this.props.field}</Link>
        </h1>
      </div>
    );
  }
}

export default hot(module)(Page);
