import { useState } from "react";
 import React from "react";
import ErrorBoundary from "./ErrorBoundaryDemo";
class CounterComp extends React.Component {  
    constructor(props) {  
      super(props);  
      this.state = { counter: 0 };  
      this.handleClick = this.handleClick.bind(this);  
    }  
      
    handleClick() {  
      this.setState(({counter}) => ({  
        counter: counter + 1  
      }));  
    }  
      
    render() {  
      if (this.state.counter === 3) {  
        throw new Error('I crashed!');  
      }  
      return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;  
    }  
  }  
export default CounterComp