import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";

import RootComponent from "ui/RootComponent";
import "styles/global.css";

const ROOT_ELEMENT = document.getElementById("app-root");

function renderApp(Component) {
  render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    ROOT_ELEMENT,
  );
}

renderApp(RootComponent);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept("ui/RootComponent", () => {
    const NewRootComponent = require("ui/RootComponent").default;
    renderApp(NewRootComponent);
  });
}
