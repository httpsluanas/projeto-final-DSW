import React from 'react'

import { StyledInput } from './styles'

const Input = ({
    className,
    id,
    name,
    disabled,
    after,
    ...otherProps
}) => {
    return (
        <StyledInput {...{className}}>
            <StyledInput.Input hasAfter={!!after}
                               {...{disabled, id, name}}
                               {...otherProps}/>
            {!!after && (
                <StyledInput.After {...{disabled}}>
                    {after}
                </StyledInput.After>
            )}
        </StyledInput>
    )
}

export default Input