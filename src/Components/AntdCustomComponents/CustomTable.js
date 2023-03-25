import React, { useMemo } from 'react'
import Card from '../../Components/CommonComponents/Card'
import { Table, Typography } from 'antd'
import StyledCustomTable from '../StyledComponents/StyledCustomTable';
import DashboardSecondaryHeading from '../CommonComponents/DashboardSecondaryHeading';

const { Paragraph } = Typography;
export default function CustomTable(props) {
    const column = useMemo(() => {
        return [
            {
                title: 'RANK',
                dataIndex: 'rank',
                key: 'key',
                render: (rank) => {
                    return (
                        <div className={'align-items-center d-flex justify-content-center'}>
                            <p className='mb-0  custom-table-number-cell'>
                                {rank}
                            </p>
                        </div>
                    )
                }
            },
            {
                title: 'BRAND',
                dataIndex: 'brand',
                key: 'key',
            },
            {
                title: 'BOTTLES',
                dataIndex: 'bottle',
                key: 'key',

            },
            {
                title: 'WEIGHT',
                dataIndex: 'weight',
                key: 'key',

            },
        ]
    }, [])
    return (
        <StyledCustomTable>
            <DashboardSecondaryHeading>
                {props.tableTitle}
            </DashboardSecondaryHeading>
            <Card className='pt-2 pb-1 table-con'>
                <Table pagination={false} footer={false} dataSource={props.data} columns={column} />
            </Card>
        </StyledCustomTable>
    )
}
