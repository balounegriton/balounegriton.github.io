import React, { Component } from 'react';
import '../App.css';

import cover from "../image/cover2.png";

class Cover0 extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="container">
        <div className="box"   >
          <div className="">
            <img className="cover" id="cover" src={cover} alt="cover" />
          </div>
        </div>
      </div>
    )
  }
}

export default Cover0;
