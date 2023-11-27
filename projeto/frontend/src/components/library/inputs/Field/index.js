import React from 'react'
import { useField } from 'formik'

import Input from '../Input'
import { ExclamationOctagon } from '../../icons'

import { StyledField } from './styles'

const Field = ({
    id,
    label,
    as = Input,
    error,
    ...props
}) => {

    const [field, meta] = useField(props)
    const InputField = as

    return (
        <StyledField>
            <StyledField.Label htmlFor={id}>
                {label}
            </StyledField.Label>
            <StyledField.InputContainer>
                <InputField {...field} {...props} {...{id}} hasError={!!error}/>
                {meta.touched && meta.error && (
                    <StyledField.Error>
                        <ExclamationOctagon/> {meta.error}
                    </StyledField.Error>
                )}
            </StyledField.InputContainer>
        </StyledField>
    )
}

export default Field