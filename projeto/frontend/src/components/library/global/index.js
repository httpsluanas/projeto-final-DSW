import { createGlobalStyle } from 'styled-components'
import { device } from '../../Utils/responsive-utils'

export default createGlobalStyle(({theme}) =>`
    html {
        font-size: 62.5%;
    }
    
    body {
        margin: 0;
        padding: ${theme.spacing.xl};
        background: #F3F3F3;
        font-family: 'Noto Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5;
        color: #3D3D3D;

        @media ${device.tablet} {
            padding: ${theme.spacing.md};
        }
    }
`)