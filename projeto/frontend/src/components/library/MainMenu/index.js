import React from 'react'

import { StyledMainMenu } from './styles'
import { Estate, History, InfoCircle, Signout } from '../icons/index'

const MainMenu = ({

}) => {
    return (
        <StyledMainMenu>
            <StyledMainMenu.Item.Profile>
                    <figure>
                        <img src='https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat.jpg'/>
                    </figure>
                    <dl>
                        <dt>Nome Sobrenome</dt>
                        <dd>email@email.com</dd>
                    </dl>
            </StyledMainMenu.Item.Profile>
            <StyledMainMenu.Item.Link>
                <StyledMainMenu.Link to=''>
                    <i aria-hidden='true'>
                        <Estate/>
                    </i>
                    Página inicial
                </StyledMainMenu.Link>
            </StyledMainMenu.Item.Link>
            <StyledMainMenu.Item.Link>
                <StyledMainMenu.Link to=''>
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
                <StyledMainMenu.Link to=''>
                    <i aria-hidden='true'>
                        <Signout/>
                    </i> Sair
                </StyledMainMenu.Link>
            </StyledMainMenu.Item.Link>
        </StyledMainMenu>
    )
}

export default MainMenu