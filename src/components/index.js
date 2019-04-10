import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/index.css";

import Page from './page';

class Index extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
    }
  }

  render() {
    if (this.props.expand) {
      return (
        <div className="pages">
          <img className="split_asterisk asterisk_left" key="asterisk-left" src={require('../assets/asterisk-left.png')} />
          {this.props.fields.map(function(field) {
            return <Page key={field} field={field} />
          })}
          <img className="split_asterisk asterisk_right" key="asterisk-right" src={require('../assets/asterisk-right.png')} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default hot(module)(Index);
