import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Form, Field } from 'formik';
import { PrimaryButton, NoBgButton } from '../library/buttons'
import { Icon } from '../library/icons';

export const StyledRegisterContainer = styled.section`
    background: #F3F3F3;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - calc(34px + 34px)) //34px é o padding top e bottom do body;
`

StyledRegisterContainer.Container = styled.div(({theme}) =>`
    width: 460px;
    background: #FBFBFB;
    border: 1px solid #F1F1F1;
    padding: ${theme.spacing.xxl} ${theme.spacing.xl};
    border-radius: 16px;
`)

StyledRegisterContainer.Back = styled(Link)`
    ${({theme}) => theme.typography.body.strong};

    color: #2F6EEF;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: #95B5F5;
    }

    ${Icon}{
        vertical-align: text-top;
    }
`

StyledRegisterContainer.Title = styled.h1(({theme}) =>`
    color: #3D3D3D;
    margin: ${theme.spacing.xs} 0 ${theme.spacing.md} 0;

    ${theme.typography.title.xl};
`)

StyledRegisterContainer.Form = styled(Form)`
    display: grid;
    gap: ${({theme}) => theme.spacing.md};
`

StyledRegisterContainer.Submit = styled(PrimaryButton)`
    width: 100%;
`