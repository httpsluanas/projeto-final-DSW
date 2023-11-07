import React from 'react'
import { StyledButton } from './styles'

const Button = ({
    children,
    styleType = 'PRIMARY',
    type,
    size = 'LARGE',
    disabled,
    className,
    onClick
}) => (
    <StyledButton type={type ?? 'button'} styleType={styleType ?? 'PRIMARY'} {...{size, disabled, className, onClick}}>
        {children}
    </StyledButton>
)

export default Button
