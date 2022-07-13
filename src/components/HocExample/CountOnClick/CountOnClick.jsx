import React, { Component } from "react";
import Universal from "../HocCount/HocCount";

class CountOnClick extends Component {
  render() {
    const { inc, count } = this.props;
    return (
      <>
        <button onClick={inc}>+</button>
        <p>{count}</p>
      </>
    );
  }
}
export default Universal(CountOnClick);
