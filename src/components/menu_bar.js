import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/menu_bar.css";
import MenuBarTitle from './menu_bar_title';

class MenuBar extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
    }
  }

  toggleDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails,
      id: this.props.id,
      title: this.props.title
    });
    this.props.toggleDetails();
  }

  render() {
    return (
      <div className={"menu_bar_row"} onMouseOver={this.toggleDetails} onMouseOut={this.toggleDetails}>
        <div className={"menu_bar menu_bar_" + this.props.id}>
          <MenuBarTitle title={this.props.title} />
        </div>


      </div>
    )
  }
}

export default hot(module)(MenuBar);
