import React from 'react'
import DashboardFilter from './DashboardFilter'
import { Typography } from 'antd';
import Statistics from './Statistics';
import CustomTable from '../../AntdCustomComponents/CustomTable';
import ProgessChart from './ProgessChart';
import StyledDetailedTracking from '../../StyledComponents/StyleDetailedTrackingTable';
import StyledDashboard from '../../StyledComponents/StyledDashboard';
import { TOP_BRANDING_DUMPY_DATA, AREA_COLUMN, AREA_DUMY_DATA, DETAILED_TRACKING_COLUMN, ACTIVITY_DUMY_DATA, COLLECTION_DUMY_DATA, DETAILED_TRACKING_DUMY_DATA } from '../../../Constants/DASHBOARD_DUMY';
import { Row, Col } from 'antd'
import StyledDetailedTable from '../../StyledComponents/StyledDetailedTable';
import Card from '../../CommonComponents/Card'
import DashboardSecondaryHeading from '../../CommonComponents/DashboardSecondaryHeading';
import InBinAndCollection from '../../CommonComponents/InBinAndCollection';
const { Title } = Typography;

export default function Dashboard() {
    return (
        <StyledDashboard >
            <Title level={2} className='fw-bold'> Tracking overview</Title>
            <DashboardFilter />
            <div className='d-flex gap-5 justify-content-between'>
                <div>
                    <CustomTable tableTitle='TOP BRANDS' data={TOP_BRANDING_DUMPY_DATA} />
                    <Row gutter={[32, 32]}>
                        <Col span={12} >
                            <Statistics activity={true} data={ACTIVITY_DUMY_DATA} />
                        </Col>
                        <Col span={12} >
                            <Statistics data={COLLECTION_DUMY_DATA} />
                        </Col>
                    </Row>
                </div>
                <ProgessChart />
            </div>
            <div className='d-flex gap-4'>
                <div className='details-table-con'>
                    <DashboardSecondaryHeading >DETAILED COLLECTIONS</DashboardSecondaryHeading>
                    <Card>
                        <StyledDetailedTable pagination={false} columns={AREA_COLUMN} dataSource={AREA_DUMY_DATA} />
                    </Card>
                </div>
                <CustomTable tableTitle='TOP AREAS' data={TOP_BRANDING_DUMPY_DATA} />
            </div>
            <div>
                <DashboardSecondaryHeading>DETAILED TRACKING</DashboardSecondaryHeading>
                <Card>
                    <InBinAndCollection className='margin-left' />
                    <StyledDetailedTracking pagination={false} dataSource={DETAILED_TRACKING_DUMY_DATA} columns={DETAILED_TRACKING_COLUMN} />
                </Card>
            </div>
        </StyledDashboard >
    )
}
