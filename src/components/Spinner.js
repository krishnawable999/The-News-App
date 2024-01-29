import React, { Component } from 'react'
import loading_spinner from "./images/loading_spinner.gif";
export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading_spinner} alt="loading" />
      </div>
    )
  }
}
