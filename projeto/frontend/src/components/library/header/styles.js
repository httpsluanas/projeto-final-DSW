import styled from 'styled-components'

export const StyledHeader = styled.header(({theme}) =>`
    padding-bottom: ${theme.spacing.md};
    display: flex;
    justify-content: space-between;
    align-items: center;
`)

StyledHeader.Profile = styled.div(({theme}) =>`
    ${theme.typography.body.strong};
    background: #FBFBFB;
    border-radius: 8px;
    padding: ${theme.spacing.md};
    text-align: right;

    dl {
        margin: 0;
        white-space: nowrap;
        dd {
            font-weight: 400;
            color: #767676;
            margin: 0;
            text-decoration: none;
        }
    }
`)