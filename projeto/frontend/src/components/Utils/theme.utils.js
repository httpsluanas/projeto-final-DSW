import { css } from 'styled-components'

export const theme = {
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '40px',
    },
    typography: {
        body: {
            base: css`
                font-family: Noto Sans;
                font-size: 1.4rem;
                font-style: normal;
                font-weight: 400;
                line-height: 1.5;
            `,
            strong: css`
                font-family: Noto Sans;
                font-size: 1.4rem;
                font-style: normal;
                font-weight: 600;
                line-height: 1.5;
            `
        },
        label: css`
            font-family: Noto Sans;
            font-size: 1.2rem;
            font-weight: 700;
            line-height: 1.5;
            letter-spacing : 0.05em;
            text-transform: uppercase;
        `,
        title: {
            md: css`
                font-family: Noto Sans;
                font-size: 2.0rem;
                font-weight: 700;
                line-height: 1.3;
            `,
            xl: css`
                font-family: Noto Sans;
                font-size: 2.6rem;
                font-weight: 700;
                line-height: 1.3;
            `
        }
    }
}