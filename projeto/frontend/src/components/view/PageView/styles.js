import styled from 'styled-components'
import { device } from '../../Utils/responsive-utils'

export const StyledPageView = styled.div`
    display: flex;
    justify-content: center;
    gap: ${({theme}) => theme.spacing.xl};

    @media ${device.tablet}{
        flex-direction: column;
    }
`

StyledPageView.ContentBody = styled.div(({theme}) =>`
    background: #FBFBFB;
    width: 100%;
    border-radius: 16px;
    padding: 36px;

    display: flex;
    flex-direction: column;
    gap: 40px;

    h1 {
        ${theme.typography.title.xl};
    }

    h2 {
        ${theme.typography.title.md};
    }
`)