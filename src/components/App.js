import React, { Component } from "react";
import {hot} from "react-hot-loader";
import { BrowserRouter } from 'react-router-dom';
import "../styles/app.css";

import Banner from './banner'
import Index from './index'
import Profiles from './profiles'

class App extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
      showBanner: true,
      showProfiles: false,
      expand: false,
      fields: ['About', 'Contact', 'Third Thing', 'Fourth Thing'],
    }
  }

  toggleBanner = () => {
    this.setState({
      showProfiles: !this.state.showProfiles,
      showBanner: !this.state.showBanner
    })
  }

  expandIndex = () => {
    if (this.state.expand == true) {
      return null;
    }
    this.setState({
      expand: !this.state.expand
    });
  }

  render() {
    // const about_size = this.state.expand ? "large_about" : "small_about";
    const index_status = this.state.expand ? "large" : "small";

    return (
      <BrowserRouter>
        <div>
          <Banner toggleBanner={this.toggleBanner} showBanner={this.state.showBanner} />
          <div className="content">
            <div className={'index ' + index_status} onClick={this.expandIndex}>
              <Index expand={this.state.expand} fields={this.state.fields}/>
            </div>
            <Profiles showProfiles={this.state.showProfiles} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default hot(module)(App);
