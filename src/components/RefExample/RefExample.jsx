import React, { Component, createRef } from "react";

export default class RefExample extends Component {
  constructor(props) {
    super(props);
    this.textInput=createRef()

  }
handleFocus=()=>{
  this.textInput.current.focus()
}
  render() {
    return (
      <>
        <button onClick={this.handleFocus}>btn</button>
        <input type="text" ref={this.textInput}/>
      </>
    );
  }
}
