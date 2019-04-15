import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/menu_bar.css";
import MenuBarTitle from './menu_bar_title';
import Details from './details';


class MenuBar extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  toggleDetails = () => {
    this.props.setActiveComponent(this.props.id);
  }

  render() {
    let details;
    let status = this.props.active ? ' active' : ' inactive';
    if (this.props.active) {
      details = <Details key={this.state.title} title={this.state.title} id={this.state.id} showDetails={this.props.active} />;
    } else {
      details = '';
    }
    return (
      <div className={"menu_bar_row" + status} onClick={this.toggleDetails}>
        <div className={"menu_bar menu_bar_" + this.props.id}>
          <MenuBarTitle title={this.props.title} />
        </div>
        {/* <div className={"details_container active"}>
          {details}
        </div> */}
      </div>
    )
  }
}

export default hot(module)(MenuBar);