import React, { Component } from "react";
import Universal from "../HocCount/HocCount";

class CountMouseOver extends Component {
  
  render() {
    const { inc, count } = this.props;
    return (
      <>
        <button onMouseOver={inc}>+</button>
        <p>{count}</p>
      </>
    );
  }
}
export default Universal(CountMouseOver)