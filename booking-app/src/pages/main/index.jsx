import React, { Component } from 'react';
import './main.css'
import Menu from './Menu'


class main extends Component {
  render() {
    return (
        <div className="main-holder">
          <Menu></Menu>
          <div className="home-holder content-wrapper">
            {this.props.children}
          </div>
        </div>

    );
  }
}

export default main;
