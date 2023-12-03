import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import HomePageContainer from '../../HomePageContainer'
import HistoryContainer from '../../HistoryContainer'
import HelpContainer from '../../HelpContainer';
import LoginContainer from '../../LoginContainer';
import RegisterContainer from '../../RegisterContainer';
import Header from '../../library/header';

import { PathsContext } from '../../Utils/utils'
import { useUser } from '../../Utils/user-utils';

import { StyledPageView } from './styles'

const PageView = ({

}) => {

    const { userInfo } = useUser()

    const paths = {
        login: () => '/',
        signup: () => '/signup',
        project: () => '/project',
        home: () => '/project/home',
        history: () => '/project/history',
        help: () => '/project/help'
    }

    if (!userInfo || !userInfo?.user_info) ( <Redirect to={paths.login()} /> )

    return (
        <StyledPageView>
            <PathsContext.Provider value={paths}>
                <Router>
                    <Switch>
                        <Route exact path={paths.login()}>
                            <LoginContainer/>
                        </Route>
                        <Route exact path={paths.signup()}>
                            <RegisterContainer/>
                        </Route>
                        <Route path={paths.project()}>
                            <Header user={!!userInfo ? userInfo.user_info : {}}/>
                            <StyledPageView.ContentBody>
                                <Switch>
                                    <Route path={paths.home()}>
                                        <HomePageContainer/>
                                    </Route>
                                    <Route path={paths.history()}>
                                        <HistoryContainer/>
                                    </Route>
                                    <Route path={paths.help()}>
                                        <HelpContainer/>
                                    </Route>
                                </Switch>
                            </StyledPageView.ContentBody>
                        </Route>
                    </Switch>
                </Router>
            </PathsContext.Provider>
        </StyledPageView>
    )
}

export default PageView