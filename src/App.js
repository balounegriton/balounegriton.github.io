
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

