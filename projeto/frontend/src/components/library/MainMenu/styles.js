import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledMainMenu = styled.nav`

`

StyledMainMenu.Nav = styled.nav`
    position: absolute;
    background: #FCFCFC;
    border: 1px solid #F1F1F1;
    box-shadow: 0px 2px 2px 0px rgba(204, 204, 204, 0.12), 0px 8px 16px 0px rgba(204, 204, 204, 0.25);
    border-radius: 10px;
    left: 0;
    margin-top: ${({theme}) => theme.spacing.sm};
    z-index: 99999;
`

StyledMainMenu.List = styled.ul(({theme}) =>`
    width: 300px;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xs};
    i {
        display: inline-block;
        vertical-align: bottom;
        margin-right: ${theme.spacing.sm};
    }
`)

StyledMainMenu.Item = styled.li`
    ${({theme}) => theme.typography.body.strong};
`

StyledMainMenu.Item.Link = styled(StyledMainMenu.Item)`
    &:hover {
        background: #EDEDED;
    }
`

StyledMainMenu.Link = styled(Link)(({theme}) =>`
    width: 100%;
    box-sizing: border-box;
    display: inline-block;
    color: #3D3D3D;
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    text-decoration: none;
`)