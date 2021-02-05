import React, { Component } from 'react';
import Article1 from './article/Article1.js'
import Article2 from './article/Article2.js'
import Article3 from './article/Article3.js'
import '../App.css';
class HandleArticle extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {

    if (this.props.active === 1) {
      return (
        <div>
         <Article1 />
        </div>
      )
    }
    if (this.props.active === 2) {
      return (
        <div>
         <Article2 />
        </div>
      )
    }
    if (this.props.active === 3) {
      return (
        <div>
          <Article3 />
        </div>
      )
    }


    else {
      return (
        <div>
        </div>

      )
    }


  }
















}



export default HandleArticle;
