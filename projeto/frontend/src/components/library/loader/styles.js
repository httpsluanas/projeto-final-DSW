import React from 'react'
import styled from 'styled-components'

export const StyledLoader = styled.div.attrs({children: <span/>})(({theme}) =>`
    width: 100%;
    text-align: center;

    span {
        width: ${theme.spacing.lg};
        height: ${theme.spacing.lg};
        border: 3px solid #E6E6E6;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;

        @keyframes rotation {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
    }
`)