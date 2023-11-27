import styled, { css } from 'styled-components'

const baseStructure = css`
    display: inline-flex;
    gap: 4px;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 1px solid;

    ${({theme}) => theme.typography.body.strong};
`

const largeStructure = css`
    padding: ${({onlyIcon}) => onlyIcon ? '16px' : '8px 16px'};
    min-width: ${({onlyIcon}) => onlyIcon ? 'inherit' : '150px'};
    height: 52px;
    ${baseStructure};
`

const smallStructure = css`
    padding: ${({onlyIcon}) => onlyIcon ? '8px' : '4px 8px'};
    font-weight: 700;
    ${baseStructure};
`

export const StyledButton = styled.button`
    ${({size}) => size === 'LARGE' ? largeStructure :
      size === 'SMALL' ? smallStructure :
      ''};
    cursor: pointer;
`

const defaultSkin = css`
    &:focus:not(:active) {
        outline: 2px solid #3D3D3D;
    }
`

export const primarySkin = css`
    background: #2F6EEF;
    border-color: #0049DD;
    color: #FCFCFC;

    &:hover:not(:disabled){
        background: #0049DD;
        border-color: #003399;
    }

    &:disabled{
        background: #95B5F5;
        border-color: #6392F2;
        cursor: not-allowed;
    }

    ${defaultSkin};
`

export const secondarySkin = css`
    background: #FCFCFC;
    border-color: #F1F1F1;
    color: #3D3D3D;

    &:hover:not(:disabled){
        border-color: #767676;
    }

    &:disabled{
        background: #FBFBFB;
        color: #B5B5B5;
        cursor: not-allowed;
    }

    ${defaultSkin};
`

export const noBgSkin = css`
    background: transparent;
    color: #3D3D3D;
    border: none;

    &:hover:not(:disabled){
        background: #F1F1F1;
    }

    &:disabled{
        color: #B5B5B5;
        cursor: not-allowed;
    }

    ${defaultSkin};
`