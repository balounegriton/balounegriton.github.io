import React, { Component } from 'react';
import '../App.css';

import cover0 from "../image/logo.png";

class Cover0 extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {

    return (
      <div className="container black">
        <div className="box2">
          <img className="intro" id="intro" src={cover0} alt="intro" />
        </div>
      </div>
    )
  }
}
export default Cover0;
