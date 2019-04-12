import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/menu_bar.css";
import Details from './details';

class MenuBar extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
    }
  }

  render() {
    return (
      <div className="menu_bar_row">
        <div className={'menu_bar menu_bar_' + this.props.id} onClick={this.props.toggleDetails}>
          <h1 className="page_title" >{this.props.title}</h1>
        </div>
        <div className='details'>
          <Details key={this.props.title} title={this.props.title} id={this.props.id} showDetails={this.props.showDetails} />
        </div>
      </div>
    )
  }
}

export default hot(module)(MenuBar);
