import styled from 'styled-components'
import { PrimaryButton } from '../library/buttons'
import { Form } from 'formik'

export const StyledHomePageContainer = styled.div`
`

StyledHomePageContainer.Title = styled.h1(({theme}) =>`
    ${theme.typography.title.xl};
    color: #3D3D3D;
    margin: 0 0 ${theme.spacing.lg} 0;
`)

StyledHomePageContainer.Paragraph = styled.p`
    ${({theme}) => theme.typography.body.base};
    color: #3D3D3D;
    margin: 0;
`

StyledHomePageContainer.Reference = styled.div(({theme}) =>`
    display: flex;
    justify-content: space-between;
    gap: ${theme.spacing.md};
    padding: ${theme.spacing.md} 0;
    border-top: 1px solid #F1F1F1;
    border-bottom: 1px solid #F1F1F1;
`)

StyledHomePageContainer.Reference.Title = styled.h2(({theme}) =>`
    ${theme.typography.title.md};
    color: #3D3D3D;
    margin: 0 0 ${theme.spacing.md} 0;
`)

StyledHomePageContainer.Form = styled(Form)(({theme}) =>`
    display: grid;
    gap: ${theme.spacing.md};
    background: #F3F3F3;
    padding: ${theme.spacing.lg};
    border-radius: 8px;
`)

StyledHomePageContainer.Form.Submit = styled(PrimaryButton)`
    margin-top: ${({theme}) => theme.spacing.sm};
    justify-self: end;
`