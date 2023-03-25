import React from 'react'
import styled from 'styled-components'
import { PRIMARY_COLOR } from '../../Constants/COLOR'
const StyledDot = styled.div`
background-color:${PRIMARY_COLOR};
width:13px;
height:13px;
border-radius:50%;
margin-right:5px;
`
export default function InBinDot() {
    return (
        <StyledDot />
    )
}
