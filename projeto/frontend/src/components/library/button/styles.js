import styled, { css } from 'styled-components'

const baseStructure = css`
    display: inline-flex;
    gap: 4px;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 1px solid;
    font-weight: 600;
    font-family: Noto Sans;
    font-size: 16px;
`

const largeStructure = css`
    ${baseStructure};
    padding: 16px 24px;
    min-width: 170px;
`

const smallStructure = css`
    ${baseStructure};
    padding: 4px 8px;
`

const defaultSkin = css`
    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
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
    ${defaultSkin};

`

export const secondarySkin = css`
    background: #FCFCFC;
    border-color: #F1F1F1;
    color: #3D3D3D;

    &:hover:not(:disabled){
        border-color: #767676;
    }
    ${defaultSkin};

`

export const StyledButton = styled.button(({size}) => `
    ${size === 'LARGE' ? largeStructure :
      size === 'SMALL' ? smallStructure :
      ''};
    cursor: pointer;
`)