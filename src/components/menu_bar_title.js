import React, { Component } from "react";
import PropTypes from "prop-types";
import {hot} from "react-hot-loader";
import "../styles/menu_bar.css";

class MenuBarTitle extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
    }
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  render() {
    return (
      <h1 className="page_title" >{this.props.title}</h1>
    )
  }
}

export default hot(module)(MenuBarTitle);
