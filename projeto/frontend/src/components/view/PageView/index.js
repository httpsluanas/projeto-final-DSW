import React from 'react'

import MainMenu from '../../library/MainMenu'
import { PrimaryButton } from '../../library/button'
import { StyledPageView } from './styles'

const PageView = ({

}) => {
    return (
        <StyledPageView>
            <MainMenu/>
            <StyledPageView.ContentBody>
                <div>
                    <h1>Título</h1>
                    <p>esse sistema tem como objetivo fazer isso e aquilo e tambem aquilo outro e ah n sei oq n sei oq esse sistema auxiliara voce a fqazer isso e aquilo na area tal e os caralho e aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa quero que tenha mais linhaaaaaaaaaaaaaaaaaaaaas mas tudo bem se n tiver boa noite a todos e todas espero que gosterm e que façam bom uso deste belo sistema</p>
                </div>
                <StyledPageView.ContentBody.Reference>
                    <div>
                        <h2>Tabela referência</h2>
                        <p>essa tabela bla bla bla blab alb alb alb alb </p>
                    </div>
                    <div>
                        fotinha da tabela
                    </div>
                </StyledPageView.ContentBody.Reference>
                <StyledPageView.ContentBody.Form>
                    <label> Selecionar arquivo </label>
                    <input type='file'/>
                    <PrimaryButton>Enviar</PrimaryButton>
                </StyledPageView.ContentBody.Form>
            </StyledPageView.ContentBody>
        </StyledPageView>
    )
}

export default PageView