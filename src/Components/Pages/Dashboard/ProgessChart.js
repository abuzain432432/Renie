import React from 'react';
import StyledProgressChart from '../../StyledComponents/StyledProgressChart';
import CustomBar from './ChartBar';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import ChartTooltip from './ChartTooltip';
import { Button } from 'antd'
import Card from '../../CommonComponents/Card'
import InBinAndCollection from '../../CommonComponents/InBinAndCollection';
import DashboardSecondaryHeading from '../../CommonComponents/DashboardSecondaryHeading';

const data = [
    {
        name: 'Jun',
        inBin: 1,
        Collected: 1,
    },
    {
        name: 'Feb',
        inBin: 2,
        Collected: 1,
    },
    {
        name: 'Mar',
        inBin: 3,
        Collected: 4,
    },
    {
        name: 'Apr',
        inBin: 2,
        Collected: 3,
    },
    {
        name: 'May',
        inBin: 1,
        Collected: 3,
    },
    {
        name: 'june',
        inBin: 1,
        Collected: 3,
    },
    {
        name: 'July',
        inBin: 4,
        Collected: 3,
    },
    {
        name: 'Aug',
        inBin: 3,
        Collected: 4,
    },
    {
        name: 'Sep',
        inBin: 4,
        Collected: 4,
    },
    {
        name: 'Oct',
        inBin: 3,
        Collected: 4,
    },
    {
        name: 'Nev',
        'inBin': 3,
        Collected: 4,
    },
    {
        name: 'Dec',
        'inBin': 3,
        Collected: 4,
    },
];


export default function PregressChar() {
    return (
        <StyledProgressChart >
            <DashboardSecondaryHeading>ACTIVITY</DashboardSecondaryHeading>
            <Card className='chart-wrapper'>
                <div className='d-flex justify-content-between align-items-center chart-header-container'>
                    {/* <div className='d-flex align-items-center gap-3 '>
                        <div className='m-0 d-flex align-items-center'>
                            <InBinDot />
                            <Paragraph className='m-0 '>In bin</Paragraph>
                        </div>
                        <div className='m-0 d-flex align-items-center'>
                            <CollectedDot />
                            <Paragraph className='m-0'>Collected</Paragraph>
                        </div>
                    </div> */}
                    <InBinAndCollection />
                    <div className='d-flex align-slef-start'>
                        <Button className='weeklybtn btn' size='large' >Weekly</Button>
                        <Button className='monthlybtn btn' size='large'>Monthly</Button>
                    </div>
                </div>
                <BarChart
                    width={700}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 10,
                        left: 10,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid stroke='0' />
                    <XAxis axisLine={false} dataKey="name" />
                    <YAxis unit="T" axisLine={false} ticks={[1, 2, 3, 4, 5, 6]} >
                    </YAxis>
                    <Tooltip cursor={{ width: 0, height: 0 }} content={<ChartTooltip />} />
                    <Bar barSize={10} shape={<CustomBar chartHeight={300} />} dataKey="inBin" fill="#4361EE" />
                    <Bar shape={<CustomBar chartHeight={300} />} dataKey="Collected" fill="#E76F00" />
                </BarChart>
            </Card>
        </StyledProgressChart>
    );
}
