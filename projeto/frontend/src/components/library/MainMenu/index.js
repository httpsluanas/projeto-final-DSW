import React from 'react'
import { useHistory } from 'react-router-dom'

import { StyledMainMenu } from './styles'
import { Estate, History, InfoCircle, Signout } from '../icons/index'

import { usePaths } from '../../Utils/utils'
import { useUser } from '../../Utils/user-utils'

const MainMenu = ({
    user
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
                    <figure>
                        <img src='https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat.jpg'/>
                    </figure>
                    <dl>
                        <dt>{user.username}</dt>
                        <dd>{user.email}</dd>
                    </dl>
                </StyledMainMenu.Item.Profile>
                <StyledMainMenu.Item.Link>
                    <StyledMainMenu.Link to={paths.home()}>
                        <i aria-hidden='true'>
                            <Estate/>
                        </i>
                        Página inicial
                    </StyledMainMenu.Link>
                </StyledMainMenu.Item.Link>
                <StyledMainMenu.Item.Link>
                    <StyledMainMenu.Link to={paths.history()}>
                        <i aria-hidden='true'>
                            <History/>
                        </i> Histórico
                    </StyledMainMenu.Link>
                </StyledMainMenu.Item.Link>
                <StyledMainMenu.Item.Link>
                    <StyledMainMenu.Link to=''>
                        <i aria-hidden='true'>
                            <InfoCircle/>
                        </i> Ajuda e informações
                    </StyledMainMenu.Link>
                </StyledMainMenu.Item.Link>
                <StyledMainMenu.Item.Link>
                    <StyledMainMenu.Link to={'/'} onClick={handleLogout}>
                        <i aria-hidden='true'>
                            <Signout/>
                        </i> Sair
                    </StyledMainMenu.Link>
                </StyledMainMenu.Item.Link>
            </StyledMainMenu.List>
        </StyledMainMenu>
    )
}

export default MainMenu