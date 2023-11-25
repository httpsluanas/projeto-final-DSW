import styled from 'styled-components'
import React from 'react'
import { StyledButton, primarySkin, secondarySkin, noBgSkin } from './styles'

const Button = ({
    children,
    type,
    size = 'LARGE',
    disabled,
    className,
    onClick,
    form,
    onlyIcon
}) => (
    <StyledButton type={type ?? 'button'} {...{size, disabled, className, onClick, form, onlyIcon}}>
        {children}
    </StyledButton>
)

export const PrimaryButton = styled(Button)(primarySkin)
export const SecondaryButton = styled(Button)(secondarySkin)
export const NoBgButton = styled(Button).attrs(({onlyIcon}) => {onlyIcon ?? true})(noBgSkin)
export default Button
