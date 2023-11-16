import styled from 'styled-components'

export const StyledSlider = styled.div`

`

StyledSlider.Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`

StyledSlider.Dots = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    overflow: hidden;
    position: relative;

    &::before {
        content: '';
        width: 100%;
        height: 3px;
        background: #95B5F5;
        position: absolute;
        top: 3px;
    }
`

StyledSlider.Dot = styled.div(({isSelected}) =>`
    width: 10px;
    height: 10px;
    background: ${isSelected ? '#0049DD' : '#95B5F5'};
    border-radius: 100%;
    position: relative;

    ${isSelected ? `
        &::after {
            content: '';
            width: 200px;
            height: 3px;
            right: 0;
            display: block;
            position: relative;
            top: 3px;
            right: 200px;
            background: #0049DD
        }
    ` : '' }

`)