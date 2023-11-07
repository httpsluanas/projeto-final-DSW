import React, { Component, Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle from './library/global'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import PageView from './view/PageView'

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <ToastContainer position="bottom-left"
                        theme="dark"/>
        <PageView/>
      </Fragment>
    );
  }
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);