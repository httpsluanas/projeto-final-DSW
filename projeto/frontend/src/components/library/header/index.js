import React from 'react'

import MainMenu from '../mainMenu'

import { StyledHeader } from './styles'

const Header = ({
    user
}) => {

    return (
        <StyledHeader>
            <MainMenu/>
            <StyledHeader.Profile>
                <dl>
                    <dt>@{user.username}</dt>
                    <dd>{user.email}</dd>
                </dl>
            </StyledHeader.Profile>
        </StyledHeader>
    )
}

export default Header