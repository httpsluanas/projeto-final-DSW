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