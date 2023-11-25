import styled from 'styled-components'
import { Form, Field, ErrorMessage } from 'formik';
import { PrimaryButton } from '../../library/buttons'

export const StyledLoginView = styled.section`
    background: #F3F3F3;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - calc(34px + 34px)) //34px é o padding top e bottom do body;
`

StyledLoginView.Form = styled(Form)`
    width: 460px;
    background: #FBFBFB;
    border: 1px solid #F1F1F1;
    padding: 40px 32px;
    border-radius: 16px;
`

StyledLoginView.Form.Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
    color: #3D3D3D;
`

StyledLoginView.Field = styled(Field)(({hasError}) =>`
    padding: 8px 16px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 8px;
    background: #F6F6F6;
    border: 1px solid ${hasError ? '#DA0000' : '#C4C4C4'};
    line-height: 180%;
    font-family: Noto Sans;
    color: #3D3D3D;
    &::placeholder{
        color: #939393;
    }
`)

StyledLoginView.ForgotPassword = styled.a`
    display: block;
    width: 100%;
    margin-top: 8px;
    color: #939393;
    text-align: right;
    font-size: 12px;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

StyledLoginView.RegisterMessage = styled.p`
    font-size: 14px;
    color: #3D3D3D;
    text-align: center;
    
    a {
        color: #2F6EEF;
        font-weight: 800;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`

StyledLoginView.ErrorMessage = styled.p`
    font-size: 12px;
    color: #DA0000;
    margin-top: 8px;
    svg {
        width: 16px;
        height: 16px;
        vertical-align: text-top;
    }
`

StyledLoginView.Submit = styled(PrimaryButton)`
    width: 100%;
`