import styled from 'styled-components'

export const StyledMainMenu = styled.ul`
    width: 275px;
    list-style: none;
    padding: 0;
    margin: 0;
    i {
        display: inline-block;
        width: 1.5em;
        height: 1.5em;
        vertical-align: sub;
        margin-right: 8px;
        svg {
            width: 100%;
            height: 100%;
        }
    }
    li {
        font-weight: 600;
        margin-bottom: 24px;
    }
`