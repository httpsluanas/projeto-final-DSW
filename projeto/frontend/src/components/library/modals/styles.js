import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { Multiply } from '../icons'

export const StyledModal = styled(Modal)`
    width: 700px;

    transform: scale(0.5);
    background: red;

    border-radius: 16px;
    border: 1px solid #ccc;
    background: #fff;
    outline: none;

    &.ReactModal__Content--after-open{
        transform: translate(0);
    }

    &.ReactModal__Content--before-close{ 
        transform: translate(0.5); 
    }
`

StyledModal.Header = styled.div`
    border-radius: 16px 16px 0 0;
    display: grid;
    grid-template-areas: "title close"
                         "subtitle close";
    padding: ${({theme}) => theme.spacing.lg};
    background: #F3F3F3;
    border-bottom: 1px solid #F1F1F1;
`

StyledModal.Title = styled.h2`
    grid-area: title;
    color: #3D3D3D;
    margin: 0;

    ${({theme}) => theme.typography.title.md};
`

StyledModal.Subtitle = styled.p`
    grid-area: subtitle;

    margin: 0;
    color: #3D3D3D;
    margin-top: 8px;

    ${({theme}) => theme.typography.body.base};
`

StyledModal.CloseButton = styled.button.attrs({children: <Multiply/>})`
    grid-area: close;
    justify-self: right;
    cursor: pointer;
    background: transparent;
    border: none;
    border-radius: 4px;
    color: #3D3D3D;
    svg {
        vertical-align: middle;
    }
    &:hover {
        background: #EDEDED;
    }
`

StyledModal.Body = styled.div(({theme}) =>`
    padding: ${theme.spacing.lg} ${theme.spacing.xl};
    ${theme.typography.body.base};
`)

StyledModal.Footer = styled.div(({theme}) =>`
    border-radius: 0 0 16px 16px;

    display: flex;
    gap: ${theme.spacing.md};
    justify-content: flex-end;
    padding: ${theme.spacing.lg};
    background: #F3F3F3;
    border-top: 1px solid #F1F1F1;
`)