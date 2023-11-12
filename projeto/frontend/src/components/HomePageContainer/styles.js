import styled from 'styled-components'
import { PrimaryButton } from '../library/Button'

export const StyledHomePageContainer = styled.div`

`

StyledHomePageContainer.Reference = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
    padding: 40px 0;
    border-top: 1px solid #F1F1F1;
    border-bottom: 1px solid #F1F1F1;
`

StyledHomePageContainer.Form = styled.form`
    display: grid;
    gap: 16px;
    background: #F3F3F3;
    padding: 24px;
    border-radius: 8px;

    label {
        font-weight: 600;
    }
`

StyledHomePageContainer.Form.Submit = styled(PrimaryButton)`
    margin-top: 8px;
    justify-self: end;
`