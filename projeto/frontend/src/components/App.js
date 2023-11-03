import React, { Component, Fragment } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from './library/global'

import PageView from './view/PageView'

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <PageView/>
      </Fragment>
    );
  }
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App />);