import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledMainMenu = styled.nav`

`

StyledMainMenu.List = styled.u`
    width: 300px;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
    i {
        display: inline-block;
        width: 1.5em;
        height: 1.5em;
        vertical-align: bottom;
        margin-right: 6px;
        svg {
            width: 100%;
            height: 100%;
        }
    }
`

StyledMainMenu.Item = styled.li`
    font-weight: 600;
`

StyledMainMenu.Item.Profile = styled(StyledMainMenu.Item)`
    background: #FBFBFB;
    border-radius: 16px;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;

    figure {
        width: 57px;
        height: 57px;
        margin: 0;
        padding: 0;
        border-radius: 50%;
        overflow: hidden;
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }

    dl {
        margin: 0;
        white-space: nowrap;
        dd {
            font-weight: 400;
            color: #767676;
            margin: 0;
        }
    }
`

StyledMainMenu.Item.Link = styled(StyledMainMenu.Item)`
    border-radius: 10px;
    &:hover {
        background: #EDEDED;
    }
`

StyledMainMenu.Link = styled(Link)`
    width: 100%;
    box-sizing: border-box;
    display: inline-block;
    color: #3D3D3D;
    padding: 16px 16px;
    text-decoration: none;
`