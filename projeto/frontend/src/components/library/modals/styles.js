import React from 'react'
import styled from 'styled-components'
import ReactModal from 'react-modal'
import { Multiply } from '../icons'

export const StyledModal = styled(ReactModal)`
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
    padding: 24px;
    background: #F3F3F3;
    border-bottom: 1px solid #F1F1F1;
`

StyledModal.Title = styled.h2`
    grid-area: title;
    font-family: Noto Sans;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    color: #3D3D3D;
    margin: 0;
`

StyledModal.Subtitle = styled.p`
    grid-area: subtitle;

    margin: 0;
    font-family: Noto Sans;
    font-size: 14px;
    font-style: normal;
    color: #3D3D3D;
    margin-top: 8px;
`

StyledModal.CloseButton = styled.button.attrs({children: <Multiply/>})`
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

StyledModal.Body = styled.div`
    padding: 24px 32px;
`

StyledModal.Footer = styled.div`
    border-radius: 0 0 16px 16px;

    display: flex;
    gap: 16px;
    justify-content: flex-end;
    padding: 24px;
    background: #F3F3F3;
    border-top: 1px solid #F1F1F1;
`