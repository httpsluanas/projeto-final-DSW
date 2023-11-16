import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import MainMenu from '../../library/mainMenu'
import HomePageContainer from '../../HomePageContainer'
import HistoryContainer from '../../HistoryContainer'

import { PathsContext, usePaths } from '../../Utils/utils'
import { useUser } from '../../Utils/user-utils';

import { StyledPageView } from './styles'

const PageView = ({

}) => {

    const paths = usePaths()
    const { userInfo } = useUser();

    const currentPaths = {
        home: () => '/project',
        history: () => '/project/history'
    }

    if (!userInfo || !userInfo.user_info) {
        return <Redirect to={paths.login()} />
      }

    return (
        <StyledPageView>
            <Redirect exact from={paths.homePage()} to={currentPaths.home()}/>
            <PathsContext.Provider value={currentPaths}>
                <Router>
                    <MainMenu user={userInfo.user_info}/>
                    <StyledPageView.ContentBody>
                        <Switch>
                            <Route exact path={currentPaths.home()}>
                                <HomePageContainer/>
                            </Route>
                            <Route path={currentPaths.history()}>
                                <HistoryContainer/>
                            </Route>
                        </Switch>
                    </StyledPageView.ContentBody>
                </Router>
            </PathsContext.Provider>
        </StyledPageView>
    )
}

export default PageView