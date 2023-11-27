import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { device } from '../../Utils/responsive-utils'

export const StyledMainMenu = styled.nav`
`

StyledMainMenu.List = styled.ul`
    width: 300px;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
    i {
        display: inline-block;
        vertical-align: bottom;
        margin-right: 6px;
    }

    @media ${device.tablet} {
        width: 100%;
        flex-direction: row;
    }
`

StyledMainMenu.Item = styled.li`
    ${({theme}) => theme.typography.body.strong};
`

StyledMainMenu.Item.Profile = styled(StyledMainMenu.Item)`
    background: #FBFBFB;
    border-radius: 16px;
    padding: 16px;
    margin-bottom: 16px;

    dl {
        margin: 0;
        white-space: nowrap;
        dd {
            font-weight: 400;
            color: #767676;
            margin: 0;
            text-decoration: none;
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
    padding: 16px;
    text-decoration: none;
`