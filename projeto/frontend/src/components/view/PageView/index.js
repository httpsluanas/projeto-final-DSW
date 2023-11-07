import React from 'react'

import MainMenu from '../../library/MainMenu'
import HomePageContainer from '../../HomePageContainer'

import { StyledPageView } from './styles'

const PageView = ({

}) => {
    return (
        <StyledPageView>
            <MainMenu/>
            <StyledPageView.ContentBody>
                <HomePageContainer/>
            </StyledPageView.ContentBody>
        </StyledPageView>
    )
}

export default PageView