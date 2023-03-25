import React from 'react'
import { ACCENT_COLOR } from '../../Constants/COLOR'
import styled from 'styled-components'
const StyledDot = styled.div`
background-color:${ACCENT_COLOR};
width:13px;
height:13px;
border-radius:50%;
margin-right:5px;
`
export default function CollectedDot() {
    return (
        <StyledDot />
    )
}
