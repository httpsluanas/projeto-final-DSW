import React from 'react'
import GlobalStyle from './library/global'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import PageView from './view/PageView'

function App() {
  return (
    <>
        <GlobalStyle/>
        <ToastContainer position="bottom-left"
                        theme="dark"/>
        <PageView/>
    </>
  )
}

export default App