import React, { Component } from 'react';
import Anim1 from "../Animation/Amin1.js";

class Aticle1 extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {

    return (
      <div>


        <div className="container">
          <div className="texte">
            16.08.2020
        </div>
        <div className="texte2">
           scroll down
        </div>
        </div>
        <div className="vide">
allobouzintai
{!this.state.logo &&<Anim1 />}
        </div>
      </div>
    )
  }
}
export default Aticle1;