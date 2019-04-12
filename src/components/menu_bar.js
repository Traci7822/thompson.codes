import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/menu_bar.css";

class MenuBar extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
    }
  }

  render() {
    return (
      <div className={'menu_bar menu_bar_' + this.props.id} >
        <h1 className="page_title">{this.props.title}</h1>
      </div>
    )
  }
}

export default hot(module)(MenuBar);