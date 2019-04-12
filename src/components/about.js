import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/about.css";

import Index from './index';

class About extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
      fields: ['About', 'Contact', 'Third Thing', 'Fourth Thing']
    };
  }

  render() {
    if (this.props.showAbout) {
      return (
        <div className="about">
          <div className="top">
            <button className="enter" onClick={this.props.showBanner}>
              <img src={require('../assets/down-arrow.png')}></img>
            </button>
          </div>
          <div className="content">about us</div>
          <div className="bottom">
            <button className="enter" onClick={this.props.showProfiles}>
              <img src={require('../assets/down-arrow.png')} />
            </button>
          </div>
        </div>
        // <div className="about_content">
        //   <img className="split_asterisk asterisk_left" key="asterisk-left" src={require('../assets/asterisk-left.png')} />
        //   <Index fields={this.state.fields}/>
        //   <img className="split_asterisk asterisk_right" key="asterisk-right" src={require('../assets/asterisk-right.png')} />
        // </div>
      );
    } else {
      return null;
    }
  }
}

export default hot(module)(About);
