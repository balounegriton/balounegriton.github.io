
import './App.css';
import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import logo from "./image/logo.png";
import Cover0 from './component/Cover0.js'
import Cover1 from './component/Cover1.js'
import Cover2 from './component/Cover2.js'
import Cover3 from './component/Cover3.js'
import HandleArticle from './component/HandleArticle.js';




let reactSwipeEl;

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);


class App extends Component {
  constructor() {
    super();

    this.state = {
      active: 0,
      logo: false
    };
  }

  update = () => {
    this.setState({
      active: reactSwipeEl.getPos()
    }
    )
    if (reactSwipeEl.getPos() === 0) {
  document.getElementById("logo").className="logoOff"
    }
    if (reactSwipeEl.getPos() >= 1) {
      document.getElementById("logo").className="logo"
    }
  }



  render() {
    return (
      <div className="App">
        <div>
          <ReactSwipe
            className="carousel"
            swipeOptions={{
              continuous: false,
              callback: this.update,
            }}
            ref={el => (reactSwipeEl = el)}  >


            <div ><Cover0 /></div>
            <div ><Cover1 /></div>
            <div ><Cover2 /></div>
            <div ><Cover3 /></div>

          </ReactSwipe>


        </div>

        <HandleArticle active={this.state.active} />
        <img className="logoOff" id="logo" src={logo} alt="logo" />
      </div>
    )
  }
}

export default App;

