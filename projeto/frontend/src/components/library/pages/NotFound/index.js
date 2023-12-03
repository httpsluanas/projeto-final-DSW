import React from 'react'
import { Link } from 'react-router-dom'

import notFoundError from '../../../../../static/images/NotFoundError.png'
import { PrimaryButton } from '../../buttons'

import { StyledNotFound } from './styles'

const NotFound = ({
    url
}) => (
    <StyledNotFound>
        <figure>
            <img src={notFoundError}/>
        </figure>
        <h1>Página não encontrada</h1>
        <PrimaryButton role='a' onClick={() => window.location.href = url}>
            Voltar para a página inicial
        </PrimaryButton>
    </StyledNotFound>
)

export default NotFound