import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Test2 from "./Test2.jsx";

export default class Test1 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h2 className="test1-h2">Hello , I'm Test1...</h2>
        <Test2 />
      </div>
    )
  }

  openProfile() {

  }

}
