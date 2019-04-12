import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/menu.css";

import MenuBar from './menu_bar';

class Menu extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
    }
  }

  render() {
    return (
      <div className="menu_bar_container">
        {/* TODO: Make bars dynamic and interactable */}
        {Object.entries(this.props.pages).map(function(page) {
          return <MenuBar title={page[1]} id={page[0]} />
        })}
      </div>
    )
  }
}

export default hot(module)(Menu);
