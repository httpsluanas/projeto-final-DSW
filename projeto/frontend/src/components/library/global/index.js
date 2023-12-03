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
        ${theme.typography.body.base};
        color: #3D3D3D;

        @media ${device.tablet} {
            padding: ${theme.spacing.md};
        }
    }
`)