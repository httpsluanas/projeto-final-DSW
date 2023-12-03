import styled from 'styled-components'

export const StyledInput = styled.div`
    position: relative;
`

StyledInput.Input = styled.input(({hasError, disabled, theme}) => `
    width: 100%;
    height: 41px;
    box-sizing: border-box;
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    border-radius: 8px;

    background: ${disabled ? '#EBEBEB' : '#FBFBFB'};
    border: 1px solid ${hasError ? '#DA0000' : '#C4C4C4'};

    ${theme.typography.body.base}
    color: ${disabled ? '#B1B1B1' : '#3D3D3D'} ;

    &::placeholder{
        color: ${disabled ? '#CACACA' : '#939393'};
    }
`)

StyledInput.After = styled.div(({disabled}) =>`
    position: absolute;
    inset: 0 6px 0 auto;
    color: ${disabled ? '#B1B1B1' : '#3D3D3D'};
    display: flex;
    justify-content: center;
    align-items: center;
`)