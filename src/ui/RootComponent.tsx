import React, { Component } from "react";
import CSSModules from "react-css-modules";
import styles from "./RootComponent.css";

@CSSModules(styles)
class RootComponent extends Component {
  public render() {
    return (
      <div>
        <h1>Root component</h1>
        <h2 styleName="test">Test</h2>
      </div>
    );
  }
}

export default RootComponent;
