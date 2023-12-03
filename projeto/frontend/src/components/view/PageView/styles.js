import styled from 'styled-components'

export const StyledPageView = styled.div`
    position: relative;
`

StyledPageView.ContentBody = styled.div(({theme}) =>`
    background: #FBFBFB;
    border-radius: 16px;
    padding: ${theme.spacing.lg};

    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.lg};

    h1 {
        ${theme.typography.title.xl};
    }

    h2 {
        ${theme.typography.title.md};
    }
`)