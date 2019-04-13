import React, { Component } from "react";
import PropTypes from "prop-types";
import {hot} from "react-hot-loader";
import "../styles/menu_bar.css";
import MenuBarTitle from './menu_bar_title';
import Details from './details';

class MenuBar extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
    }
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    showDetails: PropTypes.bool.isRequired,
    toggleDetails: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
  }
  render() {
    return (
      <div className="menu_bar_row">
        <div className={"menu_bar menu_bar_" + this.props.id} onClick={this.props.toggleDetails}>
          <MenuBarTitle title={this.props.title} />
        </div>

        <div className='details'>
          <Details key={this.props.title} title={this.props.title} id={this.props.id} showDetails={this.props.showDetails} />
        </div>
      </div>
    )
  }
}

export default hot(module)(MenuBar);
