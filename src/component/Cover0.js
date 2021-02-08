import React, { Component } from 'react';
import '../App.css';
import Anim0 from "./Animation/Amin0.js";
import Anim1 from "./Animation/Amin1.js";
import Anim2 from "./Animation/Amin2.js";

class Cover0 extends Component {
  constructor() {
    super();
    this.state = {
      anim: true,
    };
  }
  animLogo = () => { 
   this.setState({ anim: false });
   setTimeout(this.fin, 3000);
  }
  fin = () => {
    this.setState({ anim: true });
   }

  render() {

    return (
      <div className="container black">
        <div className="box2">

          <div className="anim1">
            <div className="anim0">
              {this.state.anim && <div onClick={this.animLogo}><Anim0 /></div>}
            </div>
            {this.state.anim &&
              <Anim1 />
            }
            {!this.state.anim &&
              <Anim2 />
            }

          </div>

        </div>
      </div>
    )
  }
}
export default Cover0;
