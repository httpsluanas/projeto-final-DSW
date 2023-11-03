import styled from 'styled-components'

export const StyledPageView = styled.div`
    display: flex;
    gap: 32px;
`

StyledPageView.ContentBody = styled.div`
    background: #FBFBFB;
    width: 100%;
    border-radius: 16px;
    padding: 36px;

    display: flex;
    flex-direction: column;
    gap: 40px;

    h1, h2, p {
        margin: 0;
    }

    h1, h2 {
        margin-bottom: 24px;
    }
`

StyledPageView.ContentBody.Reference = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
    padding: 40px 0;
    border-top: 1px solid #F1F1F1;
    border-bottom: 1px solid #F1F1F1;
`

StyledPageView.ContentBody.Form = styled.div`
    background: #F3F3F3;
    padding: 24px;
    border-radius: 8px;
`