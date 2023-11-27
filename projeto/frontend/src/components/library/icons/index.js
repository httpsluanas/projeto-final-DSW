import React from 'react'
import styled from 'styled-components'
import * as Unicons from '@iconscout/react-unicons'

export const Icon = styled.i.attrs({'aria-hidden': true})`
    display: inline-block;

    width: 1.5em;
    height: 1.5em;

    line-height: 0;

    svg {
        height: 100%;
        width : 100%;
    }
`

export const wrapIcon = (SVG) => ({children, ...props}) => (
    <Icon {...props}>
        <SVG/>
    </Icon>
)

export const Estate = wrapIcon(Unicons.UilEstate)
export const InfoCircle = wrapIcon(Unicons.UilInfoCircle)
export const Signout = wrapIcon(Unicons.UilSignout)
export const History = wrapIcon(Unicons.UilHistory)
export const Multiply = wrapIcon(Unicons.UilMultiply)
export const ExclamationOctagon = wrapIcon(Unicons.UilExclamationOctagon)
export const Eye = wrapIcon(Unicons.UilEye)
export const EyeSlash = wrapIcon(Unicons.UilEyeSlash)
export const AngleLeft = wrapIcon(Unicons.UilAngleLeft)
export const Pen = wrapIcon(Unicons.UilPen)
export const TrashAlt = wrapIcon(Unicons.UilTrashAlt)