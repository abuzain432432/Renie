import React from 'react'
import StyledDashboardFilterItem from '../../StyledComponents/StyledDashboardFilterItem';
import { Typography } from 'antd';
const { Title, Paragraph } = Typography;

export default function DashboardFilterItem(props) {
    return (
        <StyledDashboardFilterItem className='dashboard-filter-item gap-4 mt-2  d-flex justify-content-center align-items-center'>
            <div>
                <Paragraph className='m-0 mb-1 text'>
                    {props.item.name}
                </Paragraph>
                <Title className='m-0 quanitty fw-bold' level={3}>
                    {props.item.quantity}
                </Title>
            </div>
            <div className='filter-item-img'>
                <img src={props.item.img} alt="filteritem" />
            </div>
        </StyledDashboardFilterItem>
    )
}
