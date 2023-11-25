import styled, { css } from 'styled-components'
import { Form, Field, ErrorMessage } from 'formik';
import { PrimaryButton, NoBgButton } from '../../library/buttons'

export const StyledLoginView = styled.section`
    background: #F3F3F3;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - calc(34px + 34px)) //34px é o padding top e bottom do body;
`

StyledLoginView.Container = styled.div`
    width: 460px;
    background: #FBFBFB;
    border: 1px solid #F1F1F1;
    padding: 40px 32px;
    border-radius: 16px;
`

StyledLoginView.Form = styled(Form)`
    display: grid;
    gap: 24px;
`

StyledLoginView.Form.FieldContainer = styled.div`
    display: grid;
    grid-template-areas: "label label"
                         "input input"
                         "message helper";
`

StyledLoginView.Form.Label = styled.label`
    grid-area: label;
    
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
    color: #3D3D3D;
`
const fieldStyle = css`
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    border-radius: 8px;
    background: #F6F6F6;
    line-height: 180%;
    font-family: Noto Sans;
    color: #3D3D3D;
    &::placeholder{
        color: #939393;
    }
`

StyledLoginView.Field = styled(Field)(({$hasError}) =>`
    grid-area: input;

    ${fieldStyle};
    padding: 8px 16px;
    border: 1px solid ${$hasError ? '#DA0000' : '#C4C4C4'};
`)

StyledLoginView.Container.Password = styled.div(({$hasError}) =>`
    grid-area: input;
    height: 52px;

    border-radius: 8px;
    position: relative;

    input {
        padding: 8px 16px;
        border: none;
        border: 1px solid ${$hasError ? '#DA0000' : '#C4C4C4'};
        ${fieldStyle}
    }
`)

StyledLoginView.ShowPasswordBtn = styled(NoBgButton)`
    position: absolute;
    right: 6px;
    top: 6px;
`

StyledLoginView.ForgotPassword = styled.a`
    grid-area: helper;

    display: inline-block;
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
    margin-bottom: 0;
    
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
    grid-area: message;

    display: inline-block;
    font-size: 12px;
    color: #DA0000;
    margin-top: 8px;
    margin-bottom: 0;
    svg {
        width: 16px;
        height: 16px;
        vertical-align: text-top;
    }
`

StyledLoginView.Submit = styled(PrimaryButton)`
    width: 100%;
`