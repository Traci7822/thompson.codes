import React, { Component } from "react";
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

  toggleDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails,
    });
    this.props.toggleBars();
  }

  render() {
    const enlarge = this.state.showDetails ? ' enlarge' : '';
    const shorten = this.props.shorten ? ' shorten' : '';
    return (
      <div className={"menu_bar_row"}>
        <div className={"menu_bar menu_bar_" + this.props.id + enlarge} onClick={this.toggleDetails}>
          <MenuBarTitle title={this.props.title} />
        </div>

        {/* Don't show details except for the clicked title bar */}
        <div className='details'>
          <Details key={this.props.title} title={this.props.title} id={this.props.id} showDetails={this.state.showDetails} />
        </div>
      </div>
    )
  }
}

export default hot(module)(MenuBar);
