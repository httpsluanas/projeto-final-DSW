import React from 'react'
import GlobalStyle from './library/global'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import PageView from './view/PageView'
import LoginView from './view/LoginView'
import RegisterView from './view/RegisterView'

import { PathsContext } from './Utils/utils';
import { UserProvider } from './Utils/user-utils';

function App() {
  
    const paths = {
        login: () => '/login',
        signup: () => '/signup',
        homePage: () => '/project'
    }

    return (
        <>
            <GlobalStyle/>
            <ToastContainer position="bottom-left"
                            theme="dark"/>
            <PathsContext.Provider value={paths}>
                <Router>
                    <Redirect exact from={'/'} to={paths.login()}/>
                    <UserProvider>
                        <Switch>
                            <Route exact path={paths.login()}>
                                <LoginView/>
                            </Route>
                            <Route path={paths.signup()}>
                                <RegisterView/>
                            </Route>
                            <Route path={paths.homePage()}>
                                <PageView/>
                            </Route>
                        </Switch>
                    </UserProvider>
                </Router>
            </PathsContext.Provider>
    </>
  )
}

export default App