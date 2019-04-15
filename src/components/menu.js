import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/menu.css";

import MenuBar from './menu_bar';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      showDetails: false,
    }
  }

  // toggleDetails = () => {
  //   console.log(this);
  //   this.setState({
  //     showDetails: !this.state.showDetails,
  //     id: this.state.id,
  //     title: this.state.title
  //   });
  // }

  render() {
    return (
      <div className="menu_and_details">
        <div className="menu_bar_container">
          {Object.entries(this.props.pages).map(function(page) {
            return <MenuBar key={page[0]} title={page[1]} id={page[0]} toggleDetails={this.toggleDetails} showDetails={this.state.showDetails} />
          }, this )}
        </div>
      </div>
    )
  }
}

export default hot(module)(Menu);
