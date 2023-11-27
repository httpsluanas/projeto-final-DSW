import styled from 'styled-components'

export const StyledHelpContainer = styled.section`
`

StyledHelpContainer.Title = styled.h1`
    margin: 0;
    ${({theme}) => theme.typography.title.xl};
`

StyledHelpContainer.Paragraph = styled.p(({theme}) =>`
    margin-top: ${theme.spacing.lg};
    ${theme.typography.body.base};
`)