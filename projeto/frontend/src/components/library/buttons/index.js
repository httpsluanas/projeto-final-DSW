import styled from 'styled-components'
import React from 'react'
import { StyledButton, primarySkin, secondarySkin } from './styles'

const Button = ({
    children,
    type,
    size = 'LARGE',
    disabled,
    className,
    onClick,
    form
}) => (
    <StyledButton type={type ?? 'button'} {...{size, disabled, className, onClick, form}}>
        {children}
    </StyledButton>
)

export const PrimaryButton = styled(Button)(primarySkin)
export const SecondaryButton = styled(Button)(secondarySkin)
export default Button
