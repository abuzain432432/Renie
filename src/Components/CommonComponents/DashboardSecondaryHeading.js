import React from 'react'
import styled from 'styled-components'
import { Typography } from 'antd'
const { Paragraph } = Typography;
const StyledDashboardHeading = styled(Paragraph)`
   font-weight: 500;
   margin-top: 20px !important;
   margin-bottom: 8px  !important;
`
export default function DashboardSecondaryHeading(props) {
    return (
        <StyledDashboardHeading>{props.children}</StyledDashboardHeading>
    )
}
