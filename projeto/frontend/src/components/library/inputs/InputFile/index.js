import React, { useRef } from 'react'

import { StyledInputFile } from './styles'

const InputFile = ({
    id,
    name,
    disabled,
    onChange,
    value,
    ...props
}) => {

    const inputRef = useRef()

    const handleClick = () => (
        (inputRef.current).click()
    )

    return (
        <StyledInputFile {...props} onClick={handleClick} disabled={disabled}>
            <input id={id} name={name} disabled={disabled} ref={inputRef} onChange={onChange} type='file'/>
            <StyledInputFile.FakeButton>
                Selecionar arquivo .csv
            </StyledInputFile.FakeButton>
            <StyledInputFile.FakeInput>
                {value?.name}
            </StyledInputFile.FakeInput>
        </StyledInputFile>
    )
}

export default InputFile