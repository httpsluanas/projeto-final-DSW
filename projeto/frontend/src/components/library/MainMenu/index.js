import React from 'react'

import { StyledMainMenu } from './styles'
import { Estate, History, InfoCircle, Signout } from '../icons/index'

const MainMenu = ({

}) => {
    return (
        <StyledMainMenu>
            <li>
                <i aria-hidden='true'>
                    <Estate/>
                </i>
                Página inicial
            </li>
            <li>
                <i aria-hidden='true'>
                    <History/>
                </i> Histórico
            </li>
            <li>
                <i aria-hidden='true'>
                    <InfoCircle/>
                </i> Ajuda e informações
            </li>
            <li>
                <i aria-hidden='true'>
                    <Signout/>
                </i> Sair
            </li>
        </StyledMainMenu>
    )
}

export default MainMenu