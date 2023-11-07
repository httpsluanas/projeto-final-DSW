import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainMenu from '../../library/MainMenu'
import HomePageContainer from '../../HomePageContainer'

import { StyledPageView } from './styles'

const PageView = ({

}) => {
    return (
        <StyledPageView>
            <MainMenu/>
            <StyledPageView.ContentBody>
                <Router>
                    <Switch>
                        <Route path='/' component={HomePageContainer}/>
                    </Switch>
                </Router>
            </StyledPageView.ContentBody>
        </StyledPageView>
    )
}

export default PageView