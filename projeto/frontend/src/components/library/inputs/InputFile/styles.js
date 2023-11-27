import styled from 'styled-components'
import { SecondaryButton } from '../../buttons'

export const StyledInputFile = styled(SecondaryButton).attrs({styleType: 'SECONDARY'})(({disabled, hasError, theme}) =>`
    padding: 0;
    width: 100%;
    display: flex;
    gap: 0;

    input {
        display: none;
    }

    width: 100%;
    height: 41px;
    box-sizing: border-box;
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    border-radius: 8px;

    background: ${disabled ? '#EBEBEB' : '#FBFBFB'};
    border: 1px solid ${hasError ? '#DA0000' : '#C4C4C4'};

    ${theme.typography.body.strong};
    color: ${disabled ? '#B1B1B1' : '#3D3D3D'} ;

    &::placeholder{
        color: ${disabled ? '#CACACA' : '#939393'};
    }
`)

StyledInputFile.FakeButton = styled.span`
    display: inline-block;
    white-space: nowrap;
    border-radius: 8px 0 0 8px;
    padding-right: ${({theme}) => theme.spacing.md};
    border-right: 1px solid #C4C4C4;
`

StyledInputFile.FakeInput = styled.span(({theme}) =>`
    width: 100%;
    text-align: left;
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-weight: 400;
`)