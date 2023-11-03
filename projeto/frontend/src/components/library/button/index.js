import React from 'react'
import styled from 'styled-components'

import { StyledButton, primarySkin, secondarySkin } from './styles'

const Button = ({
    children,
    type = 'button',
    size = 'LARGE',
}) => (
    <StyledButton {...{type, size}}>
        {children}
    </StyledButton>
)

export const PrimaryButton = styled(Button)(primarySkin)
export const SecondaryButton = styled(Button)(secondarySkin)
export default Button
