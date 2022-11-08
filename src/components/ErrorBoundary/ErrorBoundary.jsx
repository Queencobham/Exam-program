import React, { Component } from "react"
import {TfiFaceSad} from "react-icons/tfi"
import { Link } from "react-router-dom";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
     
    this.state = {
      hasError: false,
      message: ""
    };
  }
  static getDerivedStateFromError(error) {
    console.log(error)
    return {
      hasError: true,
      message: error.message
    };
  }
  

  render() {
    if (this.state.hasError) {
      return (
        <div className="errors">
         <span><TfiFaceSad /></span>
         <h1>Aw, snap!</h1>
         <p>Something went wrong while displaying this webpage</p>
         <p className="error-code">Error code: <span>{this.state.message}</span></p>
         <Link to="/">Go Home</Link>
       </div>
      )
    }
    return this.props.children;
  }
}
