import React, { Component } from "react";
import PropTypes from "prop-types";
import {hot} from "react-hot-loader";
import "../styles/index.css";

import Menu from './menu';

class Index extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
      pages: ['About', 'Second Thing', 'Third Thing', 'Contact']
    };
  }

  static propTypes = {
    showIndex: PropTypes.bool.isRequired,
    showBanner: PropTypes.func.isRequired,
    showProfiles: PropTypes.func.isRequired,
  }
  render() {
    if (this.props.showIndex) {
      return (
        <div className="index">

          <div className="header">
            <button className="top_button" onClick={this.props.showBanner}>
              <img src={require('../assets/down-arrow.png')}></img>
            </button>
          </div>

          <div className="menu">
            <Menu pages={this.state.pages} />
          </div>

          <div className="footer">
            <button className="bottom_button" onClick={this.props.showProfiles}>
              <img src={require('../assets/down-arrow.png')} />
            </button>
          </div>

        </div> // !-- index
      );
    } else {
      return null;
    }
  }
}

export default hot(module)(Index);
