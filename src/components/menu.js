import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/menu.css";

import MenuBar from './menu_bar';

class Menu extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
      showDetails: false,
      shorten: false,
    }
  }

  toggleBars = () => {
    this.setState({
      shorten: !this.state.shorten
    });
  }
  render() {
    return (
      <div className="menu_bar_container">
        {/* TODO: Make bars dynamic and interactable */}
        {Object.entries(this.props.pages).map(function(page) {
          return <MenuBar key={page[0]} title={page[1]} id={page[0]} showDetails={this.state.showDetails} shorten={this.state.shorten} toggleBars={this.toggleBars}/>
        }, this )}
      </div>
    )
  }
}

export default hot(module)(Menu);
