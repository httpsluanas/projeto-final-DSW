import styled, { css } from 'styled-components'

const base = css`
    display: inline-flex;
    gap: 4px;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 1px solid;
    font-weight: 600;
`

const large = css`
    padding: 16px 24px;
    ${base};
`

const small = css`
    padding: 4px 8px;
    ${base};
`

export const StyledButton = styled.button(({size}) => `
    ${size === 'LARGE' ? large :
      size === 'SMALL' ? small :
      ''};
`)

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