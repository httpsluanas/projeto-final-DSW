import styled from 'styled-components'
import { SecondaryButton } from '../../Button'

export const StyledInputFile = styled(SecondaryButton).attrs({styleType: 'SECONDARY'})`
    padding: 0;
    width: 100%;
    display: flex;
    gap: 0;

    input {
        display: none;
    }
`

StyledInputFile.FakeButton = styled.span`
    display: inline-block;
    white-space: nowrap;
    border-radius: 8px 0 0 8px;
    padding: 16px 24px;
    border-right: 1px solid #F1F1F1;
`

StyledInputFile.FakeInput = styled.span`
    width: 100%;
    text-align: left;
    padding: 8px 16px;
    background: #FBFBFB;
    font-weight: 400;
    color: #939393;
`