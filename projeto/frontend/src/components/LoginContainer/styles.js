import styled, { css } from 'styled-components'
import { Form, Field, ErrorMessage } from 'formik';
import { PrimaryButton, NoBgButton } from '../library/buttons'

export const StyledLoginContainer = styled.section`
    background: #F3F3F3;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - calc(34px + 34px)) //34px é o padding top e bottom do body;
`

StyledLoginContainer.Container = styled.div(({theme}) =>`
    width: 460px;
    background: #FBFBFB;
    border: 1px solid #F1F1F1;
    padding: ${theme.spacing.xxl} ${theme.spacing.xl};
    border-radius: 16px;
`)

StyledLoginContainer.Form = styled(Form)`
    display: grid;
    gap: ${({theme}) => theme.spacing.md};
`

StyledLoginContainer.RegisterMessage = styled.p(({theme}) =>`
    color: #3D3D3D;
    text-align: center;
    margin-bottom: 0;
  
    ${theme.typography.body.base};
    
    a {
        color: #2F6EEF;
        text-decoration: none;
        ${theme.typography.body.strong};

        &:hover {
            text-decoration: underline;
        }
    }
`)

StyledLoginContainer.ErrorMessage = styled.p`
    grid-area: message;

    display: inline-block;
    color: #DA0000;
    margin-top: 8px;
    margin-bottom: 0;
    svg {
        width: 16px;
        height: 16px;
        vertical-align: text-top;
    }
`

StyledLoginContainer.Submit = styled(PrimaryButton)`
    width: 100%;
`