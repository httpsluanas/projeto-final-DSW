import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Estate, History, InfoCircle, Signout, Bars } from '../icons/index'
import { SecondaryButton } from '../buttons'

import { usePaths } from '../../Utils/utils'
import { useUser } from '../../Utils/user-utils'

import { StyledMainMenu } from './styles'

const MainMenu = ({

}) => {
    const paths = usePaths()
    const history = useHistory()

    const [isOpen, setOpenMenu] = useState(false)

    const { updateUser } = useUser()

    const handleLogout = () => {
        updateUser(null)
        history.push('/')
    }

    return (
        <StyledMainMenu>
            <SecondaryButton onClick={() => setOpenMenu(!isOpen)}>
                <Bars/>
                Menu
            </SecondaryButton>
            { isOpen && (
                <StyledMainMenu.Nav>
                    <StyledMainMenu.List>
                        <StyledMainMenu.Item.Link>
                            <StyledMainMenu.Link to={paths.home()} onClick={() => setOpenMenu(false)}>
                                <Estate/>
                                Página inicial
                            </StyledMainMenu.Link>
                        </StyledMainMenu.Item.Link>
                        <StyledMainMenu.Item.Link>
                            <StyledMainMenu.Link to={paths.history()} onClick={() => setOpenMenu(false)}>
                                <History/>
                                Histórico
                            </StyledMainMenu.Link>
                        </StyledMainMenu.Item.Link>
                        <StyledMainMenu.Item.Link>
                            <StyledMainMenu.Link to={paths.help()} onClick={() => setOpenMenu(false)}>
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
                </StyledMainMenu.Nav>
            )}
        </StyledMainMenu>
    )
}

export default MainMenu