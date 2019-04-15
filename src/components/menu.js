import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/menu.css";

import MenuBar from './menu_bar';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      pages: [
        {'title': 'About', 'active': false},
        {'title': 'Second Thing', 'active': false},
        {'title': 'Third Thing', 'active': false},
        {'title': 'Contact', 'active': false},
      ],
    }
  }

  setActiveComponent = (id) => {
    const {pages} = this.state;
    Object.entries(pages).map((property) => {
      pages[property[0]].active = (id == property[0] && !pages[property[0]].active);
    });
    this.setState({
      pages,
    });
  }

  render() {
    return (
      <div className="menu_and_details">
        <div className="menu_bar_container">
          {Object.entries(this.state.pages).map(function(page) {
            return <MenuBar key={page[0]} title={page[1].title} id={page[0]} setActiveComponent={this.setActiveComponent} active={page[1].active} />
          }, this )}
        </div>
      </div>
    )
  }
}

export default hot(module)(Menu);
