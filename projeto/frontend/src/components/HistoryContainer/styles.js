import styled from 'styled-components'
import { SecondaryButton } from '../library/buttons'
import { Input } from '../library/inputs'
import { device, size } from '../Utils/responsive-utils'

export const StyledHistoryContainer = styled.div`

`
StyledHistoryContainer.Title = styled.h1(({theme}) =>`
    margin: 0 0 ${theme.spacing.lg} 0;
    ${theme.typography.title.xl};
`)

StyledHistoryContainer.Table = styled.table(({theme}) =>`
    width: 100%;
    border-radius: 8px;
    border-collapse: collapse;
    overflow: hidden;

    thead {
        background: #F3F3F3;
        color: #3D3D3D;
    }

    th {
        ${theme.typography.body.strong};
    }

    td {
        ${theme.typography.body.base};
    }

    th, td {
        padding: ${theme.spacing.sm};
        text-align: left;
        text-wrap: nowrap;

        &:first-of-type {
            width: 60%;
            padding-left: ${theme.spacing.md};
            @media ${device.laptopL} {
                max-width: 200px;
            }
        }
        &:last-of-type {
            padding-right: ${theme.spacing.md};
        }
    }

    tr {
        border-bottom: 1px solid #B5B5B5;
    }

    tbody {
        color: #767676;
    }
`)

StyledHistoryContainer.FileName = styled.span`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
`

StyledHistoryContainer.Actions = styled.div`
    display: inline-flex;
    gap: ${({theme}) => theme.spacing.sm};

    span {
        @media ${device.tablet} {
            display: none;
        }
    }
`

StyledHistoryContainer.RenameButton = styled(SecondaryButton).attrs({size: 'SMALL'})`
    color: #007EC5;
    border-color: #007EC5;

    &:hover:not(:disabled) {
        color: #006DAB;
        border-color: #006DAB;
    }
`

StyledHistoryContainer.RemoveButton = styled(SecondaryButton).attrs({size: 'SMALL'})`
    color: #D20000;
    border-color: #D20000;

    &:hover:not(:disabled) {
        color: #AB0000;
        border-color: #AB0000;
    }
`

StyledHistoryContainer.RenameInput = styled(Input)`
    @media ${device.laptopL} {
        width: 100%;
    }
`

StyledHistoryContainer.Table.Editing = styled.div(({theme}) =>`
    display: flex;
    gap: ${theme.spacing.md};
    align-items: center;

    @media ${device.laptopL} {
        flex-direction: column;
        align-items: flex-start;
        gap: ${theme.spacing.sm};

        button {
            margin-right: ${theme.spacing.sm};
        }
    }
`)