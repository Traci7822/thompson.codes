import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/menu_bar.css";


class MenuBarTitle extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className="menu_bar_content">
        <h1 className="page_title" >{this.props.title}</h1>
      </div>
    )
  }
}

export default hot(module)(MenuBarTitle);
