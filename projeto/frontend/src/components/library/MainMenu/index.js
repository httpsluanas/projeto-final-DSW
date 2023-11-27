import React from 'react'
import { useHistory } from 'react-router-dom'

import { StyledMainMenu } from './styles'
import { Estate, History, InfoCircle, Signout } from '../icons/index'

import { usePaths } from '../../Utils/utils'
import { useUser } from '../../Utils/user-utils'

const MainMenu = ({
    user,
    isOpen
}) => {
    const paths = usePaths()
    const history = useHistory()

    const { updateUser } = useUser()

    const handleLogout = () => {
        updateUser(null)
        history.push('/')
      }

    return (
        <StyledMainMenu>
            <StyledMainMenu.List>
                <StyledMainMenu.Item.Profile>
                    <dl>
                        <dt>@{user.username}</dt>
                        <dd>{user.email}</dd>
                    </dl>
                </StyledMainMenu.Item.Profile>
                <StyledMainMenu.Item.Link>
                    <StyledMainMenu.Link to={paths.home()}>
                        <Estate/>
                        Página inicial
                    </StyledMainMenu.Link>
                </StyledMainMenu.Item.Link>
                <StyledMainMenu.Item.Link>
                    <StyledMainMenu.Link to={paths.history()}>
                        <History/>
                        Histórico
                    </StyledMainMenu.Link>
                </StyledMainMenu.Item.Link>
                <StyledMainMenu.Item.Link>
                    <StyledMainMenu.Link to={paths.help()}>
                        <InfoCircle/>
                        Ajuda e informações
                    </StyledMainMenu.Link>
                </StyledMainMenu.Item.Link>
                <StyledMainMenu.Item.Link>
                    <StyledMainMenu.Link to={'/'} onClick={handleLogout}>
                        <Signout/>
                        Sair
                    </StyledMainMenu.Link>
                </StyledMainMenu.Item.Link>
            </StyledMainMenu.List>
        </StyledMainMenu>
    )
}

export default MainMenu