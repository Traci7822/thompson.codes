import React, { Component } from "react";
import PropTypes from "prop-types";
import {hot} from "react-hot-loader";
import "../styles/details.css";

class Details extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
      contact: {
        'Email': 'contact@thompson.codes',
        'Phone': '303-870-9814'
      },
      about: {
        'Traci': 'is Traci',
        'Bryan': 'is Bryan',
      }
    }
  }
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    showDetails: PropTypes.bool.isRequired,
  }
  render() {
    if (!this.props.showDetails) {
      return null;
    } else {
      const title = this.props.title.toLowerCase();
      return (
        <div className={"details_" + this.props.id}>
          {Object.keys(this.state).map((key) => {
            console.log(key);
            console.log(title);
            if (key == title) {
              return Object.keys(this.state[key]).map((property) => {
                return <div key={property}>{this.state[key][property]}</div>
              });
            }
          }, this)}
        </div>
      );
    }
  }
}

export default hot(module)(Details);
