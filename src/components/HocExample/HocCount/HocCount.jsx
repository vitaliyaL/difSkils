import React, { Component } from "react";

function Universal(Original) {
  class NewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
        };
      }
      inc = () => {
        this.setState((prev) => {
          return {
            count: prev.count + 1,
          };
        });
      };
      render() {
        return (
          <>
          <Original count={this.state.count} inc={this.inc}/>
          </>
        );
      }
  }
  return NewComponent;
}

export  default Universal;