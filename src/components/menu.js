import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/menu.css";
import Details from './details';

import MenuBar from './menu_bar';

class Menu extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
      showDetails: false,
    }
  }

  toggleDetails = () => {
    console.log(this);
    this.setState({
      showDetails: !this.state.showDetails,
      id: this.state.id,
      title: this.state.title
    });
  }

  render() {
    // const details = null;
    let details;
    if (this.state.showDetails) {
      details = <Details key={this.state.title} title={this.state.title} id={this.state.id} showDetails={this.state.showDetails} />;
    } else {
      details = '';
    }
    return (
      <div className="menu_and_details">
        <div className="menu_bar_container">
          {/* TODO: Make bars dynamic and interactable */}
          {Object.entries(this.props.pages).map(function(page) {
            return <MenuBar key={page[0]} title={page[1]} id={page[0]} toggleDetails={this.toggleDetails}/>
          }, this )}
        </div>
        {/* set this over the menubar container */}
        <div className="details_container">
          {details}
        </div>
      </div>
    )
  }
}

export default hot(module)(Menu);
