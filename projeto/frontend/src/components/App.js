import React, { Component } from "react";
import { createRoot } from "react-dom/client";

import MapContainer from "./MapContainer";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <MapContainer/>
    );
  }
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App />);